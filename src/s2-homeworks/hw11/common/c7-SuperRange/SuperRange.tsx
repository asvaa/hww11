import React from "react";
import Slider, { SliderProps } from "@mui/material/Slider";

type SuperRangeProps = SliderProps & {
  id?: string;
};

const SuperRange: React.FC<SuperRangeProps> = ({ id, value, ...restProps }) => {
  return (
    <div data-testid={`${id}-container`}>
      <Slider
        {...restProps}
        value={value}
        componentsProps={{
          thumb: {
            "aria-label": "slider-thumb",
            ...({ "data-testid": `${id}-thumb` } as any),
          },
        }}
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
            transition: "0.3s ease",
            "&:hover, &.Mui-focusVisible, &.Mui-active": {
              boxShadow: "0 0 0 6px rgba(82, 175, 119, 0.2)",
            },
          },
          "& .MuiSlider-track": {
            border: "none",
            backgroundColor: "#52af77",
          },
          "& .MuiSlider-rail": {
            opacity: 1,
            backgroundColor: "#e0e0e0",
          },
        }}
      />
    </div>
  );
};

export default SuperRange;
