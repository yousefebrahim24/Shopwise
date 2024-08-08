import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flogo from "../imgs/logo_light.png";
import phone from "../imgs/phone_iphone_24dp_FILL0_wght400_GRAD0_opsz24.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { TfiLocationPin } from "react-icons/tfi";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import visa from "../imgs/visa.png";
import discover from "../imgs/discover.png";
import mastercard from "../imgs/master_card.png";
import paypal from "../imgs/paypal.png";
import express from "../imgs/amarican_express.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#202325] text-white font-poppins container">
      <div>
        <div className="flex flex-wrap items-start justify-start gap-x-16 pt-[100px] pb-[70px] lg:px-[13rem] md:px-[5rem] sm:px-11">
          <div className="flex flex-col gap-8 items-start">
            <div>
              <img src={flogo} alt="footer-logo" />
            </div>
            <div>
              <p className="text-start text-[14px] leading-loose">
                If you are going to use of Lorem
                <br /> Ipsum need to be sure there isn't
                <br /> hidden of text
              </p>
            </div>
            <div className="text-center flex items-center gap-1">
            <FaFacebookF
                className="pr-[5px] w-[36px] text-white hover:text-[#FF324D]"
              />
              <FaTwitter
                className="pr-[5px] w-[36px] text-white hover:text-[#FF324D]"
              />
              <TiSocialGooglePlus
                className="pr-[5px] w-[36px] text-white text-[25px] hover:text-[#FF324D]"
              />
              <AiOutlineYoutube
                className="pr-[5px] w-[36px] text-white text-[20px] hover:text-[#FF324D]"
              />
              <TiSocialInstagram
                className="w-[36px] text-white hover:text-[#FF324D] text-[20px]"
              />
            </div>
          </div>

          <div>
            <h2 className="text-[18px] font-bold pt-[10px] pb-[25px]">
              Useful Links
            </h2>
            <ul className="text-[14px] text-start leading-loose">
              <li className="pb-[10px] hover:text-[#FF324D]">
                <Link to="/">About Us</Link>
              </li>
              <li className="pb-[10px] hover:text-[#FF324D]">
                <Link to="/">FAQ</Link>
              </li>
              <li className="pb-[10px] hover:text-[#FF324D]">
                <Link to="/">Location</Link>
              </li>
              <li className="pb-[10px] hover:text-[#FF324D]">
                <Link to="/">Affiliates</Link>
              </li>
              <li className="hover:text-[#FF324D]">
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[18px] font-bold pt-[10px] pb-[25px]">
              Category
            </h2>
            <ul className="text-[14px] text-start leading-loose">
              <li className="pb-[10px] hover:text-[#FF324D]">
                <Link to="/">Men</Link>
              </li>
              <li className="pb-[10px] hover:text-[#FF324D]">
                <Link to="/">Women</Link>
              </li>
              <li className="pb-[10px] hover:text-[#FF324D]">
                <Link to="/">Kids</Link>
              </li>
              <li className="pb-[10px] hover:text-[#FF324D]">
                <Link to="/">Best Seller</Link>
              </li>
              <li className="pb-[10px] hover:text-[#FF324D]">
                <Link to="/">New Arrivals</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[18px] font-bold pt-[10px] pb-[25px]">
              My Acoount
            </h2>
            <ul className="text-[14px] text-start leading-loose">
              <li className="pb-[10px] hover:text-[#FF324D]">
                <Link to="/">My Account</Link>
              </li>
              <li className="pb-[10px] hover:text-[#FF324D]">
                <Link to="/">Discount</Link>
              </li>
              <li className="pb-[10px] hover:text-[#FF324D]">
                <Link to="/">Returns</Link>
              </li>
              <li className="pb-[10px] hover:text-[#FF324D]">
                <Link to="/">Order History</Link>
              </li>
              <li className="hover:text-[#FF324D]">
                <Link to="/">Order Tracking</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[18px] font-bold pt-[10px] pb-[25px] text-start">
              Contact Info
            </h2>
            <ul className="text-[14px] leading-loose">
              <li className="pb-[15px] flex gap-2">
                <TfiLocationPin
                  className="w-[18px] h-[17.6px]"
                />
                <span className="w-[203px] text-start">
                  123 Street, Old Trafford,
                  New South London, UK
                </span>
              </li>
              <li className="pb-[15px] w-[18px] flex gap-3 items-center hover:text-[#FF324D]">
                <FontAwesomeIcon icon={faEnvelope} />
                <a href={`mailto:info@sitename.com`}>info@sitename.com</a>
              </li>
              <li className="flex gap-2">
                <img src={phone} className="w-[18px] h-[17.6px]" alt="phone" />
                <span>+ 457 789 789 65</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-[1px] border-[#687188]">
          <div className="py-[30px] flex md:flex-row sm:flex-col justify-between lg:px-[10rem] xl:px-[13rem] sm:px-[2rem]">
            <div>
              <p className="sm:text-[14px] md:text-[16px]">&copy; 2020 All Rights Reserved by Bestwebcreator</p>
            </div>

            <div className="flex gap-1">
              <img src={visa} alt="visa" />
              <img src={discover} alt="discover" />
              <img src={mastercard} alt="mastercard" />
              <img src={paypal} alt="paypal" />
              <img src={express} alt="express" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
