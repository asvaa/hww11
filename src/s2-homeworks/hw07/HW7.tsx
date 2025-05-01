import React, { useState } from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import s from "./HW7.module.css";

/*
 * 1 - в файле SuperSelect.tsx дописать логику функции onChangeCallback
 * 2 - в файле SuperRadio.tsx дописать логику функции onChangeCallback
 * 3 - в файле SuperRadio.tsx дописать name, checked, value (узнать для чего в радио name)
 * 4 - сделать стили в соответствии с дизайном
 * */

const arr = [
  { id: 0, value: "Pre-junior" },
  { id: 1, value: "Junior" },
  { id: 2, value: "Junior +" },
];

const HW7 = () => {
  const [value, setValue] = useState<number | string>(1);

  const onChangeOption = (option: { id: number | string; value: string }) => {
    setValue(option.id);
  };

  return (
    <div id="hw7">
      <h2>Hometask № 7</h2>

      <div className={s.container}>
        <div>
          <SuperSelect
            id="hw7-super-select"
            options={arr}
            value={value}
            onChangeOption={onChangeOption}
          />
        </div>
        <div>
          <SuperRadio
            id="hw7-super-radio"
            name="hw7-radio"
            options={arr}
            value={value}
            onChangeOption={onChangeOption}
          />
        </div>
      </div>
    </div>
  );
};

export default HW7;
