import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { IoShuffle } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import { IoIosSync } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { TiSocialGooglePlus } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import user1 from "../imgs/user1.jpg";
import user2 from "../imgs/user2.jpg";

const Productdet = ({ addToCart, cart, updateQuantity }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState();
  const productId = useParams();
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [email, setEmail] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId.id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cart, product.id]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    updateQuantity(product.id, newQuantity);
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="container mt-[122.6px]">
      <div>
        <div className="h-[173px] bg-[#F7F8FB] lg:px-[13rem] md:px-[10rem] sm:px-[8rem]]">
          <div className=" flex items-center justify-between py-[70px] sm:flex-col md:flex-row">
            <div>
              <h1 className="text-[28px] font-bold font-roboto">
                Product Detail
              </h1>
            </div>
            <div>
              <span className="text-[14px] font-poppins">
                Home &gt; Pages &gt; Product Detail
              </span>
            </div>
          </div>
        </div>
        <div className="2xl:px-[13rem] sm:px-[3rem] xl:px-[10rem] py-[100px] flex sm:flex-col lg:flex-row gap-7">
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="w-[528px] h-[587px] border-[1px] p-[10px]"
            />
          </div>
          <div className="text-start">
            <h1 className="font-roboto text-[24px] font-semibold">
              {product.title}
            </h1>
            <div className="flex justify-between items-center mb-[5px]">
              <span className="text-[24px] text-[#FF324D] font-poppins font-semibold">
                ${product.price}
              </span>
              <div className="flex items-center justify-center">
                <FaStar
                  className="text-yellow-500 pr-1"
                />
                {/* <span className="text-[16px] pr-3">{product.rating.rate}</span>
                <span className="text-[16px] text-[#687188]">
                  ({product.rating.count})
                </span> */}
              </div>
            </div>
            <p className="text-[16px] text-[#687188] font-poppins w-[546px] mb-[15px]">
              {product.description}
            </p>
            <ul className="text-[14px] font-poppins">
              <li className="flex items-center text-[14px] pb-[10px]">
              <IoShieldCheckmarkOutline className="text-[#FF324D] mr-[4px] h-[16px]"/>
                1 Year AL Jazeera Brand Warranty
              </li>
              <li className="pb-[10px] flex items-center">
                <IoIosSync
                  className="text-[#FF324D] mr-[4px] h-[16px]"
                />
                30 Day Return Policy
              </li>
              <li className="pb-[10px] flex items-center">
                <FaSackDollar
                  className="text-[#FF324D] mr-[4px] h-[16px]"
                />
                Cash On Delivery available
              </li>
            </ul>
            <div className="flex gap-1 font-poppins border-b-[1px] pb-5">
              <span className="text-[16px] text-[#687188] mr-[10px]">Size</span>
              <span className="text-[14px] text-[#687188] border-[2px] border-[#ddd] px-[5px] py-[2px] active:bg-[#FF324D] active:text-white">
                XS
              </span>
              <span className="text-[14px] text-[#687188] border-[2px] border-[#ddd] px-[8px] py-[2px] active:bg-[#FF324D] active:text-white">
                S
              </span>
              <span className="text-[14px] text-[#687188] border-[2px] border-[#ddd] px-[7px] py-[2px] active:bg-[#FF324D] active:text-white">
                M
              </span>
              <span className="text-[14px] text-[#687188] border-[2px] border-[#ddd] px-[9px] py-[2px] active:bg-[#FF324D] active:text-white">
                L
              </span>
              <span className="text-[14px] text-[#687188] border-[2px] border-[#ddd] px-[5px] py-[2px] active:bg-[#FF324D] active:text-white">
                XL
              </span>
            </div>
            <div className="pt-5 flex gap-8 font-poppins items-center justify-center border-b-[1px] pb-5">
              <input
                type="text"
                name="quantity"
                min="1"
                defaultValue="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-[55px] border-[2px] outline-none pl-[4px]"
              />
              <a
                href=""
                onClick={() => addToCart(product)}
                className="py-[12px] px-[35px] bg-[#FF324D] hover:bg-transparent text-white hover:text-[#FF324D] hover:border-[1px] hover:border-[#FF324D] rounded-lg text-[16px]"
              >
                Add To Cart
              </a>
              <IoShuffle className="hover:text-[#FF324D] align-middle w-[20px] h-[20px]"/>
              <CiHeart
                className="hover:text-[#FF324D] align-middle w-[20px] h-[20px]"
              />
            </div>
            <ul className="my-[10px] text-[16px] font-poppins">
              <li className="text-[#687188]">
                SKU:{" "}
                <a href="" className="text-black">
                  BE45VGRT
                </a>
              </li>
              <li className="text-[#687188] mt-[10px]">
                Category:{" "}
                <a href="" className="text-black">
                  {product.category}
                </a>
              </li>
              <li className="text-[#687188] mt-[10px]">
                Tags:{" "}
                <a href="" className="text-black">
                  Cloth, Printed
                </a>
              </li>
            </ul>
            <div className="flex items-center">
              <span className="text-[#687188] text-[16px] pr-[5px] font-poppins">
                Share:
              </span>
              <FaFacebookF
                className="pr-[5px] w-[36px] text-[#687188] hover:text-[#FF324D]"
              />
              <FaTwitter
                className="pr-[5px] w-[36px] text-[#687188] hover:text-[#FF324D]"
              />
              <TiSocialGooglePlus
                className="pr-[5px] w-[36px] text-[#687188] text-[25px] hover:text-[#FF324D]"
              />
              <AiOutlineYoutube
                className="pr-[5px] w-[36px] text-[#687188] hover:text-[#FF324D]"
              />
              <TiSocialInstagram
                className="w-[36px] text-[#687188] hover:text-[#FF324D] text-[20px]"
              />
            </div>
          </div>
        </div>
        <div className="2xl:px-[13rem] sm:px-[3rem] xl:px-[10rem] font-poppins">
          <h2 className="w-[129px] border-b-[2px] text-[#FF324D] border-[#FF324D] py-[8px] text-[16px] font-semibold mb-8">
            REVIEWS (2)
          </h2>
          <h5 className="text-[20px] font-roboto font-semibold mb-[8px] text-start">
            2 Reviews For {product.title}
          </h5>
          <div className="flex gap-6 pb-[20px] mb-[20px] border-b-[1px]">
            <img src={user1} className="rounded-full h-[112px]" alt="user1" />
            <div className="text-start leading-[28px] text-[16px] font-poppins">
              <h6 className="font-semibold">Alea Brooks</h6>
              <span className="italic text-[#687188] pb-[5px]">
                March 5, 2018
              </span>
              <p className="text-[#687188] xl:w-[996px]">
                Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-[20px] mb-[20px] border-b-[1px]">
            <img src={user2} className="rounded-full h-[112px]" alt="user2" />
            <div className="text-start leading-[28px] text-[16px] font-poppins">
              <h6 className="font-semibold">Grace Wong</h6>
              <span className="italic text-[#687188] pb-[5px]">
                June 17, 2018
              </span>
              <p className="text-[#687188] xl:w-[996px]">
                Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate
              </p>
            </div>
          </div>
          <div className="text-start border-b-[4px] border-double mb-5">
            <h4 className="font-roboto text-[20px] font-semibold text-start mb-[8px]">
              Add a review
            </h4>
            <input
              type="text"
              value={review}
              id="review"
              placeholder="Your review *"
              onChange={(e) => setReview(e.target.value)}
              className="h-[121px] 2xl:w-[1104px] lg:w-[900px] md:w-[650px] sm:w-[550px] px-[15px] py-[12px] placeholder:text-gray-500 font-small border-[1px] rounded-md outline-sky-400 mb-[16px]"
            />
            <input
              type="text"
              value={name}
              id="name"
              placeholder="Enter Name *"
              onChange={(e) => setName(e.target.value)}
              className="h-[50px] 2xl:w-[541px] lg:w-[440px] md:w-[315px] sm:w-[550px] px-[15px] py-[12px] placeholder:text-gray-500 font-small border-[1px] rounded-md outline-sky-400 mb-[16px] mr-[11px]"
            />
            <input
              type="email"
              value={email}
              id="email"
              placeholder="Enter Email *"
              onChange={(e) => setEmail(e.target.value)}
              className="h-[50px] 2xl:w-[541px] lg:w-[440px] md:w-[315px] sm:w-[550px] px-[15px] py-[12px] placeholder:text-gray-500 font-small border-[1px] rounded-md outline-sky-400 mb-[16px] md:ml-[10px]"
            />
            <button
              type="submit"
              className="py-[12px] px-[35px] bg-[#FF324D] hover:bg-transparent text-white hover:text-[#FF324D] hover:border-[1px] hover:border-[#FF324D] rounded-lg text-[16px] mb-10"
            >
              Submit Review
            </button>
          </div>
        </div>
        <div className="pt-[20px] pb-[100px] font-poppins 2xl:px-[13rem] sm:px-[3rem] xl:px-[10rem]">
          <div>
            <h1 className="text-[28px] font-semibold pb-[15px] mb-[15px] text-start">
              Related Products
            </h1>
            <div className="card-container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="card max-w-fit max-h-fit border-[1px] rounded-lg p-5"
                  onMouseEnter={() => handleMouseEnter(product.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[213px] h-[260px] pb-6 text-center"
                  />
                  <Link
                    to={`/exclusive/${product.id}`}
                    className="text-[16px] font-semibold"
                  >
                    {product.title}
                  </Link>
                  <br />
                  {hoveredCard === product.id ? (
                    <button
                      className="bg-[#FF324D] hover:bg-transparent text-white hover:text-[#FF324D] hover:border-[1px] hover:border-[#FF324D] py-2 px-4 mt-[15px] rounded-full"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <>
                      <p className="text-[16px] text-[#FF324D] font-semibold mb-[5px] mt-[15px]">
                        ${product.price}
                      </p>
                      <div className="flex items-center justify-center">
                      <FaStar
                  className="text-yellow-500 pr-1"
                />
                        <span className="text-[16px] pr-3">
                          {product.rating.rate}
                        </span>
                        <span className="text-[16px] text-[#687188]">
                          ({product.rating.count})
                        </span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdet;
