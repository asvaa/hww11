import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        width: "90%",
        margin: "0 5%",
        color: "#00FF00",
        height: 4,
        "& .MuiSlider-thumb": {
          height: 20,
          width: 20,
          backgroundColor: "#fff",
          border: "2px solid currentColor",
          "&:hover": {
            boxShadow: "0 0 0 8px rgba(0, 255, 0, 0.16)",
          },
          "&.Mui-active": {
            boxShadow: "0 0 0 14px rgba(0, 255, 0, 0.16)",
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
