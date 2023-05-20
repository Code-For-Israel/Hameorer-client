import React from 'react';
import {Path, Svg} from 'react-native-svg';


const GroupSummaryIcon = ({color, size}) => {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 192 512"
            fill="grey"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};
export default GroupSummaryIcon;
