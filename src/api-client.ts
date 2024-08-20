import { RegisterFormData } from "./components/Register";

const BASE_URL = import.meta.env.VITE_API_URL;
export const register = async(data:RegisterFormData)=>{
const response = await fetch(`${BASE_URL}/api/users/register`, {
    method: 'POST',
    credentials:"include",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
 });

 const responseBody = await response.json();
 if (!response.ok) {
    throw new Error(responseBody.message);
  }
  
}