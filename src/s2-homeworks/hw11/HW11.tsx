import React, { useState } from "react";
import s from "./HW11.module.css";
import s2 from "../../s1-main/App.module.css";
import { restoreState } from "../hw06/localStorage/localStorage";
import SuperRange from "./common/c7-SuperRange/SuperRange";

function HW11() {
  const [value1, setValue1] = useState(restoreState<number>("hw11-value1", 25));
  const [value2, setValue2] = useState(restoreState<number>("hw11-value2", 75));

  const change = (_event: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      setValue1(value[0]);
      setValue2(value[1]);
    } else {
      setValue1(value);
    }
  };

  return (
    <div id={"hw11"}>
      <div className={s2.hwTitle}>Homework #11</div>

      <div className={s2.hw}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <span id={"hw11-value"} className={s.number}>
              {value1}
            </span>
            <SuperRange
              id={"hw11-single-slider"}
              value={value1}
              onChange={change}
              min={0}
              max={100}
              step={1}
            />
          </div>
          <div className={s.wrapper}>
            <span id={"hw11-value-1"} className={s.number}>
              {value1}
            </span>
            <SuperRange
              id={"hw11-double-slider"}
              value={[value1, value2]}
              onChange={change}
              min={0}
              max={100}
              step={1}
            />
            <span id={"hw11-value-2"} className={s.number}>
              {value2}
            </span>
          </div>

          {/* 👇 Это нужно, чтобы слайдеры сдвинулись для теста */}
          <button
            id="move-double-slider"
            onClick={() => {
              setValue2((prev) => prev - 10);
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
