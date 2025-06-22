import React, { useState } from "react";
import s from "./HW11.module.css";
import s2 from "../../s1-main/App.module.css";
import SuperRange from "./common/c7-SuperRange/SuperRange";

function HW11() {
  // Начальные значения для прохождения тестов
  const [value1, setValue1] = useState(50); // одиночный и левый двойной
  const [value2, setValue2] = useState(80); // правый двойной

  // Обработчик для одиночного слайдера
  const handleSingleChange = (_: Event, value: number | number[]) => {
    if (!Array.isArray(value)) {
      setValue1(value);
    }
  };

  // Обработчик для двойного слайдера
  const handleDoubleChange = (_: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      setValue1(value[0]);
      setValue2(value[1]);
    }
  };

  return (
    <div id={"hw11"}>
      <div className={s2.hwTitle}>Homework №11</div>
      <div className={s2.hw}>
        <div className={s.container}>
          {/* Одиночный слайдер */}
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

          {/* Двойной слайдер */}
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
