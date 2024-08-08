import React, { useState, useEffect } from "react";
import logo from "../imgs/logo_dark.png";
import phone from "../imgs/phone_iphone_24dp_FILL0_wght100_GRAD0_opsz24.png";
import { IoShuffle } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { SlUser } from "react-icons/sl";
import { BsCart3 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isScrolled, setIsScrolled] = useState(false);
  const homeList = ["Fashion 1", "Fashion 2"];
  const pagesList = [
    "About Us",
    "Contact Us",
    "Faq",
    "404 Error Page",
    "Login",
    "Register",
    "Terms And Conditions",
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(menu === dropdownOpen ? null : menu);
  };

  const closeDropdown = () => {
    setDropdownOpen(null);
  };

  return (
    <div className="font-poppins container fixed z-20 top-0 w-full">
      {!isScrolled && (
        <div className="text-center py-[10px] border-b text-[14px] bg-white">
          <div className="flex flex-wrap items-center justify-between px-[12rem]">
            <div className="flex gap items-center w-full lg:w-[50%] px-[12px]">
              <div className="mr-0.5">
                <select
                  name="countries"
                  className="border-none text-wrap px-[10px] py-[5px] w-fit outline-none"
                >
                  <option value="en">English</option>
                  <option value="fn">French</option>
                  <option value="us">United States</option>
                </select>
              </div>

              <div className="pr-[10px]">
                <select
                  name="payment"
                  className="px-[10px] py-[5px] outline-none"
                >
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="gbr">GBR</option>
                </select>
              </div>

              <div>
                <ul>
                  <li className="flex items-center">
                    <img
                      src={phone}
                      className="size-[22px] pt-[2px] mr-[10px] align-middle"
                      alt="phone-icon"
                    />
                    <span className="w-[120px]">123-456-7890</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-[50%] px-[12px]">
              <ul className="flex justify-center lg:justify-end items-center">
                <li className="pr-[15px] hover:text-[#FF324D] flex items-center">
                  <IoShuffle className="pr-1 text-[20px]" />
                  <Link to="/">Compare</Link>
                </li>
                <li className="pr-[15px] hover:text-[#FF324D] flex items-center">
                  <CiHeart className="pr-1 text-[25px]" />
                  <Link to="/">Wishlist</Link>
                </li>
                <li className="hover:text-[#FF324D] flex items-center">
                  <SlUser className="pr-1 text-[18px]" />
                  <Link to="/Login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className={isScrolled ? "bg-white shadow-md" : ""}>
        <nav className="flex flex-wrap sm:px-[6rem] xl:px-[13rem] py-3 items-center bg-white">
          <div className="flex-shrink-0">
            <img src={logo} alt="logo" />
          </div>

          <div className="flex flex-grow items-center justify-end w-auto text-[14px]">
            {windowWidth >= 992 ? (
              <ul className="flex lg:gap-2 sm:gap-1 items-center">
                <li
                  className="relative inline-block text-left dropdown"
                  onMouseEnter={() => toggleDropdown("home")}
                  onMouseLeave={closeDropdown}
                >
                  <div className="inline-flex justify-center w-full px-1 py-2 font-small text-[#FF324D]">
                    <Link to="/">HOME</Link>
                    <IoIosArrowDown
                      className="w-4 h-4 ml-0 mr-1 pt-[5px]"
                    />
                  </div>
                  {dropdownOpen === "home" && (
                    <div
                      className="dropdown-menu font-poppins"
                      onMouseLeave={closeDropdown}
                    >
                      <ul>
                        {homeList.map((item, index) => (
                          <li key={index}>
                            <Link
                              to={`/`}
                              className="dropdown-item hover:text-[#FF324D]"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
                <li
                  className="relative inline-block text-left dropdown"
                  onMouseEnter={() => toggleDropdown("page")}
                  onMouseLeave={closeDropdown}
                >
                  <div className="inline-flex justify-center w-full px-1 py-2 font-poppins font-small hover:text-[#FF324D]">
                    PAGES
                    <IoIosArrowDown
                      className="w-4 h-4 ml-0 -mr-1 pt-[5px]"
                    />
                  </div>
                  {dropdownOpen === "page" && (
                    <div
                      className="dropdown-menu font-poppins"
                      onMouseLeave={closeDropdown}
                    >
                      <ul>
                        {pagesList.map((item, index) => (
                          <li key={index}>
                            <Link
                              to={`/${item}`}
                              className="dropdown-item hover:text-[#FF324D]"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
                <li className="relative inline-block text-left dropdown">
                  <div className="inline-flex justify-center w-full px-1 py-2 font-small hover:text-[#FF324D]">
                    PRODUCTS
                    <IoIosArrowDown
                      className="w-4 h-4 ml-0 -mr-1 pt-[5px]"
                    />
                  </div>
                </li>
                <li className="relative inline-block text-left dropdown">
                  <div className="inline-flex justify-center w-full px-1 py-2 font-small hover:text-[#FF324D]">
                    BLOG
                    <IoIosArrowDown
                      className="w-4 h-4 ml-0 -mr-1 pt-[5px]"
                    />
                  </div>
                </li>
                <li
                  className="relative inline-block text-left dropdown"
                  onMouseEnter={() => toggleDropdown("shop")}
                  onMouseLeave={closeDropdown}
                >
                  <div className="inline-flex justify-center w-full px-1 py-2 font-poppins font-small hover:text-[#FF324D]">
                    SHOP
                    <IoIosArrowDown
                      className="w-4 h-4 ml-0 -mr-1 pt-[5px]"
                    />
                  </div>
                  {dropdownOpen === "shop" && (
                    <div
                      className="dropdown-menu font-poppins"
                      onMouseLeave={closeDropdown}
                    >
                      <ul>
                        <li>
                          <Link
                            to={`/cart`}
                            className="dropdown-item hover:text-[#FF324D]"
                          >
                            Cart
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="relative inline-block text-left">
                  <Link
                    to="/"
                    className="inline-flex justify-center w-full px-2 py-1 font-small hover:text-[#FF324D]"
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            ) : (
              <div>
                <button
                  className="inline-block justify-center p-3 border-[2px] text-[18px] font-small hover:text-[#FF324D] hover:rotate-90"
                  onClick={() => toggleDropdown("menu")}
                >
                  <FaBars />
                </button>
                {dropdownOpen === "menu" && (
                  <div className="dropdown-menu font-poppins">
                    <ul>
                      <li>
                        <Link to="/" className="dropdown-item">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item">
                          Pages
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item">
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item">
                          Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center">
            <GoSearch className="px-[10px] hover:text-[#FF324D] text-[40px]" />
            <Link to="/Cart">
              <BsCart3 className="px-[7px] hover:text-[#FF324D] text-[32px]" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;


