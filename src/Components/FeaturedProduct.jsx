import React, { useState } from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Honey from "../assets/Honey.png";
import ChiaSeed from "../assets/ChiaSeed.png";
import OliveOil from "../assets/OliveOil.png";

const FeaturedProducts = () => {
  const [cartCounts, setCartCounts] = useState({});

  const handleAdd = (id) => {
    setCartCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id) => {
    setCartCounts((prev) => {
      if (prev[id] && prev[id] > 1) {
        return { ...prev, [id]: prev[id] - 1 };
      } else {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
    });
  };

  const products = [
    {
      id: 1,
      name: "Honey",
      subtext: "100% organic",
      rating: "5.0",
      reviews: "(330)",
      price: "₹ 799",
      oldPrice: "₹ 1299",
      img: Honey,
      imgWidth: "159px",
      imgHeight: "187px",
    },
    {
      id: 2,
      name: "Chia Seeds",
      subtext: "100% organic",
      rating: "4.5",
      reviews: "(4478)",
      price: "₹ 799",
      oldPrice: "₹ 1299",
      img: ChiaSeed,
      imgWidth: "159px",
      imgHeight: "187px",
    },
    {
      id: 3,
      name: "Olive Oil",
      subtext: "100% organic",
      rating: "4.8",
      reviews: "(992)",
      price: "₹ 799",
      oldPrice: "₹ 1299",
      img: OliveOil,
      imgWidth: "202px",
      imgHeight: "187px",
    },
    {
      id: 4,
      name: "Dry Fruits Mix",
      subtext: "100% organic",
      rating: "4.7",
      reviews: "(1204)",
      price: "₹ 999",
      oldPrice: "₹ 1499",
      img: Honey,
      imgWidth: "159px",
      imgHeight: "187px",
    },
  ];

  return (
    <section
      id="featured"
      className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2"
    >
      {/* Header */}
      <div
        className="flex items-end justify-between"
        style={{ fontFamily: "Poppins" }}
      >
        <div>
          <p className="text-[#4CAF50] text-sm font-medium text-[25px]">
            Customer Favorites
          </p>
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-black text-[36px]">
            Featured Products
          </h2>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-black  text-[30px]"

        >
          View All    <ArrowRightAltIcon sx={{ fontSize: 20 }} />
        </a>
      </div>

      {/* Product Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-md shadow-gray-400 transition"
          >
            <div className="p-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-[#3EB543E5] text-white font-medium inline-flex items-center gap-1 text-[13px]">
                  100% Organic
                </span>
              </div>

              {/* Image */}
              <div className="mt-2 flex items-center justify-center">
                <img
                  src={product.img}
                  alt={product.name}
                  style={{
                    width: product.imgWidth,
                    height: product.imgHeight,
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Product Name */}
              <h3 className="text-lg font-semibold tracking-tight text-center text-black mt-2">
                {product.name}
              </h3>

              {/* Rating and Reviews */}
              <div className="mt-1 flex items-center justify-center gap-2 text-sm text-gray-400">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#3EB543E5] text-white text-xs font-medium">
                  {product.rating}
                  <StarIcon sx={{ fontSize: 14 }} />
                </span>
                <span className="text-slate-500">{product.reviews}</span>
              </div>

              {/* Price and Button/Counter */}
              <div className="mt-2 flex items-center justify-between">
                <div className="text-left flex">
                  {cartCounts[product.id] ? (
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDecrement(product.id)}
                        className="w-6 h-6 flex items-center justify-center rounded-full border border-slate-600 text-slate-600"
                      >
                        <RemoveIcon sx={{ fontSize: 14 }} />
                      </button>
                      <span className="mx-2 px-6 py-1 rounded-md border border-slate-300 font-semibold text-lg text-black">
                        {cartCounts[product.id]}
                      </span>
                      <button
                        onClick={() => handleAdd(product.id)}
                        className="w-6 h-6 flex items-center justify-center rounded-full border border-black text-black"
                      >
                        <AddIcon sx={{ fontSize: 14 }} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-baseline">
                      <div className="text-lg font-semibold text-black">
                        {product.price}
                      </div>
                      <div className="text-xs text-slate-500 line-through ml-2">
                        {product.oldPrice}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleAdd(product.id)}
                  className="inline-flex items-center justify-center gap-2 rounded-3xl bg-[#3EB543E5] text-white px-6 py-2.5 text-sm font-medium transition"
                >
                  <AddIcon sx={{ fontSize: 18 }} /> ADD
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
