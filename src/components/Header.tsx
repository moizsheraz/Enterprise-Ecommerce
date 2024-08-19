import { Link } from "react-router-dom";
import Logo from "../assets/logos/image.png"
import { ArrowBigRightDash } from "lucide-react";
const Header = () => {
  return (
    <header className="bg-[#eab308] flex items-center justify-between p-6 shadow-md">
      {/* Logo and Company Name */}
      <Link to={"/"} className="flex items-center space-x-4">
        <img 
          src={Logo}
          alt="BizBreaks Logo" 
          className="h-14 w-auto  rounded-full" 
        />
        <h1 className="text-white text-2xl font-bold">BizBreaks</h1>
    </Link>


      <div className="flex items-center space-x-4">
        <Link 
          to="/login" 
          className="bg-white text-[#eab308] px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
        >
          Sign In
        </Link>
        <Link 
          to="/register" 
          className="bg-white text-[#eab308] flex justify-center items-center px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
        >
         Try for Free <ArrowBigRightDash className="w-8 h-8"/>
        </Link>
      </div>
    </header>
  );
};

export default Header;
