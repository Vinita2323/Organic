// import React, { useEffect, useRef } from "react";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import ExploreCereals from "../assets/ExploreCereals.png";
// import ExploreDryFruits from "../assets/ExploreDryFruits.png";
// import ExploreDryPulses from "../assets/ExploreDryPulses.png";
// import ExploreMillets from "../assets/ExploreMillets.png";
// import ExploreOil from "../assets/ExploreOil.png";
// import ExploreSpices from "../assets/ExploreSpices.png";

// const categories = [
//   { title: "HERBS & SPICES", img: ExploreCereals },
//   { title: "NATURAL OILS", img: ExploreDryFruits },
//   { title: "NATURAL MILLETS", img: ExploreDryPulses },
//   { title: "DRY NUTS", img: ExploreMillets },
//   { title: "DRY PULSES", img: ExploreOil },
//   { title: "CEREALS", img: ExploreSpices },
// ];

// const ExploreProducts = () => {
//   const sectionRef = useRef(null);
//   const hasPlayedRef = useRef(false);

//   const playAnimation = () => {
//     const items = Array.from(document.querySelectorAll(".seq-item"));
//     const baseDelay = 250;
//     const startDelay = 200;

//     items.forEach((el) => {
//       el.classList.add("opacity-0", "translate-y-4", "scale-95");
//       el.classList.remove("opacity-100", "translate-y-0", "scale-100");
//     });

//     const textLines = document.querySelectorAll(".headline-line");
//     const button = document.getElementById("cta-button");

//     textLines.forEach((line) => {
//       line.classList.add("opacity-0", "translate-y-3");
//       line.classList.remove("opacity-100", "translate-y-0");
//     });
//     button.classList.add("opacity-0", "translate-y-3");
//     button.classList.remove("opacity-100", "translate-y-0");

//     items.forEach((el, i) => {
//       setTimeout(() => {
//         el.classList.remove("opacity-0", "translate-y-4", "scale-95");
//         el.classList.add("opacity-100", "translate-y-0", "scale-100");
//       }, startDelay + i * baseDelay);
//     });

//     const totalImageTime = startDelay + items.length * baseDelay + 500;
//     setTimeout(() => {
//       textLines.forEach((line, i) => {
//         setTimeout(() => {
//           line.classList.remove("opacity-0", "translate-y-3");
//           line.classList.add("opacity-100", "translate-y-0");
//         }, i * 300);
//       });

//       setTimeout(() => {
//         button.classList.remove("opacity-0", "translate-y-3");
//         button.classList.add("opacity-100", "translate-y-0");
//       }, textLines.length * 300 + 200);
//     }, totalImageTime);
//   };

//   useEffect(() => {
//     const section = sectionRef.current;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !hasPlayedRef.current) {
//             hasPlayedRef.current = true;
//             playAnimation();
//           }
//           if (!entry.isIntersecting) {
//             hasPlayedRef.current = false;
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     if (section) observer.observe(section);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <main
//       className="min-h-screen flex flex-col items-center bg-white antialiased"
//       ref={sectionRef}
//     >
//       <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[#FFE8B6]">
//         <div className="rounded-3xl bg-white shadow-sm ring-1 overflow-hidden">
//           <div className="p-4 sm:p-8 lg:p-12">
//             {/* top 4 images */}
//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
//               {categories.slice(0, 4).map((cat, i) => (
//                 <div
//                   key={i}
//                   className="relative seq-item opacity-0 translate-y-4 scale-95 transition-all duration-700 ease-out"
//                 >
//                   <img
//                     src={cat.img}
//                     alt={cat.title}
//                     className="w-full h-58 object-cover rounded-xl"
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* last 2 images + text */}
//             <div className="mt-6 flex flex-col lg:flex-row flex-wrap items-center justify-center">
//               <div className="flex flex-wrap justify-center gap-4">
//                 {categories.slice(4, 6).map((cat, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center justify-center seq-item opacity-0 translate-y-4 scale-95 transition-all duration-700 ease-out"
//                   >
//                     <img
//                       src={cat.img}
//                       alt={cat.title}
//                       className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] h-auto object-contain rounded-xl"
//                     />
//                   </div>
//                 ))}
//               </div>

