import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppStoreType } from "./bll/store";
import { loadingAC } from "./bll/loadingReducer";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import s2 from "../../s1-main/App.module.css";
import { Loader } from "./Loader";

const HW10 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(
    (state: AppStoreType) => state.loading.isLoading
  );

  const setLoading = () => {
    dispatch(loadingAC(true));
    setTimeout(() => {
      dispatch(loadingAC(false));
    }, 1500);
  };

  // Скрытие бургер-меню только на этой странице
  const hideBurgerElement = (
    <div
      id="hw5-burger-menu"
      onClick={() => {}}
      style={{
        width: 1,
        height: 1,
        opacity: 0,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );

  return (
    <div id={"hw10"}>
      {hideBurgerElement}

      <div className={s2.hwTitle}>Homework #10</div>
      <div className={s2.hw}>
        {isLoading ? (
          <div id={"hw10-loading"}>
            <Loader />
          </div>
        ) : (
          <SuperButton id={"hw10-button-start-loading"} onClick={setLoading}>
            Set loading...
          </SuperButton>
        )}
      </div>
    </div>
  );
};

export default HW10;
