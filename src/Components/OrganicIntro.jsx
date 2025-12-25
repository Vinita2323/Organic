import React from "react";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SpaIcon from "@mui/icons-material/Spa";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import WhyOrganicImage from "../assets/WhyOrganicImage.png";

const OrganicIntro = () => {
  return (
    <header className="relative">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-24 pb-10 md:pb-14">
        <div className="grid items-center gap-10 sm:gap-12 md:grid-cols-2">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#3EB543E5]">
              Why Organic Products Are Healthy
            </h1>
            <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
              Organic products are grown naturally, without the use of synthetic
              pesticides, fertilizers, or genetically modified organisms (GMOs).
            </p>
            <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
              This mindful method of cultivation ensures that every fruit,
              vegetable, and grain retains its original nutrients, antioxidants,
              and authentic flavor. Unlike conventionally grown foods that often
              lose their natural goodness through chemical exposure, organic
              produce preserves its purity from the soil to your plate. By
              avoiding harmful chemicals and artificial additives, organic foods
              promote better digestion, enhance immunity, and improve long-term
              health.
            </p>
          </div>

          {/* Right Section - Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-emerald-100 to-transparent blur-2xl -z-10"></div>
            <div className="relative mx-auto max-w-[280px] sm:max-w-sm md:max-w-md">
              <img
                src={WhyOrganicImage}
                alt="Farmer checking crops in a sunlit field"
                className="w-full aspect-square object-cover rounded-full ring-4 ring-emerald-200 shadow-xl"
                loading="lazy"
              />
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-20 sm:h-24 w-20 sm:w-24 rounded-full bg-emerald-200/40 blur-xl"></div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 md:col-span-2 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#3EB543E5]">
              Healthy choices made easy with organic purity
            </h1>
            <div className="text-slate-600 max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto text-justify px-2 sm:px-4">
              <p className="mt-4 text-sm sm:text-base md:text-lg">
                We are on a mission to reconnect people with the purity of the
                earth. Our certified organic range is grown with respect for
                nature — preserving soil health, supporting local farmers, and
                reducing our ecological footprint. Every step, from cultivation
                to delivery, is handled with honesty and care, ensuring that you
                enjoy products that are as natural as they are nourishing.
              </p>
              <p className="mt-3 text-sm sm:text-base md:text-lg">
                Each product reflects our dedication to sustainability and
                transparency, crafted to bring the essence of nature straight to
                your home. We work closely with farmers who share our vision of
                a cleaner, greener planet, empowering them through fair trade
                and ethical practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default OrganicIntro;
