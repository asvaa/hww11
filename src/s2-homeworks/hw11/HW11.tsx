import React, { useState } from "react";
import s from "./HW11.module.css";
import s2 from "../../s1-main/App.module.css";
import SuperRange from "./common/c7-SuperRange/SuperRange";

function HW11() {
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(100);

  const handleSingleChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue1(newValue);
    }
  };

  const handleDoubleChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue1(newValue[0]);
      setValue2(newValue[1]);
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
              min={0}
              max={100}
              onChange={handleSingleChange}
            />
          </div>
          <div className={s.wrapper}>
            <span id={"hw11-value-1"} className={s.number}>
              {value1}
            </span>
            <SuperRange
              id={"hw11-double-slider"}
              value={[value1, value2]}
              min={0}
              max={100}
              onChange={handleDoubleChange}
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
