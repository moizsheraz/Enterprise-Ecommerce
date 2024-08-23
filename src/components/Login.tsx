import Logo from "../assets/logos/image.png"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import {useMutation} from "react-query"
import { useQueryClient } from "react-query"
import { useAppContext } from "../contexts/AppContext"
import { LoginClient } from "../api-client"
import { useNavigate } from "react-router-dom"
export type LoginPageData={
  email: string,
  password: string,
}
const Login = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {showToast} = useAppContext();
  const {register,formState:{errors},handleSubmit}= useForm<LoginPageData>();
  const mutation = useMutation(LoginClient, {
    onSuccess: async () => {
      showToast({ message: "Sign in Successful!", type: "success" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/")
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type:"error" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        alt="Your Company"
        src={Logo}
        className="mx-auto h-10 w-auto"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form  method="POST" onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              type="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              {...register("email", { required: "This field is required" })}
            ></input>
            {errors.email && <span className="text-red-500 text-md">{errors.email.message}</span>}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-primary hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              {...register("password", { required: "This field is required" })}

            ></input>
             {errors.password && <span className="text-red-500 text-md">{errors.password.message}</span>}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Not a User?{' '}
        <Link to="/register" className="font-semibold leading-6 text-primary hover:text-primary">
          Register here
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Login