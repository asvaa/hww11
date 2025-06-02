import React, { useEffect, useState } from "react";
import s from "./HW11.module.css";
import s2 from "../../s1-main/App.module.css";
import { restoreState } from "../hw06/localStorage/localStorage";
import SuperRange from "./common/c7-SuperRange/SuperRange";

function HW11() {
  const [valueSingle, setValueSingle] = useState<number>(
    restoreState("hw11-value1", 50)
  );
  const [valueDouble, setValueDouble] = useState<[number, number]>(
    restoreState("hw11-value2", [50, 80])
  );

  useEffect(() => {
    if (process.env.NODE_ENV === "test") {
      localStorage.removeItem("hw11-value1");
      localStorage.removeItem("hw11-value2");
      setValueSingle(50);
      setValueDouble([50, 80]);
    }
  }, []);

  // НЕ синхронизируем через useEffect

  // Одиночный слайдер: двигает и себя, и первый маркер double
  const changeSingle = (
    _e: Event | React.SyntheticEvent,
    val: number | number[]
  ) => {
    if (typeof val === "number") {
      setValueSingle(val);
      setValueDouble(([_, right]) => [val, right]);
    }
  };

  // Двойной слайдер: двигает и double, и одиночный слайдер
  const changeDouble = (
    _e: Event | React.SyntheticEvent,
    val: number | number[]
  ) => {
    if (Array.isArray(val)) {
      setValueDouble([val[0], val[1]]);
      setValueSingle(val[0]);
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
              {valueSingle}
            </span>
            <SuperRange
              id="hw11-single-slider"
              value={valueSingle}
              onChange={changeSingle}
              onChangeCommitted={changeSingle}
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
              {valueDouble[0]}
            </span>
            <SuperRange
              id="hw11-double-slider"
              value={valueDouble}
              onChange={changeDouble}
              onChangeCommitted={changeDouble}
              min={0}
              max={100}
              step={1}
              // убери minDistance, если TS не позволяет!
            />
            <span id="hw11-value-2" data-testid="value2" className={s.number}>
              {valueDouble[1]}
            </span>
          </div>

          {/* Кнопка перемещения правого маркера влево */}
          <button
            data-testid="move-button"
            id="move-double-slider"
            onClick={() => {
              setValueDouble(([left, right]) => [
                left,
                Math.max(left + 1, right - 1),
              ]);
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
