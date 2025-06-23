import Slider, {  SliderProps } from "@mui/material/Slider";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        color: "#00FF00",
        height: 4,
        "& .MuiSlider-thumb": {
          height: 18,
          width: 18,
          backgroundColor: "#fff",
          border: "2px solid #00FF00",
        },
        "& .MuiSlider-rail": {
          color: "#C4C4C4",
          opacity: 1,
        },
        "& .MuiSlider-track": {
          color: "#00FF00",
        },
      }}
      {...props}
    />
  );
};

export default SuperRange;
