import React from 'react'
import { IconProps } from './interface'

export const Flag: React.FC<IconProps> = ({
    fill = 'fill-current',
    stroke,
    className,
    size,
}) => {
    // TODO: Place svg's elements here and strip out sizing, fill, and stroke attribute then place className={`${size} ${fill} ${stroke} ${className}`} in the <svg> tag
    return (
        <svg
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${size}`}
        >
            <path
                d="M1 10V0H5.8L6.01333 1.17647H9V7.05882H5.26667L5.05333 5.88235H2.06667V10H1Z"
                className={fill}
            />
        </svg>
    )
}
