import React from 'react'
import { IconProps } from './interface'

export const Camera: React.FC<IconProps> = ({
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
            className={size}
        >
            <g clipPath="url(#clip0_112_2)">
                <path
                    d="M7.38095 4.63336C8.07557 4.63336 8.74173 4.91607 9.2329 5.41929C9.72407 5.92251 10 6.60502 10 7.31668C10 8.02834 9.72407 8.71085 9.2329 9.21407C8.74173 9.71729 8.07557 10 7.38095 10C6.68634 10 6.02017 9.71729 5.52901 9.21407C5.03784 8.71085 4.7619 8.02834 4.7619 7.31668C4.7619 6.60502 5.03784 5.92251 5.52901 5.41929C6.02017 4.91607 6.68634 4.63336 7.38095 4.63336ZM7.38095 5.60911L7.3381 5.61302C7.29052 5.62192 7.24672 5.64546 7.21253 5.68049C7.17833 5.71553 7.15536 5.7604 7.14667 5.80914L7.14286 5.85305V7.07274H5.95143L5.90857 7.07713C5.861 7.08604 5.8172 7.10957 5.783 7.14461C5.74881 7.17964 5.72583 7.22452 5.71714 7.27326L5.71333 7.31717L5.71714 7.36108C5.72583 7.40982 5.74881 7.45469 5.783 7.48973C5.8172 7.52476 5.861 7.5483 5.90857 7.5572L5.95143 7.56111H7.14286V8.78226L7.14667 8.82617C7.15536 8.87491 7.17833 8.91978 7.21253 8.95482C7.24672 8.98986 7.29052 9.01339 7.3381 9.0223L7.38095 9.0262L7.42381 9.0223C7.47138 9.01339 7.51518 8.98986 7.54938 8.95482C7.58357 8.91978 7.60655 8.87491 7.61524 8.82617L7.61905 8.78226V7.56062H8.81143L8.85429 7.5572C8.90186 7.5483 8.94566 7.52476 8.97985 7.48973C9.01405 7.45469 9.03702 7.40982 9.04571 7.36108L9.04952 7.31717L9.04571 7.27326C9.03699 7.22445 9.01395 7.17953 8.97966 7.14449C8.94537 7.10944 8.90147 7.08595 8.85381 7.07713L8.81095 7.07323H7.61905V5.85354L7.61524 5.80963C7.60663 5.7608 7.5837 5.71582 7.5495 5.68069C7.51529 5.64556 7.47145 5.62195 7.42381 5.61302L7.38095 5.60911ZM5.67857 0.000487841C5.86526 0.000472504 6.04871 0.0504342 6.21075 0.145423C6.37279 0.240411 6.50779 0.377129 6.60238 0.542031L6.99 1.21871H7.97619C8.38656 1.21871 8.78013 1.3857 9.07035 1.68295C9.36057 1.98021 9.52368 2.38338 9.52381 2.80382V5.02854C9.3114 4.8196 9.07105 4.64268 8.81 4.5031L8.80952 2.80382C8.80952 2.57739 8.72173 2.36022 8.56545 2.20011C8.40917 2.03999 8.1972 1.95004 7.97619 1.95004H6.78571C6.72346 1.95007 6.66227 1.93343 6.60823 1.90177C6.55419 1.87011 6.50916 1.82452 6.47762 1.76953L5.98619 0.912329C5.95469 0.857409 5.90974 0.811867 5.85579 0.780207C5.80183 0.748547 5.74075 0.731866 5.67857 0.731814H3.86762C3.81551 0.731858 3.76404 0.743585 3.71682 0.766172C3.6696 0.788759 3.62778 0.82166 3.59429 0.862565L3.56333 0.906474L3.04286 1.77538C3.01094 1.82872 2.96621 1.87278 2.91294 1.90336C2.85967 1.93393 2.79963 1.95001 2.73857 1.95004H1.5481C1.43862 1.94998 1.33021 1.97201 1.22905 2.01489C1.12789 2.05777 1.03596 2.12065 0.958532 2.19994C0.881099 2.27922 0.819674 2.37337 0.777765 2.47698C0.735856 2.5806 0.714286 2.69166 0.714286 2.80382V7.43865C0.714286 7.90994 1.08762 8.29243 1.54762 8.29243H4.43476C4.51714 8.55247 4.63095 8.79836 4.77238 9.02425H1.54762C1.13716 9.02425 0.743522 8.85719 0.453287 8.55984C0.163052 8.26248 0 7.85918 0 7.43865V2.80382C0 2.3833 0.163052 1.98 0.453287 1.68264C0.743522 1.38528 1.13716 1.21823 1.54762 1.21823H2.5381L2.95476 0.523491C3.05057 0.363575 3.18478 0.231488 3.34459 0.139842C3.5044 0.0481959 3.68448 4.96326e-05 3.86762 0L5.67857 0.000487841ZM4.7619 2.68186C5.21493 2.68182 5.65632 2.82883 6.02274 3.10177C6.38915 3.37472 6.66176 3.75957 6.80143 4.2011C6.56333 4.24745 6.33476 4.32161 6.11905 4.42016C6.01352 4.08887 5.79604 3.80704 5.50575 3.62541C5.21546 3.44378 4.87143 3.37427 4.53556 3.42938C4.1997 3.4845 3.89407 3.66062 3.67368 3.92606C3.45328 4.1915 3.33259 4.52881 3.33333 4.8773C3.33333 5.57496 3.80952 6.15797 4.44667 6.30531C4.37045 6.53719 4.32091 6.77738 4.29905 7.02103C3.78471 6.90291 3.33089 6.59475 3.02432 6.15545C2.71775 5.71615 2.57993 5.17651 2.6372 4.63967C2.69447 4.10283 2.94281 3.60644 3.33477 3.24536C3.72673 2.88428 4.2348 2.68384 4.7619 2.68234V2.68186Z"
                    className={fill}
                />
            </g>
            <defs>
                <clipPath id="clip0_112_2">
                    <rect width="10" height="10" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}