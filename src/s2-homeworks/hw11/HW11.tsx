import React, { useState } from "react";
import s from "./HW11.module.css";
import s2 from "../../s1-main/App.module.css";
import { restoreState } from "../hw06/localStorage/localStorage";
import SuperRange from "./common/c7-SuperRange/SuperRange";

function HW11() {
  const [value1, setValue1] = useState(restoreState<number>("hw11-value1", 0));
  const [value2, setValue2] = useState(restoreState<number>("hw11-value2", 100));

  const handleSingleChange = (event: unknown, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue1(newValue);
    }
  };

  const handleDoubleChange = (event: unknown, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue1(newValue[0]);
      setValue2(newValue[1]);
    }
  };

  return (
    <div id={"hw11"} data-testid="hw11">
      <div className={s2.hwTitle}>Homework #11</div>

      <div className={s2.hw}>
        <div className={s.container}>
          <div className={s.wrapper} data-testid="single-slider-wrapper">
            <span id={"hw11-value"} className={s.number} data-testid="hw11-value">
              {value1}
            </span>
            <div id="hw11-single-slider" data-testid="single-slider">
              <SuperRange
                value={value1}
                onChange={handleSingleChange}
                min={0}
                max={100}
                step={1}
              />
            </div>
          </div>

          <div className={s.wrapper} data-testid="double-slider-wrapper">
            <span id={"hw11-value-1"} className={s.number} data-testid="hw11-value-1">
              {value1}
            </span>
            <div id="hw11-double-slider" data-testid="double-slider">
              <SuperRange
                value={[value1, value2]}
                onChange={handleDoubleChange}
                min={0}
                max={100}
                step={1}
              />
            </div>
            <span id={"hw11-value-2"} className={s.number} data-testid="hw11-value-2">
              {value2}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HW11;