import React, { useState, useRef } from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import MicNoneIcon from "@mui/icons-material/MicNone";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import HouseSidingOutlinedIcon from "@mui/icons-material/HouseSidingOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isCatMenuOpen, setIsCatMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const catButtonRef = useRef(null);
  const userButtonRef = useRef(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [userMenuPosition, setUserMenuPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = () => {
    if (window.innerWidth < 768) return; // disable hover on mobile
    if (catButtonRef.current) {
      const rect = catButtonRef.current.getBoundingClientRect();
      setMenuPosition({ top: rect.bottom + window.scrollY, left: rect.left });
    }
    setIsCatMenuOpen(true);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 768) return;
    setIsCatMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleUserIconClick = () => {
    if (userButtonRef.current) {
      const rect = userButtonRef.current.getBoundingClientRect();
      setUserMenuPosition({
        top: rect.bottom + window.scrollY + 8, // 8px gap
        left: rect.right + window.scrollX,
      });
    }
    setIsUserMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo + Mobile menu */}
            <div className="flex items-center gap-3">
              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-200 hover:bg-neutral-100 transition"
              >
                {isMobileMenuOpen ? (
                  <CloseIcon fontSize="small" />
                ) : (
                  <MenuIcon fontSize="small" />
                )}
              </button>

              {/* Logo */}
              <a href="#" className="flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#34C759] via-[#2ABB5F] to-[#28A745] shadow-lg flex items-center justify-center">
                  <i data-lucide="leaf" className="w-5 h-5 text-white"></i>
                </div>
                <span className="text-xl font-semibold tracking-tight">
                  Organica
                </span>
              </a>
            </div>

            {/* Center: Search */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-6">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-black">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder="Search Organic Products"
                  className="w-full h-12 rounded-full pl-12 pr-14 text-neutral-800 placeholder-neutral-500 shadow-sm focus:ring-2 focus:ring-[#34C759]/60 focus:outline-none"
                  style={{ backgroundColor: "#CFF6D1" }}
                />
                <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <div className="w-9 h-9 rounded-full bg-white/70 border border-neutral-200 flex items-center justify-center hover:scale-105 transition text-black">
                    <MicNoneIcon />
                  </div>
                </button>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 text-gray-500">
              {/* Wishlist Icon */}
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 35 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.48"
                    d="M33.092 19.7628L18.5162 36L3.94041 19.7628C2.97901 18.7105 2.22172 17.4458 1.71624 16.0481C1.21076 14.6505 0.968046 13.1502 1.00337 11.6419C1.03869 10.1336 1.35129 8.6498 1.92149 7.28402C2.49168 5.91825 3.30712 4.70006 4.31644 3.70617C5.32577 2.71228 6.50712 1.96421 7.78611 1.50908C9.0651 1.05395 10.414 0.901613 11.7479 1.06166C13.0818 1.22171 14.3718 1.69068 15.5367 2.43904C16.7015 3.18739 17.716 4.19892 18.5162 5.40993C19.3199 4.20772 20.3355 3.20502 21.4996 2.46461C22.6636 1.72419 23.951 1.262 25.2812 1.10695C26.6113 0.951904 27.9556 1.10734 29.2299 1.56353C30.5042 2.01973 31.6811 2.76685 32.6869 3.75816C33.6926 4.74946 34.5057 5.9636 35.0751 7.32458C35.6445 8.68557 35.958 10.1641 35.9961 11.6676C36.0341 13.1712 35.7958 14.6674 35.2961 16.0626C34.7964 17.4578 34.046 18.7219 33.092 19.7759"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Profile Icon */}
              {/* <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 47 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.6">
                    <path
                      d="M22.5208 40.25H16.7908C15.3874 40.2499 14.0304 39.7582 12.9654 38.8638C11.9004 37.9695 11.1976 36.7315 10.9843 35.374L8.52659 19.7493C8.44075 19.203 8.47663 18.645 8.63176 18.1136C8.78689 17.5822 9.05761 17.0898 9.42536 16.6704C9.7931 16.2509 10.2492 15.9143 10.7623 15.6835C11.2754 15.4527 11.8335 15.3332 12.3982 15.3333H34.6038C35.1685 15.3332 35.7265 15.4527 36.2397 15.6835C36.7528 15.9143 37.2089 16.2509 37.5766 16.6704C37.9444 17.0898 38.2151 17.5822 38.3702 18.1136C38.5253 18.645 38.5612 19.203 38.4754 19.7493L37.4962 25.9746"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.625 21.0833V11.5C17.625 9.97501 18.244 8.51247 19.3457 7.43414C20.4475 6.3558 21.9419 5.75 23.5 5.75C25.0581 5.75 26.5525 6.3558 27.6543 7.43414C28.756 8.51247 29.375 9.97501 29.375 11.5V21.0833"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M29.375 36.4166L33.2917 40.25L41.125 32.5833"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button> */}

              {/* User Icon */}
              <button
                ref={userButtonRef}
                onClick={handleUserIconClick}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition relative"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 35 35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    opacity="0.63"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11.67 10.21a5.83 5.83 0 0 0 11.67 0 5.83 5.83 0 0 0-11.67 0Z" />
                    <path d="M8.75 30.62v-2.91a5.83 5.83 0 0 1 5.83-5.83h5.83a5.83 5.83 0 0 1 5.83 5.83v2.91" />
                  </g>
                  <circle
                    cx="24.5"
                    cy="3.5"
                    r="1.5"
                    fill="#FB1919"
                    opacity="0.63"
                  />
                </svg>
              </button>
              {isUserMenuOpen && (
                <div
                  style={{
                    position: "fixed",
                    top: `${userMenuPosition.top}px`,
                    left: `${userMenuPosition.left}px`,
                    transform: "translateX(-100%)",
                  }}
                  className="z-50 w-70 bg-white/80  border border-gray-300 rounded-2xl shadow-2xl py-4 flex flex-col items-center space-y-4"
                >
                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button className="px-6 py-2 rounded-full bg-[#4CAF50] text-white font-semibold shadow-md hover:bg-white hover:text-[#4CAF50] hover:border-[#4CAF50] hover:border-2 transition-all">
                      Login
                    </button>
                    <button className="px-6 py-2 rounded-full bg-white border border-gray-300 text-gray-700 font-semibold shadow-sm hover:bg-[#4CAF50] hover:text-white hover:border-transition-all">
                      SignUp
                    </button>
                  </div>

                  {/* Footer text */}
                  <div className="text-[13px] text-gray-500 font-medium flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4CAF50"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icon-tabler-shield-check"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span>
                      Secured Login by{" "}
                      <span className="text-[#4CAF50] font-semibold">
                        Organic
                      </span>
                    </span>
                  </div>
                </div>
              )}

              {/* Cart Icon */}
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition relative">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 35 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.48"
                    d="M34.807 6.94805C34.721 6.8272 34.6101 6.72923 34.4828 6.66181C34.3555 6.59439 34.2154 6.55934 34.0733 6.55941H7.00959L5.49164 0.719895C5.43766 0.512845 5.32171 0.330375 5.16151 0.200376C5.00131 0.070376 4.80567 -0.00000154938 4.6045 0H0.920901C0.676663 0 0.442428 0.103662 0.269726 0.288181C0.0970232 0.4727 0 0.722962 0 0.983911C0 1.24486 0.0970232 1.49512 0.269726 1.67964C0.442428 1.86416 0.676663 1.96782 0.920901 1.96782H3.90462L9.36249 22.9399C9.56162 23.6975 9.98633 24.3651 10.5723 24.8418C11.1583 25.3185 11.8737 25.5782 12.6102 25.5817H27.7805C28.5181 25.5796 29.2348 25.3206 29.8221 24.8438C30.4093 24.367 30.8349 23.6986 31.0344 22.9399L34.9681 7.80733C35.0052 7.66054 35.01 7.50656 34.982 7.35746C34.9541 7.20837 34.8942 7.06824 34.807 6.94805ZM29.2509 22.4135C29.1614 22.7572 28.9694 23.0604 28.7041 23.2771C28.4387 23.4937 28.1145 23.6119 27.7805 23.6139H12.6102C12.2749 23.6137 11.949 23.4963 11.682 23.2795C11.4151 23.0628 11.222 22.7586 11.1322 22.4135L7.52069 8.52723H32.8623L29.2509 22.4135ZM14.1205 31.1572C14.1205 31.6112 13.9945 32.0551 13.7583 32.4327C13.5222 32.8102 13.1866 33.1045 12.794 33.2782C12.4014 33.452 11.9693 33.4974 11.5525 33.4089C11.1357 33.3203 10.7528 33.1016 10.4523 32.7806C10.1518 32.4595 9.94714 32.0504 9.86423 31.6051C9.78132 31.1597 9.82387 30.6981 9.98651 30.2786C10.1491 29.8591 10.4246 29.5006 10.7779 29.2483C11.1313 28.996 11.5467 28.8614 11.9717 28.8614C12.5416 28.8614 13.0881 29.1033 13.4911 29.5338C13.8941 29.9644 14.1205 30.5483 14.1205 31.1572ZM30.0828 31.1572C30.0828 31.6112 29.9567 32.0551 29.7206 32.4327C29.4845 32.8102 29.1489 33.1045 28.7563 33.2782C28.3637 33.452 27.9316 33.4974 27.5148 33.4089C27.098 33.3203 26.7151 33.1016 26.4146 32.7806C26.1141 32.4595 25.9094 32.0504 25.8265 31.6051C25.7436 31.1597 25.7862 30.6981 25.9488 30.2786C26.1114 29.8591 26.3868 29.5006 26.7402 29.2483C27.0936 28.996 27.509 28.8614 27.934 28.8614C28.5039 28.8614 29.0504 29.1033 29.4534 29.5338C29.8564 29.9644 30.0828 30.5483 30.0828 31.1572Z"
                    fill="black"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-[#FF7A1A] text-white">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Category Nav */}
        <nav className="hidden md:flex border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center gap-4 overflow-x-auto no-scrollbar h-12 justify-between">
            {/* All Categories */}
            <Link to="/" className="text-gray-500">
              <HouseSidingOutlinedIcon />
            </Link>
            <div
              className="relative text-gray-500"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                ref={catButtonRef}
                className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 hover:bg-neutral-100 transition"
              >
                <WidgetsOutlinedIcon sx={{ fontSize: 16 }} />
                <span>All Categories</span>
                <ExpandMoreIcon
                  className={`w-4 h-4 transition-transform ${
                    isCatMenuOpen ? "rotate-180" : ""
                  }`}
                  sx={{ fontSize: 16 }}
                />
              </button>

              {isCatMenuOpen && (
                <div
                  style={{
                    position: "fixed",
                    top: menuPosition.top + "px",
                    left: menuPosition.left + "px",
                    zIndex: 9999,
                  }}
                  className="w-56 bg-white border border-neutral-200 rounded-xl shadow-lg overflow-hidden"
                  onMouseEnter={() => setIsCatMenuOpen(true)}
                  onMouseLeave={() => setIsCatMenuOpen(false)}
                >
                  <div className="p-2">
                    {[
                      "Vegetables",
                      "Fruits",
                      "Grains & Millets",
                      "Oils & Ghee",
                      "Dry Fruits",
                      "Spices",
                    ].map((item) => (
                      <button
                        key={item}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-100 text-sm text-gray-500"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other nav buttons */}
            {/* <Link
              to="/grains-millets"
              className="text-sm font-medium px-2 py-1 hover:text-neutral-900 text-gray-500"
            >
              Grains & Millets
            </Link> */}
            <Link
              to="/grains-millets"
              className={`text-sm font-medium px-2 py-1 transition ${
                location.pathname === "/grains-millets"
                  ? "text-[#4CAF50] font-semibold border-b-2 border-[#4CAF50]"
                  : "text-[#4CAF50] font-semibold border-b-2 border-[#4CAF50]"
              }`}
            >
              Grains & Millets
            </Link>
            <Link className="text-sm font-medium px-2 py-1 hover:text-neutral-900 text-gray-500">
              Oils & Ghee
            </Link>
            <Link className="text-sm font-medium px-2 py-1 hover:text-neutral-900 text-gray-500">
              Dry Fruits
            </Link>
            <Link className="text-sm font-medium px-2 py-1 hover:text-neutral-900 text-gray-500">
              Spices
            </Link>
            <div className="inline-flex items-center gap-1 text-sm font-medium px-2 py-1 text-[#FF5A1F]">
              <LocalFireDepartmentIcon
                sx={{ fontSize: 18, color: "#FF5A1F" }}
              />
              <span>Today's Top Deals</span>
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden bg-white border-t border-neutral-200 transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="flex flex-col px-4 py-3 space-y-2">
            <button className="text-left text-sm font-medium text-gray-600 hover:text-black">
              All Categories
            </button>
            <button className="text-left text-sm font-medium text-gray-600 hover:text-black">
              Grains & Millets
            </button>
            <button className="text-left text-sm font-medium text-gray-600 hover:text-black">
              Oils & Ghee
            </button>
            <button className="text-left text-sm font-medium text-gray-600 hover:text-black">
              Dry Fruits
            </button>
            <button className="text-left text-sm font-medium text-gray-600 hover:text-black">
              Spices
            </button>
            <div className="flex items-center gap-2 text-sm font-medium text-[#FF5A1F]">
              <LocalFireDepartmentIcon
                sx={{ fontSize: 18, color: "#FF5A1F" }}
              />
              <span>Today's Top Deals</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
