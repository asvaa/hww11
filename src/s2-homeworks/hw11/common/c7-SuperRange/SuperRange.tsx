import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = ({ id, ...props }) => {
    return (
        <Slider
            id={id}
            valueLabelDisplay="auto"
            disableSwap
            sx={{
                color: '#00FF66',
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
            {...props}
        />
    )
}

export default SuperRange
