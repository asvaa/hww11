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

  // Сброс при тестировании
  useEffect(() => {
    if (process.env.NODE_ENV === "test") {
      localStorage.removeItem("hw11-value1");
      localStorage.removeItem("hw11-value2");
      setValueSingle(50);
      setValueDouble([50, 80]);
    }
  }, []);

  // Синхронизация одиночного слайдера с первым маркером двойного
  useEffect(() => {
    setValueSingle(valueDouble[0]);
  }, [valueDouble[0]]);

  const changeSingle = (
    _e: Event | React.SyntheticEvent,
    val: number | number[]
  ) => {
    if (typeof val === "number") setValueSingle(val);
  };

  const changeDouble = (
    _e: Event | React.SyntheticEvent,
    val: number | number[]
  ) => {
    if (Array.isArray(val)) setValueDouble([val[0], val[1]]);
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
              setValueDouble(([left, right]) => {
                const newRight = right > left + 1 ? right - 1 : right;
                return [left, newRight];
              });
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
