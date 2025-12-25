import React from "react";

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SpaIcon from "@mui/icons-material/Spa";
import milletes from "../assets/milletes.png";
import Oils from "../assets/Oils.png";
import DryFruits from "../assets/DryFruits.png";
import Spices from "../assets/Spices.png";

const Categories = () => {
  const categoryData = [
    {
      title: "Millets",
      offer: "Upto 40% OFF",
      img: milletes,
    },
    {
      title: "Oils",
      offer: "Upto 50% OFF",
      img: Oils,
    },
    {
      title: "Dry Fruits",
      offer: "Upto 30% OFF",
      img: DryFruits,
    },
    {
      title: "Spices",
      offer: "Upto 70% OFF",
      img: Spices,
    },
  ];

  return (
    <section
      id="categories"
      className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
    >
      {/* Header Section */}
      <div className="flex items-end justify-between"style={{ fontFamily: "Poppins" }}>
        <div>
          <p className="text-[#4CAF50] text-sm font-medium" style={{fontWeight: 400 , fontSize: "25px"}} >
            Fresh Selection
          </p>
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-black" style={{fontSize: "36px" , fontWeight: 600}}>
            Shop by Category
          </h2>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-black"
          style={{fontWeight: 400 , fontSize: "25px"}}
        >
          View All
          <ArrowRightAltIcon sx={{ fontSize: 20 }} />
        </a>
      </div>

      {/* Categories Grid */}
      <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categoryData.map((item, index) => (
          <a
            key={index}
            href="#"
            className="group rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition bg-white"
          >
            <div className="flex items-center justify-start ">
              <span
                className="px-2.5 py-1 rounded-full bg-[#3EB543E5] border border-emerald-200 text-white text-xs font-normal inline-flex items-center gap-1 mt-2"
                style={{ fontFamily: "Poppins", fontWeight: 400}}
              >
                100% organic
              </span>
            </div>

            <div className=" h-28 rounded-xl overflow-hidden object-fit bg-slate-50">
              <img
                src={item.img}
                alt={`${item.title} category`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-2 text-center">
              <p className="text-lg font-semibold tracking-tight text-black">
                {item.title}
              </p>
              <p className="text-sm text-[#3EB543E5]">{item.offer}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;
