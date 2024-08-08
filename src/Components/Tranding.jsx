import React from "react";
import tranding from '../imgs/tranding_img.png'

const Tranding = () => {
    return (
        <div className="pt-10 container relative">
            <div className="flex justify-center h-[420px] bg-slate-100 font-poppins ">
                <div>
                    <img src={tranding} className="absolute top-0 lg:left-[15%] sm:left-0" alt="tranding-banner"/>
                </div>

                <div className="text-start lg:ml-[550px] xl:ml-[375px] sm:ml-[450px] px-[12px] md:pt-28 sm:pt-20">
                    <span className="text-[16px] md:mb-[20px] sm:mb-[10px] text-[#FF324D]">New season trends!</span>
                    <h1 className="text-[32px] md:mb-[20px] sm:mb-[10px] font-bold">Best Summer Collection</h1>
                    <h3 className="text-[20px] md:mb-[40px] sm:mb-[20px] font-semibold">Sale Fet up to 50% Off</h3>
                    <a href="" className="px-[35px] py-[16px] bg-[#FF324D] text-white text-[16px] hover:bg-transparent hover:border-[1px] hover:border-[#FF324D] hover:text-[#FF324D]">Shop Now</a>
                </div>
            </div>
        </div>
    );
};

export default Tranding;
