import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SpaIcon from "@mui/icons-material/Spa";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import DealsGrains from "../assets/DealsGrains.png";
import DealsHoney from "../assets/DealsHoney.png";
import DealsSpices from "../assets/DealsSpices.png";
import DealsOils from "../assets/DealsOils.png";
import DealsMillets from "../assets/DealsMillets.png";

const DealsOfTheDay = () => {
  const deals = [
    {
      title: "Organic Grains",
      discount: "35% Off",
      price: "₹ 299/Kg",
      rating: "5.0",
      reviews: "(330)",
      left: "Only 23 Left",
      originalPrice: "₹ 499",
      image: DealsGrains,
    },
    {
      title: "Organic Oils",
      discount: "35% Off",
      price: "₹ 649/Liter",
      rating: "5.0",
      reviews: "(330)",
      left: "Only 23 Left",
      originalPrice: "₹ 999",
      image: DealsOils,
    },
    {
      title: "Organic Honey",
      discount: "35% Off",
      price: "₹ 1099/Liter",
      rating: "5.0",
      reviews: "(330)",
      left: "Only 23 Left",
      originalPrice: "₹ 1499",
      image: DealsHoney,
    },
    {
      title: "Organic Millets",
      discount: "35% Off",
      price: "₹ 299/Kg",
      rating: "5.0",
      reviews: "(330)",
      left: "Only 23 Left",
      originalPrice: "₹ 499",
      image: DealsMillets,
    },
    {
      title: "Organic Spices",
      discount: "35% Off",
      price: "₹ 649/Liter",
      rating: "5.0",
      reviews: "(330)",
      left: "Only 23 Left",
      originalPrice: "₹ 999",
      image: DealsSpices,
    },
  ];

  return (
    <section
      className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-12"
      style={{ fontFamily: "Poppins", fontWeight: 400 }}
    >
      {/* Header */}
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div className="flex items-end gap-4">
          <div>
            <p
              className="text-[#4CAF50] font-medium"
              style={{ fontSize: "30px" }}
            >
              Customer Deals
            </p>
            <h2
              className="text-2xl sm:text-3xl tracking-tight font-semibold text-[#FA6060]"
              style={{ fontSize: "36px" }}
            >
              Deals of the Day
            </h2>
          </div>
          {/* Countdown */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-[#fff] border border-gray-300 text-sm bg-gradient-to-r from-[#EAB6B6] to-[#F2E0E0]">
              <AccessTimeIcon
                sx={{ fontSize: 16 }}
                style={{ color: "#F81818" }}
              />
              Ends in{" "}
              <span id="deal-countdown" className="tabular-nums font-semibold">
                12:34:56
              </span>
            </span>
          </div>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-black"
          style={{fontSize: "25px"}}
        >
          View All <ArrowRightAltIcon sx={{ fontSize: 20 }} />
        </a>
      </div>

      {/* Deal Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {deals.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-5">
              <div className="flex items-center">
                <span className="px-3 py-1 rounded-full bg-[#F81818] text-[#fff] text-xs font-medium shadow-xl shadow-gray-300">
                  {item.discount}
                </span>
              </div>

              <div className="mt-3 h-36 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-32 object-contain"
                />
              </div>

              <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#000000] text-center">
                {item.title}
              </h3>

              {/* Rating and Reviews */}
              <div className="mt-1 flex items-center justify-center gap-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#3EB543E5] text-[#fff] text-xs font-medium">
                  <StarIcon sx={{ fontSize: 14 }} />
                  {item.rating}
                </span>
                <span className="text-slate-500">{item.reviews}</span>
              </div>

              {/* Stock Left */}
              <div className="mt-1 text-center text-sm text-[#F81818] font-medium">
                {item.left}
              </div>

              <div className="mt-2 flex items-center ">
                <div className="text-lg font-semibold text-black">
                  {item.price}
                </div>
                <div className="text-xs text-slate-400 line-through ml-2">
                  {item.originalPrice}
                </div>
              </div>

              <button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-3xl bg-[#3EB543E5] text-white px-4 py-2.5 text-sm font-medium hover:bg-white hover:text-[#3EB543E5] transition hover:border hover:border-[#3EB543E5]">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealsOfTheDay;
