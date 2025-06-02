import React from "react";
import Slider from "@mui/material/Slider";
import type { SliderProps } from "@mui/material/Slider";

const SuperRange: React.FC<SliderProps> = ({
  id,
  "aria-label": ariaLabel = "SuperRange",
  onChange,
  onChangeCommitted,
  ...rest
}) => {
  const isSingle = id === "hw11-single-slider";

  return (
    <Slider
      {...rest}
      id={id}
      aria-label={ariaLabel}
      value={rest.value}
      onChange={onChange}
      onChangeCommitted={onChangeCommitted}
      componentsProps={{
        thumb: {
          className: isSingle ? "thumb-single" : "thumb-double",
        },
      }}
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
