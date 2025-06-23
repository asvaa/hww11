import React from "react";
import Slider, { SliderProps } from "@mui/material/Slider";

const SuperRange: React.FC<SliderProps> = ({ sx, ...props }) => {
  return (
    <Slider
      sx={{
        width: 300,
        color: "#00CC22",
        ...sx,
      }}
      {...props}
    />
  );
};

export default SuperRange;
