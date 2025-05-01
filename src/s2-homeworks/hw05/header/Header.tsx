import React, { FC } from "react";
import burgerIcon from "./burger.svg";
import s from "./Header.module.css";
import { useLocation } from "react-router-dom";
import { PATH } from "../Pages";

type PropsType = {
  handleOpen: () => void;
};

export const Header: FC<PropsType> = ({ handleOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isHW10 = currentPath === PATH.HW10; // ✅

  const pageName =
    currentPath === PATH.PRE_JUNIOR
      ? "Pre-junior"
      : currentPath === PATH.JUNIOR
      ? "Junior"
      : currentPath === PATH.JUNIOR_PLUS
      ? "Junior Plus"
      : currentPath === PATH.HW10
      ? "Homework #10"
      : "Error";

  return (
    <div id={"hw5-header"} className={s.header}>
      {/* ✅ Бургер ВСЕГДА в DOM, но скрывается через класс */}
      <img
        src={burgerIcon}
        id={"hw5-burger-menu"}
        className={`${s.burgerMenuIcon} ${isHW10 ? s.hidden : ""}`}
        onClick={handleOpen}
        alt={"open menu"}
      />
      <h1>{pageName}</h1>
    </div>
  );
};
