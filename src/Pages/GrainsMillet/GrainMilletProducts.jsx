import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import SlidersIcon from "@mui/icons-material/Tune";
import CheckIcon from "@mui/icons-material/Check";
import SparklesIcon from "@mui/icons-material/AutoAwesome";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Finger from "../../assets/GrainsMillets/Finger.png";
import Foxtail from "../../assets/GrainsMillets/Foxtail.png";
import Little from "../../assets/GrainsMillets/Little.png";
import Sorghum from "../../assets/GrainsMillets/Sorghum.png";
import StarRateIcon from "@mui/icons-material/StarRate";

const FeaturedProducts = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    organic: false,
    inStock: false,
    discount: false,
    fast: false,
  });

  const handleFilterChange = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const clearFilters = () => {
    setFilters({
      organic: false,
      inStock: false,
      discount: false,
      fast: false,
    });
  };

  const products = [
    {
      id: 1,
      name: "Foxtail Millet",
      image: Foxtail,
      rating: 5.0,
      reviews: 330,
      price: 799,
      oldPrice: 1299,
    },
    {
      id: 2,
      name: "Little Millet",
      image: Little,
      rating: 4.5,
      reviews: 4478,
      price: 490,
      oldPrice: 1299,
      discount: "-40%",
    },
    {
      id: 3,
      name: "Finger Millet’s",
      image: Finger,
      rating: 4.8,
      reviews: 992,
      price: 299,
      oldPrice: 1299,
    },
    {
      id: 4,
      name: "Sorghum",
      image: Sorghum,
      rating: 5.0,
      reviews: 330,
      price: 599,
      oldPrice: 1299,
    },
    {
      id: 1,
      name: "Foxtail Millet",
      image: Foxtail,
      rating: 5.0,
      reviews: 330,
      price: 799,
      oldPrice: 1299,
    },
    {
      id: 2,
      name: "Little Millet",
      image: Little,
      rating: 4.5,
      reviews: 4478,
      price: 490,
      oldPrice: 1299,
      discount: "-40%",
    },
    {
      id: 3,
      name: "Finger Millet’s",
      image: Finger,
      rating: 4.8,
      reviews: 992,
      price: 299,
      oldPrice: 1299,
    },
    {
      id: 4,
      name: "Sorghum",
      image: Sorghum,
      rating: 5.0,
      reviews: 330,
      price: 599,
      oldPrice: 1299,
    },
    {
      id: 1,
      name: "Foxtail Millet",
      image: Foxtail,
      rating: 5.0,
      reviews: 330,
      price: 799,
      oldPrice: 1299,
    },
    {
      id: 2,
      name: "Little Millet",
      image: Little,
      rating: 4.5,
      reviews: 4478,
      price: 490,
      oldPrice: 1299,
      discount: "-40%",
    },
    {
      id: 3,
      name: "Finger Millet’s",
      image: Finger,
      rating: 4.8,
      reviews: 992,
      price: 299,
      oldPrice: 1299,
    },
    {
      id: 4,
      name: "Sorghum",
      image: Sorghum,
      rating: 5.0,
      reviews: 330,
      price: 599,
      oldPrice: 1299,
    },
  ];

  return (
    <section className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-16">
      <p className="text-[#4CAF50]  text-[25px]  font-medium">
        Customer Favorites
      </p>

      <div className="mt-1 flex items-center justify-between">
        <h2 className="text-[30px]  font-semibold tracking-tight">
          Featured Products
        </h2>

        {/* Filter Button */}
        <div className="relative">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 rounded-full bg-[#4CAF50]  text-white px-4 py-2.5 text-sm shadow hover:bg-emerald-700 transition"
          >
            <span>Filters</span>
            <FilterListIcon className="h-4.5 w-4.5" />
          </button>

          {/* Dropdown */}
          {showFilters && (
            <div className="absolute right-0 mt-2 w-72 rounded-xl border border-neutral-200 bg-white shadow-lg transition duration-200 z-10">
              <div className="p-3.5 border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <SlidersIcon className="h-4.5 w-4.5 text-neutral-600" />
                  <p className="text-sm font-medium">Refine results</p>
                </div>
              </div>

              <div className="p-2 space-y-3">
                {/* Custom checkboxes */}
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(filters).map((key) => (
                    <label key={key} className="cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters[key]}
                        onChange={() => handleFilterChange(key)}
                        className="peer sr-only"
                      />
                      <div
                        className={`w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm flex items-center justify-between ${
                          filters[key] ? "border-emerald-600 bg-emerald-50" : ""
                        }`}
                      >
                        <span className="font-medium capitalize">
                          {key === "inStock"
                            ? "In stock"
                            : key === "discount"
                            ? "On sale"
                            : key === "fast"
                            ? "Fast delivery"
                            : "Organic"}
                        </span>
                        <CheckIcon
                          className={`h-4 w-4 text-emerald-600 transition ${
                            filters[key] ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </div>
                    </label>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={clearFilters}
                    className="text-sm text-neutral-700 hover:text-neutral-900"
                  >
                    Clear
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 text-white px-3 py-2 text-sm hover:bg-neutral-800">
                    <SparklesIcon className="h-4 w-4" />
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <article
            key={product.id}
            className="group relative rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition"
          >
            <div className="p-3.5">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center rounded-full bg-[#3EB543E5] text-white border border-emerald-200 text-[11px] font-medium px-2 py-1">
                  100% organic
                </span>
              </div>

              <div className="relative mt-2 h-36 sm:h-40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-contain p-3 transition group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-2">
                <h3 className="text-base  text-center font-medium tracking-tight">
                  {product.name}
                </h3>
                <div className="mt-1 flex items-center justify-center gap-2 ">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#3EB543E5] text-white text-[11px] font-medium px-1.5 py-0.5">
                    {product.rating}
                    <StarRateIcon className="h-2 w-2 text-gray-200" />
                  </span>
                  <span className="text-xs text-neutral-500">
                    ({product.reviews})
                  </span>
                </div>
                <div className="mt-2 flex items-end justify-between">
                  <div className="text-neutral-900">
                    <span className="text-lg font-medium tracking-tight">
                      ₹ {product.price}
                    </span>
                    <span className="text-xs text-neutral-500">/kg</span>
                    <span className="ml-2 text-xs line-through text-neutral-400">
                      {product.oldPrice}
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-full bg-[#3EB543E5] text-white font-semibold px-4 py-2 text-sm shadow  transition">
                    BUY
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        <button className="rounded-full bg-[#3EB543E5] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
          See More
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
