import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const Exclusive = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
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
    <div className="pt-[50px] pb-[70px] font-poppins px-[13rem] container mx-auto">
      <div>
        <h1 className="text-[32px] font-semibold pb-[15px] mb-[15px]">
          Exclusive Products
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7 md:gap-3 sm:gap-1">
          {products.map((product) => (
            <div
              key={product.id}
              className="card w-full max-h-fit border-[1px] rounded-lg p-5"
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full pb-6 text-center"
              />
              <Link
                to={`/exclusive/${product.id}`}
                className="text- font-semibold"
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
                  <FaStar className="text-yellow-500 pr-1"/>
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
  );
};

export default Exclusive;
