import React from "react";

const SaleSection = () => {
  const promos = [
    {
      title: "SALE",
      subtitle: "Summer",
      image:
        "https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80",
    },
    {
      title: "WEEKLY",
      subtitle: "Fresh Picks",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "EXTRAS",
      subtitle: "Member",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "BUNDLES",
      subtitle: "Weekend",
      image:
        "https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80",
    },
  ];

  return (
    <section className="mt-8 w-full overflow-hidden px-4 sm:px-6">
      <div className="mx-auto w-full px-4 sm:px-6">
        {/* Scoped Scrollbar Hidden */}
        <div
          id="promoTrack"
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE and Edge
          }}
        >
          {/* Hide only inside this section */}
          <style>
            {`
              #promoTrack::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {promos.map((promo, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[360px] md:min-w-[420px] snap-start"
            >
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-36 sm:h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
                <div className="absolute left-4 bottom-4 text-white">
                  <p className="text-sm">{promo.subtitle}</p>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {promo.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
