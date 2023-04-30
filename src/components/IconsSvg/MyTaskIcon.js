import React from 'react';
import {Path, Svg} from 'react-native-svg';

const MyTaskIcon = ({size, color}) => {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M4.99309 21.9571C4.80555 21.7696 4.7002 21.5152 4.7002 21.25V12.5V3.75C4.7002 3.48478 4.80555 3.23043 4.99309 3.04289C5.18063 2.85536 5.43498 2.75 5.7002 2.75H6.8652H19.3002C19.5654 2.75 19.8198 2.85536 20.0073 3.04289C20.1948 3.23043 20.3002 3.48478 20.3002 3.75V21.25C20.3002 21.5152 20.1948 21.7696 20.0073 21.9571C19.8198 22.1446 19.5654 22.25 19.3002 22.25H6.8652H5.7002C5.43498 22.25 5.18063 22.1446 4.99309 21.9571Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path d="M8.5 3V22" stroke={color} strokeWidth="2" />
            <Path
                d="M17.5 7.5H11.5"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M17.5 12.5H11.5"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M17.5 18.5H11.5"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};
export default MyTaskIcon;
