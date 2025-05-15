import React, { FC, ReactNode, useEffect, useState } from "react";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { PATH } from "../Pages";

type PropsType = {
  children: ReactNode;
};

export const Layout: FC<PropsType> = ({ children }) => {
  const location = useLocation();
  const isHW10 = location.pathname === PATH.HW10;

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <>
      {!isHW10 && <Sidebar open={open} handleClose={handleClose} />}
      <Header open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <div>{children}</div>
    </>
  );
};
