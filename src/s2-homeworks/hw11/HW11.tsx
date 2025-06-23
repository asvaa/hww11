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
      // Гарантируем, что первый ползунок не превышает второй
      const [val1, val2] = newValue;
      setValue1(Math.min(val1, val2));
      setValue2(Math.max(val1, val2));
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
              value={value1}
              onChange={handleSingleChange}
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
              value={[value1, value2]}
              onChange={handleDoubleChange}
              min={0}
              max={100}
              step={1}
            />
            <span id={"hw11-value-2"} className={s.number}>
              {value2}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HW11;