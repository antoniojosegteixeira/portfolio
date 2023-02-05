import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import FreeFire from "../pages/FreeFire";

import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/portfolio" />
        <Route element={<FreeFire />} path="/portfolio/free-fire-location" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
