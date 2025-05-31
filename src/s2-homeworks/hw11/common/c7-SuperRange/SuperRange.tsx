import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        width: 375, // 👈 ФИКС ширины — ключ к корректному `left`
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
        },
        "& .MuiSlider-rail": {
          opacity: 1,
          backgroundColor: "#bfbfbf",
        },
      }}
      {...props}
    />
  );
};

export default SuperRange;
