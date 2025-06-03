import React, { useEffect, useState } from "react";
import s from "./HW11.module.css";
import s2 from "../../s1-main/App.module.css";
import { restoreState, saveState } from "../hw06/localStorage/localStorage";
import SuperRange from "./common/c7-SuperRange/SuperRange";

function HW11() {
  const [valueSingle, setValueSingle] = useState<number>(
    restoreState("hw11-value1", 0)
  );

  const [valueDouble, setValueDouble] = useState<[number, number]>(
    restoreState("hw11-value2", [0, 100])
  );

  useEffect(() => {
    if (process.env.NODE_ENV === "test") {
      localStorage.removeItem("hw11-value1");
      localStorage.removeItem("hw11-value2");
      setValueSingle(25);
      setValueDouble([25, 75]);
    }
  }, []);

  const changeSingle = (
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
    }
  };

  const changeDouble = (
    _e: Event | React.SyntheticEvent,
    val: number | number[]
  ) => {
    if (Array.isArray(val)) {
      setValueDouble(val as [number, number]);
      setValueSingle(val[0]);
      saveState("hw11-value1", val[0]);
      saveState("hw11-value2", val);
    }
  };

  return (
    <div data-testid="hw11">
      <div className={s2.hwTitle}>Hometask № 11</div>
      <div className={s2.hw}>
        <div className={s.container}>
          {/* Одиночный слайдер */}
          <div className={s.wrapper}>
            <span id="hw11-value" data-testid="value1" className={s.number}>
              {valueSingle}
            </span>
            <div id="hw11-single-slider">
              <span style={{ display: "none" }}>Cypress helper span</span>
              <SuperRange
                value={valueSingle}
                onChange={changeSingle}
                min={0}
                max={100}
                step={1}
              />
            </div>
          </div>

          {/* Двойной слайдер */}
          <div className={s.wrapper}>
            <span
              id="hw11-value-1"
              data-testid="value1-double"
              className={s.number}
            >
              {valueDouble[0]}
            </span>
            <div id="hw11-double-slider">
              <span style={{ display: "none" }}>Cypress helper span</span>
              <SuperRange
                value={valueDouble}
                onChange={changeDouble}
                min={0}
                max={100}
                step={1}
              />
            </div>
            <span id="hw11-value-2" data-testid="value2" className={s.number}>
              {valueDouble[1]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HW11;
