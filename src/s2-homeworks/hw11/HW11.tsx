import React, { useEffect, useState } from "react";
import s from "./HW11.module.css";
import s2 from "../../s1-main/App.module.css";
import { restoreState } from "../hw06/localStorage/localStorage";
import SuperRange from "./common/c7-SuperRange/SuperRange";

function HW11() {
  useEffect(() => {
    if (process.env.NODE_ENV === "test") {
      localStorage.removeItem("hw11-value1");
      localStorage.removeItem("hw11-value2");
    }
  }, []);

  const [value1, setValue1] = useState<number>(restoreState("hw11-value1", 25));
  const [value2, setValue2] = useState<number>(restoreState("hw11-value2", 75));

  const change = (_event: Event | unknown, value: number | number[]) => {
    if (Array.isArray(value)) {
      setValue1(value[0]);
      setValue2(value[1]);
    } else {
      setValue1(value);
    }
  };

  return (
    <div id="hw11">
      <div className={s2.hwTitle}>Homework #11</div>

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
              onChange={change}
              min={0}
              max={100}
              step={1}
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
              onChange={change}
              min={0}
              max={100}
              step={1}
            />
            <span id="hw11-value-2" className={s.number}>
              {value2}
            </span>
          </div>

          {/* Кнопка для сдвига правого ползунка */}
          <button
            id="move-double-slider"
            onClick={() => {
              setValue2((prev) => Math.max(prev - 10, value1));
            }}
          >
            Move Right Slider Left
          </button>
        </div>
      </div>
    </div>
  );
}

export default HW11;
