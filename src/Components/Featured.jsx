import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const Featured = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollContainerRef = useRef(null);

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

  const getCardWidth = () => {
    const card = scrollContainerRef.current?.querySelector(".card");
    if (card) {
      const style = window.getComputedStyle(card);
      const marginRight = parseFloat(style.marginRight);
      return card.offsetWidth + marginRight;
    }
    return 0;
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = getCardWidth();
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = getCardWidth();
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative py-[100px] font-poppins px-[13rem] container mx-auto">
      <div className="w-full">
        <h1 className="text-[32px] font-semibold pb-[15px] mb-[15px]">
          Featured Products
        </h1>
        <div
          className="scroll-container overflow-x-auto flex pb-[10px] relative"
          ref={scrollContainerRef}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="card min-w-[250px] mr-[15px] max-h-fit border-[1px] rounded-lg p-5"
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
        <button
          className="absolute left-[10%] top-[50%] transform -translate-y-1/2 text-[35px] p-2"
          onClick={scrollLeft}
        >
          &lt;
        </button>
        <button
          className="absolute right-[13.7%] top-[50%] transform -translate-y-1/2 text-[35px] p-2"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Featured;
