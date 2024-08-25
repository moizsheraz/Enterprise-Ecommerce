import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logos/image.png";
import { useAppContext } from "../contexts/AppContext";
import { ArrowBigRightDash } from "lucide-react";
import SignOut from "./SignOut";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#eab308] flex items-center justify-between p-4 md:p-6 shadow-md">
      {/* Logo and Company Name */}
      <Link to="/" className="flex items-center space-x-3 md:space-x-4">
        <img
          src={Logo}
          alt="BizBreaks Logo"
          className="h-10 w-auto md:h-14 rounded-full"
        />
        <h1 className="text-white text-lg md:text-2xl font-bold">BizBreaks</h1>
      </Link>

      {/* Hamburger Menu Icon */}
      <button
        className="block md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-300 transform ${isMenuOpen ? "rotate-90" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={toggleMenu}
      ></div>

      {/* Menu Items */}
      <nav
        className={`fixed top-0 right-0 w-64 bg-[#eab308] z-[100] h-full flex-col space-y-6 p-6 transition-transform duration-300 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:relative md:top-auto md:right-auto md:translate-x-0 md:flex-row md:flex md:w-auto md:space-y-0 md:space-x-4`}
      >
        {!isLoggedIn ? (
          <>
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
              Try for Free
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/my-hotels"
              className="bg-white text-[#eab308] px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-200"
            >
              My Hotels
            </Link>
            <Link
              to="/my-bookings"
              className="bg-white text-[#eab308] px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-200"
            >
              My Bookings
            </Link>
            <SignOut />
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
