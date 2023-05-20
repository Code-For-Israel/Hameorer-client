import React from 'react';
import {Path, Svg} from 'react-native-svg';

const AdminWatchTaskIcon = ({color, size}) => {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 448 512"
            fill="grey"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};
export default AdminWatchTaskIcon;
