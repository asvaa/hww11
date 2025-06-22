import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: '#1976d2', // основной цвет ползунка (пример)
                height: 6,
                '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                    backgroundColor: '#fff',
                    border: '2px solid #1976d2',
                    boxShadow: '0 0 0 4px rgba(25, 118, 210, 0.16)',
                    '&:focus, &:hover, &.Mui-active': {
                        boxShadow: '0 0 0 8px rgba(25, 118, 210, 0.24)',
                    },
                },
                '& .MuiSlider-rail': {
                    opacity: 0.28,
                    backgroundColor: '#bfc2c7',
                },
                borderRadius: 3,
            }}
            {...props} // обязательно на последнем месте!
        />
    )
}

export default SuperRange
