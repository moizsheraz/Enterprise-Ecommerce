import { LucideLogOut } from "lucide-react";
import { useQueryClient,useMutation } from "react-query";
import { Logout } from "../api-client";
import { useAppContext } from "../contexts/AppContext";
const SignOut = () => {
    const queryClient = useQueryClient();
    const {showToast} = useAppContext();
    const mutation = useMutation(Logout, {
        onSuccess: async () => {
          await queryClient.invalidateQueries("validateToken");
          showToast({ message: "Signed Out!", type: "success" });
        },
        onError: (error: Error) => {
          showToast({ message: error.message, type: "error" });
        },
      });
      const handleLogout=()=>{
        mutation.mutate();
      }
  return (
    <button onClick={handleLogout}><LucideLogOut className="h-8 w-8"/></button>
  )
}

export default SignOut