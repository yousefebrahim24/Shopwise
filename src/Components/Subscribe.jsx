import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="py-[50px] bg-[#FF324D] font-poppins container">
      <div className="flex items-center md:justify-between sm:justify-center lg:px-[13rem] sm:px-[5rem] sm:flex-col lg:flex-row">
        <div className="lg:px-[12px] sm:px-[5px] lg:w-[50%] text-left">
          <h1 className="lg:text-[28px] md:text-[20px] font-bold text-white">
            Subscribe Our Newsletter
          </h1>
        </div>
        <div className="lg:px-[12px] sm:px-[5px] lg:w-[50%]">
          <form className="my-[8px] flex justify-between sm:w-[470px] lg:mx-[15px] xl:w-[515px] sm:mx-[10px] bg-white">
            <input
              type="email"
              value={email}
              id="email"
              placeholder="Enter Email Address"
              onChange={(e) => setEmail(e.target.value)}
              className="h-[50px] px-[8px] placeholder:text-gray-500 font-small outline-none"
            />
            <button
              type="submit"
              name="submit"
              className="h-[50px] px-[35px] py-[12px] bg-gray-900 text-white my-0 mx-0 text-[16px] hover:border-white hover:border-[1px] hover:bg-zinc-700 hover:duration-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
