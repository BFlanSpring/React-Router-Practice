import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SnackPage from "./Snacks";
import DrinkPage from "./Drinks";
import ItemDetail from "./ItemDetail";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/snacks" element={<SnackPage />} />
      <Route path="/drinks" element={<DrinkPage />} />
      <Route path="/snacks/:id" element={<ItemDetail itemType='snacks' />} />
      <Route path="/drinks/:id" element={<ItemDetail itemType='drinks' />} />
    </Routes>
  );
}

export default AppRoutes;


