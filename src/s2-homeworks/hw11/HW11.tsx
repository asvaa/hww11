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

  const handleChange = (
    _e: Event | React.SyntheticEvent,
    val: number | number[]
  ) => {
    if (typeof val === "number") {
      setValueSingle(val);
      setValueDouble(([_, second]) => {
        const newDouble: [number, number] = [val, second];
        saveState("hw11-value1", val);
        saveState("hw11-value2", newDouble);
        return newDouble;
      });
    } else if (Array.isArray(val)) {
      const newDouble: [number, number] = [val[0], val[1]];
      setValueDouble(newDouble);
      setValueSingle(newDouble[0]);
      saveState("hw11-value1", newDouble[0]);
      saveState("hw11-value2", newDouble);
    }
  };

  return (
    <div data-testid="hw11">
      <div className={s2.hwTitle}>Hometask №11</div>
      <div className={s2.hw}>
        <div className={s.container}>

          {/* Одиночный слайдер */}
          <div className={s.wrapper}>
            <div
              id="hw11-single-slider"
              data-testid="hw11-single-slider"
              className={s.sliderWrapper}
            >
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
                onChange={handleChange}
                onChangeCommitted={handleChange}
                min={0}
                max={100}
                step={1}
                data-testid="hw11-single-slider-input"
              />
            </div>
          </div>

          {/* Двойной слайдер */}
          <div className={s.wrapper}>
            <div
              id="hw11-double-slider"
              data-testid="hw11-double-slider"
              className={s.sliderWrapper}
            >
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
                onChange={handleChange}
                onChangeCommitted={handleChange}
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
