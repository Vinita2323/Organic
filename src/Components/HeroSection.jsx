// import React from "react";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import InfoIcon from "@mui/icons-material/Info";
// import ShieldIcon from "@mui/icons-material/Shield";
// import SpaIcon from "@mui/icons-material/Spa";
// import OrganicBanner from "../assets/OrganicBanner.png";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full overflow-hidden">
//       <div className="w-full ">
//         <div
//           className="relative overflow-hidden border-neutral-200"
//           style={{ backgroundColor: "#FBE4B5" }}
//         >
//           <div className="grid md:grid-cols-2">
//             {/* Left content */}
//             <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center gap-6">
//              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05] whitespace-nowrap">
//          <span className="text-[#FF8A00]">Fresh.</span>
//          <span className="text-[#fff]"> Organic.</span>
//          <span className="text-[rgb(194,43,16)]"> Direct.</span>
//       </h1>

//               <p className="text-base sm:text-lg text-neutral-700 max-w-xl">
//                 Certified organic products, crafted with care from farm to home
//                 for a healthier, sustainable lifestyle.
//               </p>

//               <div className="flex items-center gap-3">
//                 <a
//                   href="#products"
//                   className="h-11 px-5 rounded-full text-white shadow-lg hover:shadow-xl transition flex items-center gap-2"
//                   style={{ backgroundColor: "#2EBF65" }}
//                 >
                  
//                   <span className="font-medium">Shop Now</span>
//                 </a>

//                 <a
//                   href="#"
//                   className="h-11 px-5 rounded-full text-white shadow-lg hover:shadow-xl transition flex items-center gap-2"
//                   style={{ backgroundColor: "#FF7A1A" }}
//                 >
                 
//                   <span className="font-medium">Learn More</span>
//                 </a>
//               </div>

              
//             </div>

//             {/* Right image cluster */}
//             <div
//             className=""
             
//           >
//          <img
//          src={OrganicBanner}
//         alt="Organic food"
//          className="w-full h-full object-cover"
//         />
//      </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InfoIcon from "@mui/icons-material/Info";
import ShieldIcon from "@mui/icons-material/Shield";
import SpaIcon from "@mui/icons-material/Spa";
import OrganicBanner from "../assets/OrganicBanner.png";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full">
        <div
          className="relative overflow-hidden border-neutral-200"
          style={{ backgroundColor: "#FBE4B5" }}
        >
          <div className="grid md:grid-cols-2">
            {/* Left content */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center gap-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1]">
                <span className="text-[#FF8A00]">Fresh.</span>
                <span className="text-[#fff]"> Organic.</span>
                <span className="text-[rgb(194,43,16)]"> Direct.</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-700 max-w-xl">
                Certified organic products, crafted with care from farm to home
                for a healthier, sustainable lifestyle.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#products"
                  className="h-11 px-5 rounded-full text-white shadow-lg hover:shadow-xl transition flex items-center gap-2"
                  style={{ backgroundColor: "#2EBF65" }}
                >
                  <span className="font-medium">Shop Now</span>
                </a>

                <a
                  href="#"
                  className="h-11 px-5 rounded-full text-white shadow-lg hover:shadow-xl transition flex items-center gap-2"
                  style={{ backgroundColor: "#FF7A1A" }}
                >
                  <span className="font-medium">Learn More</span>
                </a>
              </div>
            </div>

            {/* Right image cluster — hidden on mobile/tablet */}
            <div className="hidden lg:block">
              <img
                src={OrganicBanner}
                alt="Organic food"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
