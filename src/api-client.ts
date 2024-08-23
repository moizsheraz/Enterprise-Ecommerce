import { LoginPageData } from "./components/Login";
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
export const validateToken = async () => {
  const response = await fetch(`${BASE_URL}/api/auth/verify-token`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Token invalid");
  }

  return response.json();
};
export const Logout=async()=>{
  const response  = await fetch(`${BASE_URL}/api/auth/logout`,{
    method: 'POST',
    credentials: "include",
  })
  if (!response.ok) {
    throw new Error("Failed to logout");
  }
  return response.json();
}
export const LoginClient=async(formData:LoginPageData)=>{
  const response = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }
  return body;
}
