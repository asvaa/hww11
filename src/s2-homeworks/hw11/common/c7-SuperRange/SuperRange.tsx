import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: '#00FF66', // основной цвет трека
                height: 4,
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '2px solid #00FF66',
                    boxShadow: '0 0 0 4px rgba(0,255,102,0.15)',
                },
                '& .MuiSlider-rail': {
                    opacity: 1,
                    backgroundColor: '#bfc2c7',
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#00FF66',
                },
            }}
            valueLabelDisplay="auto"
            disableSwap
            {...props} // пробрасываем все пропсы, включая value, onChange, min, max
        />
    )
}

export default SuperRange
