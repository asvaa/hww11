import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        width: "100%",
        color: "#00FF00",
        height: 4,
        padding: "15px 0",
        "& .MuiSlider-thumb": {
          height: 20,
          width: 20,
          backgroundColor: "#fff",
          border: "2px solid currentColor",
          "&:hover, &.Mui-focusVisible": {
            boxShadow: "0 0 0 6px rgba(0, 255, 0, 0.16)",
          },
          "&.Mui-active": {
            boxShadow: "0 0 0 10px rgba(0, 255, 0, 0.16)",
          },
        },
        "& .MuiSlider-rail": {
          color: "#d8d8d8",
          opacity: 1,
          height: 4,
        },
        "& .MuiSlider-track": {
          color: "#00FF00",
          height: 4,
        },
      }}
      {...props}
    />
  );
};

export default SuperRange;
