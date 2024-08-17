
import React from "react"
import Header from "../components/Header"
interface LayoutProps{
    children:React.ReactNode
}
const Layout = ({children}:LayoutProps) => {
  return (
<Header/>
  )
}

export default Layout