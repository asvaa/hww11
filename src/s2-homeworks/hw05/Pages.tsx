import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import HW10 from "../hw10/HW10";

export const PATH = {
  PRE_JUNIOR: "/pre-junior",
  JUNIOR: "/junior",
  JUNIOR_PLUS: "/junior-plus",
  HW10: "/hw10",
};

function Pages() {
  return (
    <div>
      <Routes>
        {/* редирект с корня на /pre-junior */}
        <Route path="/" element={<Navigate to={PATH.PRE_JUNIOR} />} />

        {/* страницы */}
        <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />
        <Route path={PATH.JUNIOR} element={<Junior />} />
        <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />} />
        <Route path={PATH.HW10} element={<HW10 />} />
        {/* страница 404 для всех неизвестных маршрутов */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Pages;
