import React from "react";
import Slider, { SliderProps } from "@mui/material/Slider";

const SuperRange: React.FC<SliderProps> = ({ value = [0, 100], ...props }) => {
  return (
    <Slider
      sx={{
        width: 300,
        color: "primary",
        margin: "20px 0",
      }}
      value={value}
      {...props}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
    />
  );
};

export default SuperRange;
