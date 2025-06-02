import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = ({
  "aria-label": ariaLabel = "SuperRange",
  onChange,
  onChangeCommitted,
  ...rest
}) => {
  return (
    <Slider
      {...rest}
      aria-label={ariaLabel}
      data-testid={rest.id || "super-range"}
      value={rest.value}
      onChange={onChange}
      onChangeCommitted={onChangeCommitted}
      sx={{
        width: "100%",
        maxWidth: 375,
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
    />
  );
};

export default SuperRange;
