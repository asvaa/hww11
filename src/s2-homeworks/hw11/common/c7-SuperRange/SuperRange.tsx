import React from "react";
import Slider, { SliderProps } from "@mui/material/Slider";

const SuperRange: React.FC<SliderProps> = ({ sx, ...props }) => {
  return (
    <Slider
      sx={{
        width: 300,
        color: "#00CC22",
        "& .MuiSlider-thumb": {
          height: 24,
          width: 24,
          backgroundColor: "#fff",
          border: "2px solid currentColor",
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default SuperRange;
