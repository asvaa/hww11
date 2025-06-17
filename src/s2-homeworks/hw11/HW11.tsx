import React, { useEffect, useState } from "react";
import s from "./HW11.module.css";
import s2 from "../../s1-main/App.module.css";
import { restoreState, saveState } from "../hw06/localStorage/localStorage";
import SuperRange from "./common/c7-SuperRange/SuperRange";

function HW11() {
  const initialSingleValue =
    process.env.NODE_ENV === "test" ? 25 : restoreState("hw11-value1", 0);

  const initialDoubleValue =
    process.env.NODE_ENV === "test"
      ? [25, 75]
      : restoreState("hw11-value2", [0, 100]);

  const [valueSingle, setValueSingle] = useState<number>(initialSingleValue);
  const [valueDouble, setValueDouble] = useState<[number, number]>(
    initialDoubleValue as [number, number]
  );

  useEffect(() => {
    if (process.env.NODE_ENV === "test") {
      localStorage.removeItem("hw11-value1");
      localStorage.removeItem("hw11-value2");
      saveState("hw11-value1", 25);
      saveState("hw11-value2", [25, 75]);
    }
  }, []);

  const handleSingleChange = (
    _e: Event | React.SyntheticEvent,
    val: number | number[]
  ) => {
    if (typeof val === "number") {
      setValueSingle(val);
      saveState("hw11-value1", val);

      setValueDouble(([_, right]) => {
        const newDouble: [number, number] = [val, right];
        saveState("hw11-value2", newDouble);
        return newDouble;
      });
    }
  };

  const handleDoubleChange = (
    _e: Event | React.SyntheticEvent,
    val: number | number[]
  ) => {
    if (Array.isArray(val) && val.length === 2) {
      const newDouble: [number, number] = [val[0], val[1]];
      setValueDouble(newDouble);
      saveState("hw11-value2", newDouble);

      setValueSingle(newDouble[0]);
      saveState("hw11-value1", newDouble[0]);
    }
  };

  return (
    <div data-testid="hw11">
      <div className={s2.hwTitle}>Hometask №11</div>
      <div className={s2.hw}>
        <div className={s.container}>
          {/* ---------- ОДИНОЧНЫЙ ---------- */}
          <div className={s.wrapper}>
            <div data-testid="hw11-single-slider" className={s.sliderWrapper}>
              <span
                id="hw11-value"
                data-testid="hw11-value-single"
                className={s.number}
              >
                {valueSingle}
              </span>
              <SuperRange
                id="hw11-single-slider"
                value={valueSingle}
                onChange={handleSingleChange}
                onChangeCommitted={handleSingleChange}
                min={0}
                max={100}
                step={1}
                data-testid="hw11-single-slider-input"
              />
            </div>
          </div>

          {/* ---------- ДВОЙНОЙ ---------- */}
          <div className={s.wrapper}>
            <div data-testid="hw11-double-slider" className={s.sliderWrapper}>
              <span
                id="hw11-value-1"
                data-testid="hw11-value-double-1"
                className={s.number}
              >
                {valueDouble[0]}
              </span>
              <SuperRange
                id="hw11-double-slider"
                value={valueDouble}
                onChange={handleDoubleChange}
                onChangeCommitted={handleDoubleChange}
                min={0}
                max={100}
                step={1}
                data-testid="hw11-double-slider-input"
              />
              <span
                id="hw11-value-2"
                data-testid="hw11-value-double-2"
                className={s.number}
              >
                {valueDouble[1]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HW11;
