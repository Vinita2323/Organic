import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import GrainsMillets from "../Pages/GrainsMillet/GrainsMillets"; // make sure to create this page

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/grains-millets" element={<GrainsMillets />} />
    </Routes>
  );
};

export default AppRoutes;
