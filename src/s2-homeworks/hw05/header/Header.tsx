// Header.tsx
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
  const isHW10 = location.pathname === PATH.HW10;

  const pageName =
    location.pathname === PATH.PRE_JUNIOR
      ? "Pre-junior"
      : location.pathname === PATH.JUNIOR
      ? "Junior"
      : location.pathname === PATH.JUNIOR_PLUS
      ? "Junior Plus"
      : location.pathname === PATH.HW10
      ? "Homework #10"
      : "Error";

  return (
    <div id="hw5-header" className={s.header}>
      {/* всегда в DOM */}
      <img
        src={burgerIcon}
        id="hw5-burger-menu"
        className={`${s.burgerMenuIcon} ${isHW10 ? s.hidden : ""}`}
        onClick={handleOpen}
        alt="open menu"
      />
      <h1>{pageName}</h1>
    </div>
  );
};
