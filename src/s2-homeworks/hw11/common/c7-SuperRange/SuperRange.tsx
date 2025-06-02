import React from "react";
import Slider from "@mui/material/Slider";
import type { SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps & { minDistance?: number }> = ({
  id,
  value,
  onChange,
  onChangeCommitted,
  minDistance,
  ...rest
}) => (
  <Slider
    id={id}
    value={value}
    onChange={onChange}
    onChangeCommitted={onChangeCommitted}
    data-testid={id || "super-range"}
    {...rest}
    {...((minDistance !== undefined ? { minDistance } : {}) as any)}
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
  />
);

export default SuperRange;
