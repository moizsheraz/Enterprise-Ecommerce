import Logo from "../assets/logos/image.png"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import * as apiClient from "../api-client" // import all function
import { SnackbarProvider } from 'notistack'
import { useAppContext } from "../contexts/AppContext"
export type RegisterFormData={
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
}

const Register = () => {
    const {register,watch,handleSubmit,formState:{errors}} = useForm<RegisterFormData>();
    const {showToast} = useAppContext();
    const mutation = useMutation(apiClient.register,{
      onSuccess:()=>{
        showToast({message: "Registration successful", type: "success"})
      },
      onError:(error:Error)=>{
        showToast({message:error.message, type: "error"})
      }
    });
  const onSubmit=handleSubmit((data)=>{
    mutation.mutate(data); 
  })
  return (
    <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
    <div className="text-center mb-16">
      <a href="javascript:void(0)"><img
        src={Logo} alt="logo" className="mx-auto h-10 w-auto" />
      </a>
      <h4 className="text-gray-800 text-base font-semibold mt-6">Sign up into your account</h4>
    </div>

    <form onSubmit={onSubmit}>
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label className="text-gray-800 text-sm mb-2 block">First Name</label>
          <input type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all" placeholder="Enter name"
          {...register("firstName",{required:"This is field is mandatory"})}
          />
          {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
        </div>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
          <input  type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all" placeholder="Enter last name"
          {...register("lastName",{required:"This is field is mandatory"})}
          />
           {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
        </div>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
          <input  type="email" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all" placeholder="Enter email"
          {...register("email",{required:"This is field is mandatory"})}

          />
           {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

        </div>
  
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Password</label>
          <input  type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all" placeholder="Enter password"
          {...register("password",{required:"This is field is mandatory",minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          }})}
          />
           {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
          <input  type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all" placeholder="Enter confirm password"
          {...register("confirmPassword",{
            validate:(val)=>{
                return val === watch("password") || "Passwords do not match"
            }
          })}
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
        </div>
      
        <p className="mt-10 text-center text-sm text-gray-500">
        Already having a account ? {' '}
        <Link to="/login" className="font-semibold leading-6 text-primary hover:text-primary">
          Login here
        </Link>
      </p>
      </div>
      <div className="!mt-12">
        <button type="submit" className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-primary hover:bg-blue-700 focus:outline-none">
          Sign up
        </button>
      </div>
    </form>
    <SnackbarProvider autoHideDuration={5000} />
  </div>
  )
}

export default Register