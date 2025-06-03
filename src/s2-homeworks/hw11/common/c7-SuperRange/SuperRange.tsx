import React from "react";
import Slider, { SliderProps } from "@mui/material/Slider";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      {...props}
      data-testid={props.id || "super-range"}
      sx={{
        width: 300,
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
          "&[data-testid]::before": {
            content: '""',
          },
        },
        "& .MuiSlider-track": {
          border: "none",
          backgroundColor: "#52af77",
        },
        "& .MuiSlider-rail": {
          opacity: 1,
          backgroundColor: "#bfbfbf",
        },
      }}
      componentsProps={{
        thumb: {
          "data-testid": props.id ? `${props.id}-thumb` : "super-range-thumb",
        } as React.HTMLAttributes<HTMLSpanElement>,
      }}
    />
  );
};

export default SuperRange;
