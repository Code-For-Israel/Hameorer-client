import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {View} from 'react-native';

const ThreeDotCircleIcon = () => {
    return (
        <View style={{padding: 4}}>
            <Svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M5.99984 0.666687C2.77984 0.666687 0.166504 3.28002 0.166504 6.50002C0.166504 9.72002 2.77984 12.3334 5.99984 12.3334C9.21984 12.3334 11.8332 9.72002 11.8332 6.50002C11.8332 3.28002 9.21984 0.666687 5.99984 0.666687ZM3.08317 7.37502C2.599 7.37502 2.20817 6.98419 2.20817 6.50002C2.20817 6.01585 2.599 5.62502 3.08317 5.62502C3.56734 5.62502 3.95817 6.01585 3.95817 6.50002C3.95817 6.98419 3.56734 7.37502 3.08317 7.37502ZM5.99984 7.37502C5.51567 7.37502 5.12484 6.98419 5.12484 6.50002C5.12484 6.01585 5.51567 5.62502 5.99984 5.62502C6.484 5.62502 6.87484 6.01585 6.87484 6.50002C6.87484 6.98419 6.484 7.37502 5.99984 7.37502ZM8.9165 7.37502C8.43234 7.37502 8.0415 6.98419 8.0415 6.50002C8.0415 6.01585 8.43234 5.62502 8.9165 5.62502C9.40067 5.62502 9.7915 6.01585 9.7915 6.50002C9.7915 6.98419 9.40067 7.37502 8.9165 7.37502Z"
                    fill="black"
                />
            </Svg>
        </View>
    );
};

export default ThreeDotCircleIcon;
