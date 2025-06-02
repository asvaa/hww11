import React from "react";
import Slider from "@mui/material/Slider";
import type { SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = ({
  id,
  value,
  onChange,
  onChangeCommitted,
  ...rest
}) => {
  const isSingle = id === "hw11-single-slider";

  return (
    <Slider
      id={id}
      value={value}
      onChange={onChange}
      onChangeCommitted={onChangeCommitted}
      data-testid={id || "super-range"} // ✅ для Cypress
      sx={{
        width: 300, // ✅ Фиксированная ширина (обязательно!)
        height: 4,
        color: "#52af77",
        "& .MuiSlider-thumb": {
          height: 20,
          width: 20,
          backgroundColor: "#fff",
          border: "2px solid #52af77",
          boxShadow: "none",
          "&:hover, &.Mui-focusVisible, &.Mui-active": {
            boxShadow: "none",
          },
        },
        "& .MuiSlider-track": {
          border: "none",
          backgroundColor: "#52af77", // ✅ трек (зелёная линия)
        },
        "& .MuiSlider-rail": {
          opacity: 1,
          backgroundColor: "#bfbfbf",
        },
      }}
      {...rest}
    />
  );
};

export default SuperRange;
