import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: 'red' | 'secondary' | 'default'
}

const SuperButton: React.FC<SuperButtonPropsType> = ({
    xType = 'default',
    className,
    disabled,
    ...restProps
}) => {
    const finalClassName = [
        s.button,
        disabled ? s.disabled : s[xType], 
        className
    ].filter(Boolean).join(' ')

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps}
        />
    )
}

export default SuperButton
