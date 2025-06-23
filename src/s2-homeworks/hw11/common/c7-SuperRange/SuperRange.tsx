import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
  <Slider
  sx={{
    color: '#00FF00', // зелёный цвет активной части (можно использовать твой цвет)
    height: 4,
    '& .MuiSlider-thumb': {
      height: 18,
      width: 18,
      backgroundColor: '#fff',
      border: '2px solid #00FF00', // зелёная обводка ползунка
      boxShadow: 'none',
      '&:hover, &.Mui-focusVisible, &.Mui-active': {
        boxShadow: '0 0 0 6px rgba(0,255,0,0.16)',
      },
    },
    '& .MuiSlider-rail': {
      color: '#C4C4C4', // неактивная часть (серенькая)
      opacity: 1,
    },
    '& .MuiSlider-track': {
      color: '#00FF00', // активная часть (зелёная)
    },
  }}
  {...props}
/>

  );
};

export default SuperRange;
