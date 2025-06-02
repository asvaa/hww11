import React, { useEffect, useState } from "react";
import s from "./HW11.module.css";
import s2 from "../../s1-main/App.module.css";
import { restoreState } from "../hw06/localStorage/localStorage";
import SuperRange from "./common/c7-SuperRange/SuperRange";

function HW11() {
  const [value1, setValue1] = useState<number>(restoreState("hw11-value1", 50));
  const [value2, setValue2] = useState<number>(restoreState("hw11-value2", 80));

  useEffect(() => {
    if (process.env.NODE_ENV === "test") {
      localStorage.removeItem("hw11-value1");
      localStorage.removeItem("hw11-value2");
      setValue1(50);
      setValue2(80);
    }
  }, []);

  const change = (
    _event: Event | React.SyntheticEvent,
    value: number | number[]
  ) => {
    if (Array.isArray(value)) {
      setValue1(value[0]);
      setValue2(value[1]);
    } else {
      setValue1(value);
    }
  };

  return (
    <div data-testid="hw11">
      <div className={s2.hwTitle}>Homework #11</div>
      <div className={s2.hw}>
        <div className={s.container}>
          {/* Одиночный слайдер */}
          <div className={s.wrapper}>
            <span id="hw11-value" data-testid="value1" className={s.number}>
              {value1}
            </span>
            <SuperRange
              id="hw11-single-slider"
              value={value1}
              onChange={change}
              onChangeCommitted={change}
              min={0}
              max={100}
              step={1}
            />
          </div>

          {/* Двойной слайдер */}
          <div className={s.wrapper}>
            <span
              id="hw11-value-1"
              data-testid="value1-double"
              className={s.number}
            >
              {value1}
            </span>
            <SuperRange
              id="hw11-double-slider"
              value={[value1, value2]}
              onChange={change}
              onChangeCommitted={change}
              min={0}
              max={100}
              step={1}
            />
            <span id="hw11-value-2" data-testid="value2" className={s.number}>
              {value2}
            </span>
          </div>

          <button
            data-testid="move-button"
            id="move-double-slider"
            onClick={() => {
              setValue2((prev) => Math.max(value1 + 1, prev - 10));
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
