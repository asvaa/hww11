import React, { useState } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";

function HW11() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);

  const handleSingleChange = (_: Event, v: number | number[]) => {
    if (typeof v === "number") setValue1(v);
  };

  const handleDoubleChange = (_: Event, v: number | number[]) => {
    if (Array.isArray(v)) {
      setValue1(v[0]);
      setValue2(v[1]);
    }
  };

  return (
    <div>
      <div>
        <span id="hw11-value">{value1}</span>
        <SuperRange
          id="hw11-single-slider"
          value={value1}
          min={0}
          max={100}
          onChange={handleSingleChange}
        />
      </div>
      <div>
        <span id="hw11-value-1">{value1}</span>
        <SuperRange
          id="hw11-double-slider"
          value={[value1, value2]}
          min={0}
          max={100}
          onChange={handleDoubleChange}
        />
        <span id="hw11-value-2">{value2}</span>
      </div>
    </div>
  );
}

export default HW11;