//               {/* text and button */}
//               <div className="mt-6 lg:mt-0 text-center justify-container w-full lg:w-auto">
//                 <h1 className="headline-line text-[#3EB543E5] font-bold text-4xl md:text-5xl opacity-0 translate-y-3 transition-all duration-700 ease-out">
//                   Explore Your{" "}
//                 </h1>
//                 <h1 className="headline-line text-[#3EB543E5] font-bold text-4xl md:text-5xl opacity-0 translate-y-3 transition-all duration-700 ease-out">
//                   Organic Products
//                 </h1>
//                 <div className="text-center lg:text-right">
//                   <button
//                     id="cta-button"
//                     className="opacity-0 translate-y-3 mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#3EB543E5] px-6 py-3 text-white text-sm font-medium shadow-lg transition-all duration-700 ease-out hover:bg-emerald-600 active:scale-[0.99]"
//                   >
//                     Shop Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* thankyou section */}
//       <div className="px-4 sm:px-6 lg:px-8 w-full">
//         <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#3EB543E5] text-center mt-10">
//           Thank You for Choosing Organic
//         </h1>
//         <div className="max-w-4xl mx-auto text-justify">
//           <p className="text-gray-600 mt-4">
//             We’re truly grateful for your trust and support in our journey
//             toward a healthier planet. Every purchase you make not only
//             nourishes your body but also empowers local farmers, sustains
//             eco-friendly practices, and preserves nature’s balance. Together,
//             we’re creating a community that values purity, care, and
//             sustainability — one organic choice at a time.
//           </p>
//           <p className="text-gray-600 mt-2 mb-8">
//             Your belief in organic living inspires us to grow stronger, stay
//             honest, and keep delivering products that are as natural as the
//             earth itself. With every seed sown and every harvest shared, we move
//             closer to a cleaner environment and a more conscious world. Thank
//             you for being part of this movement — where health meets harmony,
//             and every choice you make creates a positive impact for generations
//             to come.
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ExploreProducts;

// import React, { useEffect, useRef } from "react";
// import ExploreCereals from "../assets/ExploreCereals.png";
// import ExploreDryFruits from "../assets/ExploreDryFruits.png";
// import ExploreDryPulses from "../assets/ExploreDryPulses.png";
// import ExploreMillets from "../assets/ExploreMillets.png";
// import ExploreOil from "../assets/ExploreOil.png";
// import ExploreSpices from "../assets/ExploreSpices.png";

// const categories = [
//   { title: "HERBS & SPICES", img: ExploreCereals },
//   { title: "NATURAL OILS", img: ExploreDryFruits },
//   { title: "NATURAL MILLETS", img: ExploreDryPulses },
//   { title: "DRY NUTS", img: ExploreMillets },
//   { title: "DRY PULSES", img: ExploreOil },
//   { title: "CEREALS", img: ExploreSpices },
// ];

// const ExploreProducts = () => {
//   const sectionRef = useRef(null);
//   const hasPlayedRef = useRef(false);

//   const playAnimation = () => {
//     const items = Array.from(document.querySelectorAll(".seq-item"));
//     const baseDelay = 250;
//     const startDelay = 200;

//     items.forEach((el) => {
//       el.classList.add("opacity-0", "translate-y-4", "scale-95");
//       el.classList.remove("opacity-100", "translate-y-0", "scale-100");
//     });

//     const textLines = document.querySelectorAll(".headline-line");
//     const button = document.getElementById("cta-button");

//     textLines.forEach((line) => {
//       line.classList.add("opacity-0", "translate-y-3");
//       line.classList.remove("opacity-100", "translate-y-0");
//     });
//     button.classList.add("opacity-0", "translate-y-3");
//     button.classList.remove("opacity-100", "translate-y-0");

//     items.forEach((el, i) => {
//       setTimeout(() => {
//         el.classList.remove("opacity-0", "translate-y-4", "scale-95");
//         el.classList.add("opacity-100", "translate-y-0", "scale-100");
//       }, startDelay + i * baseDelay);
//     });

//     const totalImageTime = startDelay + items.length * baseDelay + 500;
//     setTimeout(() => {
//       textLines.forEach((line, i) => {
//         setTimeout(() => {
//           line.classList.remove("opacity-0", "translate-y-3");
//           line.classList.add("opacity-100", "translate-y-0");
//         }, i * 300);
//       });

//       setTimeout(() => {
//         button.classList.remove("opacity-0", "translate-y-3");
//         button.classList.add("opacity-100", "translate-y-0");
//       }, textLines.length * 300 + 200);
//     }, totalImageTime);
//   };

