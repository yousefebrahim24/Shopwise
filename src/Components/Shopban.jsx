import React from "react";

const Shopban = () => {
  return (
    <div className="pt-[100px] pb-[20px] font-poppins container relative">
      <div className="flex items-center justify-center gap-4 group sm:flex-col lg:flex-row">
        <div className="bg-[url('https://bestwebcreator.com/shopwise/demo/assets/images/shop_banner_img1.jpg')] w-[546px] h-[303.33px] bg-[le] px-[12px]">
          <div className="w-[273px] h-[142px] p-[20px] absolute 2xl:left-[460px] xl:left-[320px] lg:left-[250px] sm:left-[50%] pt-[5.5rem] text-start">
            <h3 className="text-[20px] pb-[8px] font-semibold ">Super Sale</h3>
            <h2 className="text-[30px] pb-[8px] font-bold">New Collection</h2>
            <a href="" className="text-[16px] hover:text-[#FF324D]">
              Shop Now
            </a>
          </div>
        </div>

        <div className="bg-[url('https://bestwebcreator.com/shopwise/demo/assets/images/shop_banner_img2.jpg')] w-[546px] h-[303.33px] px-[12px]">
          <div className="w-[273px] h-[142px] p-[20px] absolute 2xl:right-[210px] xl:right-[100px] lg:right-0 md:right-[15%] sm:right-[6%] pt-[5.5rem] text-start">
            <h2 className="text-[32px] pb-[8px] font-bold">New Season</h2>
            <h3 className="text-[24px] pb-[8px] font-semibold">Sale 40% Off</h3>
            <a href="" className="text-[16px] hover:text-[#FF324D]">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopban;
