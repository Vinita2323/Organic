import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white pt-10 px-4 sm:px-6 lg:px-12 mt-6">
      {/* Tagline Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-white/80 rounded-full" />
        <p className="text-sm text-center sm:text-left">
          Smart Platform for Organic Shopping, Sustainability, and Wellness
        </p>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 border-b border-white/40 pb-8">
        {/* Our Website */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-3">Our Website</h3>
          <ul className="space-y-1 text-sm">
            <li>Organic</li>
            <li>(Organic Natural Products E-Commerce Tool)</li>
          </ul>
        </div>

        {/* Organic Web */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-3">Organic Web</h3>
          <ul className="space-y-1 text-sm">
            <li>Product Selling</li>
            <li>Product Management</li>
            <li>Delivery Services</li>
            <li>Product Purchasing</li>
            <li>Organic Products Management</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Delivery Solutions */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-3">Delivery Solutions</h3>
          <ul className="space-y-1 text-sm">
            <li>Fast Delivery</li>
            <li>Easy Return</li>
            <li>Quick Refund</li>
            <li>Customer Support</li>
            <li>Address Change</li>
            <li>Delivery Tracking</li>
          </ul>
        </div>

        {/* Organic Services */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-3">Organic Services</h3>
          <ul className="space-y-1 text-sm">
            <li>24/7 Support</li>
            <li>Eco-Friendly Packaging</li>
            <li>Quality Assured Products</li>
            <li>Fast Delivery</li>
            <li>Best Prices</li>
          </ul>
        </div>

        {/* Organic Categories */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-3">Organic Categories</h3>
          <ul className="space-y-1 text-sm">
            <li>Dry Fruits</li>
            <li>Grains</li>
            <li>Spices</li>
            <li>Honey</li>
            <li>Ghee</li>
            <li>Pulses</li>
            <li>Seeds</li>
            <li>Cereals</li>
            <li>Millets</li>
            <li>Oils</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-3">Contact Info</h3>
          <div className="space-y-2 text-sm">
            <p className="font-semibold">Phone</p>
            <div className="space-y-1">
              <p className="flex items-center gap-2">
                <PhoneIcon fontSize="small" /> +91 84352 04953
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon fontSize="small" /> +91 84352 04953
              </p>
              <p className="flex items-center gap-2">
                <WhatsAppIcon fontSize="small" /> +91 84352 04953
              </p>
            </div>

            <p className="mt-3">10:00 AM - 06:00 PM ( All Day )</p>

            <div className="mt-3">
              <p className="font-semibold">Email</p>
              <p className="break-words">
                SamprakshiInfinitySolution@gmail.com
              </p>
              <p>Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-sm pt-4">
        <div className="flex flex-wrap items-center justify-center gap-6 mb-4 md:mb-0">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
        </div>

        <p className="text-center mb-4 md:mb-0 break-words">
          Copyright © 2025 Samprakshi Infinity Solution Pvt. Ltd.
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 mb-6">
          <a
            href="#"
            className="bg-white text-green-700 p-2 rounded-md hover:bg-[#FF0000] hover:text-white transition"
          >
            <YouTubeIcon fontSize="small" />
          </a>
          <a
            href="#"
            className="bg-white text-green-700 p-2 rounded-md hover:bg-[#E4405F] hover:text-white transition"
          >
            <InstagramIcon fontSize="small" />
          </a>
          <a
            href="#"
            className="bg-white text-green-700 p-2 rounded-md hover:bg-[#1877F2] hover:text-white transition"
          >
            <FacebookIcon fontSize="small" />
          </a>
          <a
            href="#"
            className="bg-white text-green-700 p-2 rounded-md hover:bg-[#1DA1F2] hover:text-white transition"
          >
            <TwitterIcon fontSize="small" />
          </a>
          <a
            href="#"
            className="bg-white text-green-700 p-2 rounded-md hover:bg-[#0A66C2] hover:text-white transition"
          >
            <LinkedInIcon fontSize="small" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
