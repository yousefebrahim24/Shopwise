import React from "react";
import delivery from "../imgs/delivery.png";
import refund from "../imgs/money-back.png";
import support from "../imgs/service.png";

const Services = () => {
  return (
    <div className="pt-[100px] pb-[70px] px-[13rem] container mx-auto">
      <div className="flex flex-shrink-0 justify-center items-center sm:flex-col sm:gap-9 lg:flex-row">
        <div className="px-[40px] lg:border-r-[1px] flex flex-col items-center justify-center">
          <div className="h-[64px] pt-[10px]">
            <img src={delivery} className="w-[46px] flex-shrink-0 text-center" alt="delivery" />
          </div>
          <div>
            <h4 className="text-[20px] font-semibold pb-[8px]">
              Free Delivery
            </h4>
            <span className="text-[16px] leading-[28px] text-[#687188] w-full">
              If you are going to use of Lorem, you
              <br /> need to be sure there anything
            </span>
          </div>
        </div>

        <div className="px-[40px] lg:border-r-[1px] flex flex-col items-center justify-center">
          <div className="h-[64px]">
            <img src={refund} className="w-[46px]" alt="refund" />
          </div>
          <div>
            <h4 className="text-[20px] font-semibold pb-[8px]">
              30 Day Return
            </h4>
            <span className="text-[16px] leading-[28px] text-[#687188]">
              If you are going to use of Lorem, you
              <br /> need to be sure there anything
            </span>
          </div>
        </div>

        <div className="px-[40px] flex flex-col items-center justify-center">
          <div className="h-[64px]">
            <img src={support} className="w-[46px]" alt="support" />
          </div>
          <div>
            <h4 className="text-[20px] font-semibold pb-[8px]">24/7 Support</h4>
            <span className="text-[16px] leading-[28px] text-[#687188]">
              If you are going to use of Lorem, you
              <br /> need to be sure there anything
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
