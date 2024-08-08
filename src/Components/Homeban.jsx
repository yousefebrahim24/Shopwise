import React, { useState, useEffect } from "react";
import ban1 from "../imgs/banner1.jpg";
import ban2 from "../imgs/banner2.jpg";
import ban3 from "../imgs/banner3.jpg";

const Homeban = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fadeIn");
  const banners = [
    {
      backgroundimage: ban1,
      heading: "Get up to 50% Today Only",
      subheading: "Woman Fashion",
      buttonText: "SHOP NOW",
      buttonLink: "#",
    },
    {
      backgroundimage: ban2,
      heading: "50% off in all products",
      subheading: "Man Fashion",
      buttonText: "SHOP NOW",
      buttonLink: "#",
    },
    {
      backgroundimage: ban3,
      heading: "Taking your Viewing Experience to Next Level",
      subheading: "Summer Sale",
      buttonText: "SHOP NOW",
      buttonLink: "#",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("fadeOut");
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        setFadeState("fadeIn");
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const handlePrevClick = () => {
   setFadeState("fadeOut");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? banners.length - 1 : prevIndex - 1
      );
    setFadeState("fadeIn");
    }, 1000);
  };

  const handleNextClick = () => {
   setFadeState("fadeOut");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    setFadeState("fadeIn");
    }, 1000);
  };

  return (
    <div className="mt-[122.6px] container">
      <div className="relative w-full lg:h-[500px] sm:h-[305px] overflow-hidden lg:mt-[122px] sm:mt-[155px]">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex
                ? fadeState === "fadeIn"
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
                : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${banner.backgroundimage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-start justify-center lg:px-[13rem] sm:px-[6rem] lg:py-[14rem] sm:py-[10rem] space-y-2">
              <h2
                className={`text-[20px] font-semibold pb-[16px] ${
                  fadeState === "fadeIn" ? "animate-slideInLeft" : ""
                }`}
              >
                {banner.heading}
              </h2>
              <h1
                className={`lg:text-[60px] sm:text-[50px] font-bold pb-[20px] ${
                  fadeState === "fadeIn" ? "animate-slideInLeft" : ""
                }`}
              >
                {banner.subheading}
              </h1>
              <a
                href={banner.buttonLink}
                className={`px-[35px] py-[16px] bg-[#FF324D] text-white text-[16px] hover:bg-transparent hover:border-[1px] hover:border-[#FF324D] hover:text-[#FF324D] transition ${
                  fadeState === "fadeIn" ? "animate-slideInLeft" : ""
                }`}
              >
                {banner.buttonText}
              </a>
            </div>
          </div>
        ))}
      <div className="absolute z-[15] inset-0 flex justify-between items-center">
        <button
          className="text-black text-5xl pb-14 bg-white shadow hover:bg-[#FF324D] w-[50px] h-[50px] ml-8"
          onClick={handlePrevClick}
        >
          &#8249;
        </button>
        <button
          className="text-black text-5xl pb-14 bg-white shadow hover:bg-[#FF324D] w-[50px] h-[50px] mr-8"
          onClick={handleNextClick}
        >
          &#8250;
        </button>
      </div>
      </div>
    </div>
  );
};

export default Homeban;
