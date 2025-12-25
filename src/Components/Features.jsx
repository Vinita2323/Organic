
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";


import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EcoFriendly from "../assets/EcoFriendly.png";
import FeatureBestPrice from "../assets/FeatureBestPrice.png";
import FeaturesDelivery from "../assets/FeaturesDelivery.png";
import FeatureQuality from "../assets/FeatureQuality.png";
import FeatureOrganic from "../assets/FeatureOrganic.png";
import FeatureSupport from "../assets/FeatureSupport.png";



const Features = () => {
  const features = [
  {
    icon: <img src={FeatureOrganic} alt="Eco Friendly" style={{ width: 57, height: 57 }} />,
    title: "100% Organic",
    desc: "From trusted farms",
   
  },
{
    icon: <img src={EcoFriendly} alt="Eco Friendly" style={{ width: 57, height: 57 }} />,
    title: "Eco Friendly",
    desc: "Sustainable packing",
    bgColor: "#E8F9EE",
  },

  {
    icon: <img src={FeatureSupport} alt="Eco Friendly" style={{ width: 57, height: 57 }} />,
    title: "24/7 Support",
    desc: "We’re here to help",
    bgColor: "#E8F9EE",
  },
  {
    icon: <img src={FeatureBestPrice} alt="Eco Friendly" style={{ width: 57, height: 57 }} />,
    title: "Best Prices",
    desc: "Price match",
    bgColor: "#FFF2E8",
  },
  {
    icon: <img src={FeatureQuality} alt="Eco Friendly" style={{ width: 57, height: 57 }} />,
    title: "Quality Assured",
    desc: "Verified & trusted",
    bgColor: "#E8F9EE",
  },
  {
    icon: <img src={FeaturesDelivery} alt="Eco Friendly" style={{ width: 57, height: 57 }} />,
    title: "Fast Delivery",
    desc: "Same day in city",
    bgColor: "#FFF2E8",
  },
];


  return (
    <section className="mt-8">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-2xl p-4 flex items-start gap-3 shadow-sm"
            >
              <div
                className="w-15 h-15 rounded-xl flex items-center justify-center"
               
              >
                {feature.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-black">{feature.title}</p>
                <p className="text-xs text-neutral-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;


