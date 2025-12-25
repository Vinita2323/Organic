import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Varieties1 from "../../assets/GrainsMillets/Varieties1.png";
import Varieties2 from "../../assets/GrainsMillets/Varieties2.png";

const GrainsVarieties = () => {
  return (
    <section className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
      {/* Section Header */}
      <p className="text-[#4CAF50] text-[25px]  font-medium">
        Fresh Selection
      </p>

      <div className="mt-1 flex items-end justify-between">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
          Shop Top Varieties
        </h1>
        <a
          href="#"
          className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-neutral-800 hover:text-neutral-900 transition"
        >
          View All
          <ArrowForwardIcon className="h-4.5 w-4.5 transition -translate-x-0 group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Promo Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Promo 1 */}
        <a
          href="#"
          className="relative overflow-hidden rounded-2xl bg-white block"
        >
          <img
            src={Varieties1}
            alt="Premium quality grains"
            className="h-56 sm:h-64 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/60 via-neutral-900/10 to-transparent"></div>

          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center rounded-full bg-[#3EB543E5] text-white text-xs font-medium px-2 py-1 shadow">
              100% organic
            </span>
          </div>

          <div className="absolute bottom-12 left-4">
            <p className="text-[24px] text-black font-bold">Premium Quality</p>
            <h3 className="text-[31px] sm:text-3xl font-semibold tracking-tight text-[#3EB543E5]">
              Grains
            </h3>
            <div className="mt-2 inline-flex items-center gap-2 text-white/90 text-[24px]">
              Shop Now
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 backdrop-blur border border-white/30">
                <ArrowForwardIcon className="h-4 w-4" />
              </span>
            </div>
          </div>

          <div className="absolute bottom-4 right-4">
            <span className="inline-flex items-center rounded-full bg-rose-500 text-white text-xs font-medium px-3 py-1 shadow">
              Upto 50% OFF
            </span>
          </div>
        </a>

        {/* Promo 2 */}
        <a
          href="#"
          className="relative overflow-hidden rounded-2xl bg-white block"
        >
          <img
            src={Varieties2}
            alt="Premium quality millets"
            className="h-56 sm:h-64 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 via-neutral-900/10 to-transparent"></div>

          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center rounded-full bg-[#3EB543E5] text-white text-xs font-medium px-2 py-1 shadow">
              100% organic
            </span>
          </div>

          <div className="absolute bottom-12 left-4">
            <p className="text-[24px] text-black font-bold">Premium Quality</p>
            <h3 className="text-[31px] sm:text-3xl font-semibold tracking-tight text-[#3EB543E5]">
              Millet’s
            </h3>
            <div className="mt-2 inline-flex items-center gap-2 text-white/90 text-[24px]">
              Shop Now
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 backdrop-blur border border-white/30">
                <ArrowForwardIcon className="h-4 w-4" />
              </span>
            </div>
          </div>

          <div className="absolute bottom-4 right-4">
            <span className="inline-flex items-center rounded-full bg-rose-500 text-white text-xs font-medium px-3 py-1 shadow">
              Upto 50% OFF
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default GrainsVarieties;