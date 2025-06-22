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

// function HW11() {
//   // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
//   const [value1, setValue1] = useState(restoreState<number>("hw11-value1", 0));
//   const [value2, setValue2] = useState(
//     restoreState<number>("hw11-value2", 100)
//   );

function HW11() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);

  const change = (_: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      // изменение двойного слайдера — отлавливаем, когда двигается именно второй ползунок
      const [newVal1, newVal2] = value;
      if (newVal1 !== value1 || newVal2 !== value2) {
        setValue1(newVal1);
        setValue2(newVal2);
      }
    } else {
      // изменение одиночного — сдвигаем оба значения синхронно
      const range = value2 - value1;
      const newVal1 = value;
      const newVal2 = value + range > 100 ? 100 : value + range;
      setValue1(newVal1);
      setValue2(newVal2);
    }
  };

  return (
    <div id="hw11">
      <div className={s2.hwTitle}>Hometask № 11</div>
      <div className={s2.hw}>
        <div className={s.container}>
          {/* одиночный слайдер */}
          <div className={s.wrapper}>
            <span id="hw11-value" className={s.number}>
              {value1}
            </span>
            <SuperRange
              id="hw11-single-slider"
              value={value1}
              min={0}
              max={100}
              onChange={change}
            />
          </div>

          {/* двойной слайдер */}
          <div className={s.wrapper}>
            <span id="hw11-value-1" className={s.number}>
              {value1}
            </span>
            <SuperRange
              id="hw11-double-slider"
              value={[value1, value2]}
              min={0}
              max={100}
              onChange={change}
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
