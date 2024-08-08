import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      handleLogin(storedUser);
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="container mt-[122.6px]">
      <div>
        <div className="h-[173px] bg-[#F7F8FB] lg:px-[13rem] md:px-[10rem] sm:px-[8rem]">
          <div className=" flex items-center justify-between py-[70px]">
            <div>
              <h1 className="text-[28px] font-bold font-roboto">Login</h1>
            </div>
            <div>
              <span className="text-[14px] font-poppins">
                Home &gt; Pages &gt; Login
              </span>
            </div>
          </div>
        </div>
        <div className="h-[722px] py-[100px] xl:px-[30rem] lg:px-[18rem] md:px-[8rem] sm:px-[3.5rem]">
          <div className="p-[43px] shadow-[0px_0px_10px_rgba(0,0,0,0.2)] w-[546px]">
            <div>
              <h1 className="text-[28px] font-roboto font-bold text-start mb-7">
                Login
              </h1>
            </div>
            <div className="font-poppins">
              <form className="grid" onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  id="email"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-[50px] px-[15px] py-[8px] placeholder:text-gray-500 font-small border-[1px] rounded-md outline-sky-400 mb-5"
                />
                <input
                  type="password"
                  value={password}
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-[50px] px-[15px] py-[8px] placeholder:text-gray-500 font-small border-[1px] rounded-md outline-sky-400 mb-5"
                />
                <div className="text-start mb-5">
                  <input
                    type="checkbox"
                    checked={remember}
                    id="remember"
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-[17px] h-[17px] rounded-none border-[1px] font-lg mr-[8px] align-middle"
                  />
                  <label
                    htmlFor="remember"
                    className="text-start text-[#687188] text-[16px] mr-44"
                  >
                    Remember Me
                  </label>
                  <a href="#" className="text-[#687188] text-[16px]">
                    Forgot Password?
                  </a>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button
                  type="submit"
                  name="submit"
                  className="hover:duration-700 h-[50px] px-[35px] py-[12px] bg-[#FF324D] text-white text-[16px] hover:bg-transparent hover:border-[1px] hover:border-[#FF324D] hover:text-[#FF324D] rounded-lg mb-5"
                >
                  Log In
                </button>
              </form>
            </div>
            <span className="text-[#687188] text-[16px]">OR</span>
            <div className="font-poppins mt-5 flex gap-4 justify-center">
              <a className="py-[10px] px-[20px] bg-[#3B5998] text-[16px] text-white rounded-md flex items-center">
                <FaFacebookF className="pr-2" />
                Facebook
              </a>
              <a className="py-[10px] px-[20px] bg-[#D85040] text-[16px] text-white rounded-md flex items-center">
                <TiSocialGooglePlus className="pr-2 text-[30px]" />
                Google
              </a>
            </div>
            <div className="text-[16px] font-poppins mt-5">
              <span className="text-[#687188] text-[16px] mr-1">
                Don't Have An Account?
              </span>
              <Link to="/register">Create an account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