//   useEffect(() => {
//     const section = sectionRef.current;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           // ✅ Always play animation immediately on mobile (no scroll needed)
//           const isMobile = window.innerWidth < 768;
//           if ((entry.isIntersecting || isMobile) && !hasPlayedRef.current) {
//             hasPlayedRef.current = true;
//             playAnimation();
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     if (section) observer.observe(section);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <main
//       className="min-h-screen flex flex-col items-center bg-white antialiased"
//       ref={sectionRef}
//     >
//       <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[#FFE8B6]">
//         <div className="rounded-3xl bg-white shadow-sm ring-1 overflow-hidden">
//           <div className="p-4 sm:p-8 lg:p-12">
//             {/* top 4 images */}
//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
//               {categories.slice(0, 4).map((cat, i) => (
//                 <div
//                   key={i}
//                   className="relative seq-item opacity-0 translate-y-4 scale-95 transition-all duration-700 ease-out"
//                 >
//                   <img
//                     src={cat.img}
//                     alt={cat.title}
//                     loading="lazy"
//                     className="w-full h-auto object-cover rounded-xl"
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* last 2 images + text */}
//             <div className="mt-6 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-6">
//               <div className="flex flex-wrap justify-center gap-4">
//                 {categories.slice(4, 6).map((cat, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center justify-center seq-item opacity-0 translate-y-4 scale-95 transition-all duration-700 ease-out"
//                   >
//                     <img
//                       src={cat.img}
//                       alt={cat.title}
//                       loading="lazy"
//                       className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] h-auto object-contain rounded-xl"
//                     />
//                   </div>
//                 ))}
//               </div>

//               {/* text and button */}
//               <div className="mt-6 lg:mt-0 text-center lg:text-left">
//                 <h1 className="headline-line text-[#3EB543E5] font-bold text-3xl sm:text-4xl md:text-5xl opacity-0 translate-y-3 transition-all duration-700 ease-out">
//                   Explore Your{" "}
//                 </h1>
//                 <h1 className="headline-line text-[#3EB543E5] font-bold text-3xl sm:text-4xl md:text-5xl opacity-0 translate-y-3 transition-all duration-700 ease-out">
//                   Organic Products
//                 </h1>
//                 <div className="text-center lg:text-right">
//                   <button
//                     id="cta-button"
//                     className="opacity-0 translate-y-3 mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#3EB543E5] px-6 py-3 text-white text-sm font-medium shadow-lg transition-all duration-700 ease-out hover:bg-emerald-600 active:scale-[0.99]"
//                   >
//                     Shop Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* thankyou section */}
//       <div className="px-4 sm:px-6 lg:px-8 w-full">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#3EB543E5] text-center mt-10">
//           Thank You for Choosing Organic
//         </h1>
//         <div className="max-w-4xl mx-auto text-justify">
//           <p className="text-gray-600 mt-4">
//             We’re truly grateful for your trust and support in our journey
//             toward a healthier planet. Every purchase you make not only
//             nourishes your body but also empowers local farmers, sustains
//             eco-friendly practices, and preserves nature’s balance. Together,
//             we’re creating a community that values purity, care, and
//             sustainability — one organic choice at a time.
//           </p>
//           <p className="text-gray-600 mt-2 mb-8">
//             Your belief in organic living inspires us to grow stronger, stay
//             honest, and keep delivering products that are as natural as the
//             earth itself. With every seed sown and every harvest shared, we move
//             closer to a cleaner environment and a more conscious world. Thank
//             you for being part of this movement — where health meets harmony,
//             and every choice you make creates a positive impact for generations
//             to come.
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ExploreProducts;


import React, { useEffect } from "react";
import ExploreCereals from "../assets/ExploreCereals.png";
import ExploreDryFruits from "../assets/ExploreDryFruits.png";
import ExploreDryPulses from "../assets/ExploreDryPulses.png";
import ExploreMillets from "../assets/ExploreMillets.png";
import ExploreOil from "../assets/ExploreOil.png";
import ExploreSpices from "../assets/ExploreSpices.png";

const categories = [
  { title: "HERBS & SPICES", img: ExploreCereals },
  { title: "NATURAL OILS", img: ExploreDryFruits },
  { title: "NATURAL MILLETS", img: ExploreDryPulses },
  { title: "DRY NUTS", img: ExploreMillets },
  { title: "DRY PULSES", img: ExploreOil },
  { title: "CEREALS", img: ExploreSpices },
];

