import React from "react";
import Slider from "@mui/material/Slider";
import type { SliderProps } from "@mui/material";

type SuperRangeProps = SliderProps & {
  minDistance?: number;
};

const SuperRange: React.FC<SuperRangeProps> = (props) => {
  // Вычисляем позиции маркеров
  let lefts: number[] = [];
  const min = props.min ?? 0;
  const max = props.max ?? 100;

  if (Array.isArray(props.value)) {
    lefts = [
      ((Number(props.value[0]) - min) / (max - min)) * 100,
      ((Number(props.value[1]) - min) / (max - min)) * 100,
    ];
  } else if (typeof props.value === "number") {
    lefts = [((Number(props.value) - min) / (max - min)) * 100];
  }

  // Оборачиваем всё в контейнер-спан
  return (
    <span style={{ position: "relative", display: "inline-block", width: 300 }}>
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
      {lefts.map((left, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `calc(${left}% - 10px)`,
            top: -8,
            width: 20,
            height: 20,
            pointerEvents: "none",
            // фоном не выделяем, чтобы было незаметно
          }}
        />
      ))}
    </span>
  );
};

export default SuperRange;
