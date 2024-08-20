import { Link } from "react-router-dom";
import Logo from "../assets/logos/image.png";
import { ArrowBigRightDash } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#eab308] flex items-center justify-between p-4 md:p-6 shadow-md">
      {/* Logo and Company Name */}
      <Link to={"/"} className="flex items-center space-x-3 md:space-x-4">
        <img 
          src={Logo}
          alt="BizBreaks Logo" 
          className="h-10 w-auto md:h-14 rounded-full" 
        />
        <h1 className="text-white text-lg md:text-2xl font-bold">BizBreaks</h1>
      </Link>

      <div className="flex items-center space-x-2 md:space-x-4">
        <Link 
          to="/login" 
          className="bg-white text-[#eab308] px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-200"
        >
          Sign In
        </Link>
        <Link 
          to="/register" 
          className="bg-white text-[#eab308] flex justify-center items-center px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-200"
        >
          Try for Free <ArrowBigRightDash className="w-6 h-6 md:w-8 md:h-8 ml-1"/>
        </Link>
      </div>
    </header>
  );
};

export default Header;
