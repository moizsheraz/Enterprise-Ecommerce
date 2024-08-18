import { Link } from "react-router-dom";
import Logo from "../assets/logos/image.png"
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


      {/* Sign In Button */}
      <div className="flex items-center">
        <Link 
          to="/signin" 
          className="bg-white text-[#eab308] px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
