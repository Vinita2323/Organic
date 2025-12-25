import React from "react";
import BannerDryFruits from "../assets/BannerDryFruits.png";
import BannerOil from "../assets/BannerOil.png";
import BannerMillets from "../assets/BannerMillets.png";

const CategoryBanners = () => {
  const banners = [
    {
      title: "Dry Fruits",
      subtitle: "Weekend Special",
      description: "Shop Now",
      offer: "Upto 50% OFF",
      img: BannerDryFruits,
    },
    {
      title: "Natural Oils",
      subtitle: "Premium Collection",
      description: "Shop Now",
      offer: "Upto 50% OFF",
      img: BannerOil,
    },
    {
      title: "Premium Millets",
      subtitle: "Fresh Arrival",
      description: "Shop Now",
      offer: "Upto 50% OFF",
      img: BannerMillets,
    },
  ];

  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid md:grid-cols-3 gap-5">
        {banners.map((item, index) => (
          <a
            key={index}
            href="#"
            className="group relative rounded-3xl overflow-hidden border border-slate-200"
          >
            <img
              src={item.img}
              alt={`${item.title} banner`}
              className="h-56 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="text-white">
                <p className="text-xs uppercase tracking-wide opacity-80">
                  {item.subtitle}
                </p>
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
              <span className="self-end px-3 py-1.5 rounded-full bg-[#F81818] text-white text-xs font-medium">
                {item.offer}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryBanners;
