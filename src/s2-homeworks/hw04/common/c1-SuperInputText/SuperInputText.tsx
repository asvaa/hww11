import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    KeyboardEvent,
    ReactNode,
} from 'react'
import s from './SuperInputText.module.css'

type DefaultInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>

type SuperInputTextPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: ReactNode
    spanClassName?: string
}

const SuperInputText: React.FC<SuperInputTextPropsType> = ({
    onChange,
    onChangeText,
    onKeyDown,
    onEnter,
    error,
    className,
    spanClassName,
    id,
    ...restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e)
        onChangeText?.(e.currentTarget.value)
    }

    const onKeyDownCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyDown?.(e)
        if (onEnter && e.key === 'Enter') {
            onEnter()
        }
    }

    const finalInputClassName = [
        s.input,
        error ? s.errorInput : s.superInput,
        className,
    ].filter(Boolean).join(' ')

    const finalSpanClassName = [s.error, spanClassName].filter(Boolean).join(' ')

    return (
        <div className={s.inputWrapper}>
            <input
                id={id}
                type="text"
                onChange={onChangeCallback}
                onKeyDown={onKeyDownCallback}
                className={finalInputClassName}
                {...restProps}
            />
            {error && (
                <span
                    id={id ? `${id}-span` : undefined}
                    className={finalSpanClassName}
                >
                    {error}
                </span>
            )}
        </div>
    )
}

export default SuperInputText
