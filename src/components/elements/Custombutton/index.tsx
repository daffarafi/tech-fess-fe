import React from 'react'
import { CustomButtonProps } from './interface'

export const Custombutton: React.FC<CustomButtonProps> = ({
    variant = 'primary',
    fullWidth = false,
    disabled = false,
    onClick,
    children,
}) => {
    const getButtonStyleByVariant = () => {
        let style = 'block rounded-full py-1 px-3 '

        switch (variant) {
            case 'primary':
                style += 'bg-white text-black '
                break
            case 'secondary':
                style += 'bg-black text-white '
                break
            case 'tertiary':
                style += 'border border-secondary bg-transparent text-white '
        }

        style += fullWidth ? 'w-full ' : 'w-min '

        return style
    }

    return (
        <button
            className={getButtonStyleByVariant()}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
