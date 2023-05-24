<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/IntroLogo.png";
import { Link } from "react-scroll";
import { HiSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
import { BiSun } from "react-icons/bi";
=======
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/IntroLogo.png";
import { Link } from "react-scroll";
>>>>>>> master

const Header = () => {
  const Valid = () => {
    // if(!window.tronWeb){
    //   alert('Please Install Tron Wallet')
    //   return
    // }
    navigate("/cloak");
  };
<<<<<<< HEAD

  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  const navigate = useNavigate();
  return (
    <div className="p-4 bg-[#FF5757] px-7">
      <div className="pb-3 border-b dark:border-gray-800 border-[#FDF0EF] border-b-1 px-5 flex justify-between items-center">
        {/* logo on the left side */}
        <div className="flex items-center">
          <img className="sm:w-20 w-16 font-bold" src={logo} alt="" />
          <h1 className="montserrat-subtitle sm:text-[1.5rem] font-semibold text-[1.2rem] text-[#FDF0EF]">
=======

  const navigate = useNavigate();
  return (
    <div className="bg-[#FF5757] p-4 px-7">
      <div className="border-b-1 flex items-center justify-between border-b border-[#FDF0EF] px-5 pb-3">
        {/* logo on the left side */}
        <div className="flex items-center">
          <img className="w-16 font-bold sm:w-20" src={logo} alt="" />
          <h1 className="montserrat-subtitle text-[1.2rem] font-semibold text-[#FDF0EF] sm:text-[1.5rem]">
>>>>>>> master
            Cloak
          </h1>
        </div>
        {/* "how it works" on the right side*/}
<<<<<<< HEAD
        <div className="flex space-x-4 items-center">
          <Link to="faq" spy={true} smooth={true} offset={50}>
            <h4
              className="montserrat-subtitle cursor-pointer sm:text-[1.2rem] font-semibold  hover:font-bold hover:text-white text-[#FDF0EF] "
              onClick={() => navigate("/")}
            >
              FAQ?
            </h4>
          </Link>

          {/* theme button */}
          <div
            onClick={() => setDarkTheme(!darkTheme)}
            className="cursor-pointer dark:bg-[#1d1d1d] dark:hover:bg-[#fa9d9d] bg-[#FF5757] hover:bg-[#1d1d1d] 
            p-2 rounded-full border dark:border-gray-300 border-gray-200"
          >
            <button className="transition-all theme-btn text-gray-200">
              {darkTheme ? (
                <>
                  <BiSun size={30} className="text-gray-200 light hidden" />
                  <HiSun size={30} className="dark hidden" />
                </>
              ) : (
                <>
                  <HiOutlineMoon size={30} className="light hidden" />
                  <HiMoon size={30} className="dark hidden" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* at the bottom of the logo */}
      <div className="sm:p-16 p-10 flex flex-col items-start space-y-4">
        <h2 className="montserrat-subtitle font-bold sm:text-[1.9rem] text-[1.7rem] text-[#FDF0EF]">
          Stay Anonymous & secure.
        </h2>
        <p className="montserrat-small text-[#FDF0EF] text-left break-words  max-w-[400px]">
          Exchange TRX and tokens with utmost privacy, your address remains a
          secret!.
        </p>
        <div className="pt-1">
          <button
            className="border-1 montserrat-subheading  hover:text-white hover:bg-[#FF5757] hover:shadow-xl p-2 px-4 rounded-full
             bg-[#FDF0EF] dark:bg-[#252525] text-[#FF5757] font-semibold hover:border-white border-red-500 dark:border-gray-900 border text-lg"
            onClick={Valid}
          >
            Launch app
          </button>
        </div>
      </div>
=======
        <Link to="faq" spy={true} smooth={true} offset={50}>
          <h4
            className="montserrat-subtitle cursor-pointer font-semibold text-[#FDF0EF]  hover:font-bold hover:text-white sm:text-[1.2rem] "
            onClick={() => navigate("/")}
          >
            FAQ?
          </h4>
        </Link>
      </div>
      {/* at the bottom of the logo */}
      <div className="flex flex-col items-start space-y-4 p-10 sm:p-16">
        <h2 className="montserrat-subtitle text-[1.7rem] font-bold text-[#FDF0EF] sm:text-[1.9rem]">
          Stay Anonymous & secure.
        </h2>
        <p className="montserrat-small max-w-[400px] break-words text-left  text-[#FDF0EF]">
          Exchange TRX and tokens with utmost privacy, your address remains a
          secret!.
        </p>
        <div className="pt-1">
          <button
            className="border-1 montserrat-subheading  rounded-full border border-red-500 bg-[#FDF0EF] p-2 px-4 text-lg font-semibold text-[#FF5757] hover:border-white hover:bg-[#FF5757] hover:text-white hover:shadow-xl"
            onClick={Valid}
          >
            Launch app
          </button>
        </div>
      </div>
>>>>>>> master
    </div>
  );
};

export default Header;