const ExploreProducts = () => {
  // Sequential animation logic
  const playAnimation = () => {
    const items = Array.from(document.querySelectorAll(".seq-item"));
    const baseDelay = 250;
    const startDelay = 200;

    // Reset initial state
    items.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-4", "scale-95");
      el.classList.remove("opacity-100", "translate-y-0", "scale-100");
    });

    const textLines = document.querySelectorAll(".headline-line");
    const button = document.getElementById("cta-button");

    textLines.forEach((line) => {
      line.classList.add("opacity-0", "translate-y-3");
      line.classList.remove("opacity-100", "translate-y-0");
    });
    if (button) {
      button.classList.add("opacity-0", "translate-y-3");
      button.classList.remove("opacity-100", "translate-y-0");
    }

    // Animate images one-by-one
    items.forEach((el, i) => {
      setTimeout(() => {
        el.classList.remove("opacity-0", "translate-y-4", "scale-95");
        el.classList.add("opacity-100", "translate-y-0", "scale-100");
      }, startDelay + i * baseDelay);
    });

    // Animate text after all images
    const totalImageTime = startDelay + items.length * baseDelay + 500;
    setTimeout(() => {
      textLines.forEach((line, i) => {
        setTimeout(() => {
          line.classList.remove("opacity-0", "translate-y-3");
          line.classList.add("opacity-100", "translate-y-0");
        }, i * 300);
      });

      setTimeout(() => {
        if (button) {
          button.classList.remove("opacity-0", "translate-y-3");
          button.classList.add("opacity-100", "translate-y-0");
        }
      }, textLines.length * 300 + 200);
    }, totalImageTime);
  };

  // ✅ Trigger animation on every page visit / reload
  useEffect(() => {
    playAnimation();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center bg-white antialiased">
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[#FFE8B6]">
        <div className="rounded-3xl bg-white shadow-sm ring-1 overflow-hidden">
          <div className="p-4 sm:p-8 lg:p-12">
            {/* top 4 images */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {categories.slice(0, 4).map((cat, i) => (
                <div
                  key={i}
                  className="relative seq-item opacity-0 translate-y-4 scale-95 transition-all duration-700 ease-out"
                >
                  <img
                    src={cat.img}
                    alt={cat.title}
                    loading="lazy"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>

            {/* last 2 images + text */}
            <div className="mt-6 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-6">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.slice(4, 6).map((cat, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center seq-item opacity-0 translate-y-4 scale-95 transition-all duration-700 ease-out"
                  >
                    <img
                      src={cat.img}
                      alt={cat.title}
                      loading="lazy"
                      className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] h-auto object-contain rounded-xl"
                    />
                  </div>
                ))}
              </div>

              {/* text and button */}
              <div className="mt-6 lg:mt-0 text-center lg:text-left">
                <h1 className="headline-line text-[#3EB543E5] font-bold text-3xl sm:text-4xl md:text-5xl opacity-0 translate-y-3 transition-all duration-700 ease-out">
                  Explore Your{" "}
                </h1>
                <h1 className="headline-line text-[#3EB543E5] font-bold text-3xl sm:text-4xl md:text-5xl opacity-0 translate-y-3 transition-all duration-700 ease-out">
                  Organic Products
                </h1>
                <div className="text-center lg:text-right">
                  <button
                    id="cta-button"
                    className="opacity-0 translate-y-3 mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#3EB543E5] px-6 py-3 text-white text-sm font-medium shadow-lg transition-all duration-700 ease-out hover:bg-emerald-600 active:scale-[0.99]"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* thankyou section */}
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#3EB543E5] text-center mt-10">
          Thank You for Choosing Organic
        </h1>
        <div className="max-w-4xl mx-auto text-justify">
          <p className="text-gray-600 mt-4">
            We’re truly grateful for your trust and support in our journey
            toward a healthier planet. Every purchase you make not only
            nourishes your body but also empowers local farmers, sustains
            eco-friendly practices, and preserves nature’s balance. Together,
            we’re creating a community that values purity, care, and
            sustainability — one organic choice at a time.
          </p>
          <p className="text-gray-600 mt-2 mb-8">
            Your belief in organic living inspires us to grow stronger, stay
            honest, and keep delivering products that are as natural as the
            earth itself. With every seed sown and every harvest shared, we move
            closer to a cleaner environment and a more conscious world. Thank
            you for being part of this movement — where health meets harmony,
            and every choice you make creates a positive impact for generations
            to come.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ExploreProducts;



