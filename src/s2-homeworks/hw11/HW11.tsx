import React, { useState } from "react";
import s from "./HW11.module.css";
import s2 from "../../s1-main/App.module.css";
import { restoreState } from "../hw06/localStorage/localStorage";
import SuperRange from "./common/c7-SuperRange/SuperRange";

/*
 * 1 - передать значения в оба слайдера
 * 2 - дописать типы и логику функции change
 * 3 - сделать стили в соответствии с дизайном
 * */

function HW11() {
  // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются

  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(80);

  const handleSingleChange = (_: Event, value: number | number[]) => {
    if (!Array.isArray(value)) {
      setValue1(value);
    }
  };

  const handleDoubleChange = (_: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      setValue1(value[0]);
      setValue2(value[1]);
    }
  };

  return (
    <div id={"hw11"}>
      <div className={s2.hwTitle}>Hometask № 11</div>
      <div className={s2.hw}>
        <div className={s.container}>
          {/* Одиночный слайдер */}
          <div className={s.wrapper}>
            <span id="hw11-value" className={s.number}>
              {value1}
            </span>
            <SuperRange
              id="hw11-single-slider"
              value={value1}
              min={0}
              max={100}
              onChange={handleSingleChange}
            />
          </div>

          {/* Двойной слайдер */}
          <div className={s.wrapper}>
            <span id="hw11-value-1" className={s.number}>
              {value1}
            </span>
            <SuperRange
              id="hw11-double-slider"
              value={[value1, value2]}
              min={0}
              max={100}
              onChange={handleDoubleChange}
            />
            <span id="hw11-value-2" className={s.number}>
              {value2}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HW11;
