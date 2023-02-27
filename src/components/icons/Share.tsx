import React from 'react'
import { IconProps } from './interface'

export const Share: React.FC<IconProps> = ({
    fill = 'fill-current',
    stroke,
    className,
    size,
}) => {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={size}
        >
            <path
                d="M10 0L6.5 3.63636H9.125V11.8182H10.875V3.63636H13.5M15.25 20H4.75C4.28587 20 3.84075 19.8084 3.51256 19.4675C3.18437 19.1265 3 18.664 3 18.1818V7.27273C3 6.79052 3.18437 6.32805 3.51256 5.98708C3.84075 5.6461 4.28587 5.45455 4.75 5.45455H7.375V7.27273H4.75V18.1818H15.25V7.27273H12.625V5.45455H15.25C15.7141 5.45455 16.1592 5.6461 16.4874 5.98708C16.8156 6.32805 17 6.79052 17 7.27273V18.1818C17 18.664 16.8156 19.1265 16.4874 19.4675C16.1592 19.8084 15.7141 20 15.25 20Z"
                className={fill}
            />
        </svg>
    )
}
