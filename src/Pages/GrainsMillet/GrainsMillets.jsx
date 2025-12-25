import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GMHero from "../../assets/GrainsMillets/GMHero.png";
import SaleSection from "../../Components/SaleSection";
import Features from "../../Components/Features";
import GrainsVarieties from "./GrainsVarieties";
import GrainMilletProducts from "./GrainMilletProducts";
import GrainsMilletDeals from "./GrainsMilletDeals";
import GrainMilletThnk from "./GrainMilletThnk";

const GrainsMillet = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          {/* Left Section */}
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              <span className="text-[#FF780A] ">Goodness</span>
              <span className="mx-2 text-[#3EB543E5]">In</span>
              <span className="text-[#F94D40E5]">Grains</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-lg">
              Handpicked organic millets <br></br>
              bringing nature’s goodness from our farms<br></br> to your home.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[#3EB543E5] px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-[#E6FFF0] hover:text-[#3EB543E5] hover:border hover:border-[#3EB543E5] transition"
              >
                Shop Now
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-orange-300/70 bg-[#FF780AE5] px-5 py-3 text-sm font-medium text-[#fff] hover:bg-orange-100  hover:text-[#FF780AE5] hover:border hover:border-[#FF780AE5]transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Section (Images) */}
          <div className="relative">
            <div className="relative mx-auto aspect-[5/3] w-full max-w-[560px] overflow-hidden rounded-3xl">
              <img
                src={GMHero}
                alt="Bowl of grains"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <SaleSection />
      <Features />
      <GrainsVarieties/>
      <GrainMilletProducts />  
      <GrainsMilletDeals/>
      <GrainMilletThnk/>
    </section>
  );
};

export default GrainsMillet;
