import React from 'react'
import Slider, { SliderProps } from '@mui/material/Slider'

const SuperRange: React.FC<SliderProps> = ({ sx, ...props }) => {
    return (
        <Slider
            sx={{
                width: 300,
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                    backgroundColor: '#fff',
                    border: '2px solid currentColor',
                    '&:focus, &:hover, &.Mui-active': {
                        boxShadow: '0 0 0 8px rgba(0, 204, 34, 0.16)',
                    },
                },
                '& .MuiSlider-rail': {
                    opacity: 0.5,
                    backgroundColor: '#bfbfbf',
                },
                ...sx,
            }}
            {...props}
        />
    )
}

export default SuperRange