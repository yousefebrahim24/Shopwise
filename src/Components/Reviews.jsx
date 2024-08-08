import React, { useState, useEffect } from "react";
import user1 from "../imgs/user_img1.jpg";
import user2 from "../imgs/user_img2.jpg";
import user3 from "../imgs/user_img3.jpg";
import user4 from "../imgs/user_img4.jpg";

const Reviews = () => {
  const slides = [
    {
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.",
      image: user1,
      title: "Lissa Castro",
      subTitle: "Designer",
    },
    {
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.",
      image: user2,
      title: "Alden Smith",
      subTitle: "Designer",
    },
    {
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.",
      image: user3,
      title: "Daisy Lana",
      subTitle: "Designer",
    },
    {
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.",
      image: user4,
      title: "John Becker",
      subTitle: "Designer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full bg-red-50 h-[432.6px] font-poppins container overflow-hidden">
      <h1 className="pt-[100px] text-[32px] font-bold pb-[25px]">
        Our Client Say!
      </h1>
      <div
        className="flex transition-transform duration-700 ease-in-out pb-[100px]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex flex-col items-center justify-center gap-5"
          >
            <p className="text-center md:w-[711px] text-[#687188] leading-[28px] text-[16px]">
              {slide.paragraph}
            </p>
            <div className="flex gap-4 items-center">
              <img src={slide.image} alt={slide.title} className="" />
              <div className="text-start">
                <h2 className="text-[16px] font-semibold mb-[5px]">
                  {slide.title}
                </h2>
                <span className="text-[#FF324D] text-[16px]">
                  {slide.subTitle}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={goToPreviousSlide}
        className="absolute left-[24%] top-[70%] transform -translate-y-1/2 text-[20px] p-2"
      >
        &#10094;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-[24%] top-[70%] transform -translate-y-1/2 text-[20px] p-2"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Reviews;
