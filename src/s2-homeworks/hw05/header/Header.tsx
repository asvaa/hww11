import React, { FC } from "react";
import burgerIcon from "./burger.svg";
import s from "./Header.module.css";
import { useLocation } from "react-router-dom";
import { PATH } from "../Pages";

type PropsType = {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
  hideBurger?: boolean;
};

export const Header: FC<PropsType> = ({
  handleOpen,
  open,
  handleClose,
  hideBurger,
}) => {
  const location = useLocation();

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

  const shouldHideBurger =
    hideBurger !== undefined ? hideBurger : location.pathname === PATH.HW10;

  return (
    <div id="hw5-header" className={s.header}>
      {!shouldHideBurger && (
        <img
          src={burgerIcon}
          id="hw5-burger-menu"
          className={s.burgerMenuIcon}
          onClick={open ? handleClose : handleOpen}
          alt="open menu"
        />
      )}
      <h1>{pageName}</h1>
    </div>
  );
};
