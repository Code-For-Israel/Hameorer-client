import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from "react-native-svg";

const PlayAudioIcon = () => {
    return (<View style={{padding: 4}}>
        <Svg width="108" height="24" viewBox="0 0 108 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M3.27875 17.5L6.36675 9.596H1.39075V8.62H7.59875V9.66L4.51075 17.5H3.27875ZM1.39075 9.596V6.028H2.54275V9.596H1.39075ZM9.57613 17.5V10.492L9.35213 8.62H10.5841L10.8081 10.492V17.5H9.57613ZM15.5543 17.5L15.4263 16.524C15.7889 16.4813 16.1303 16.4067 16.4503 16.3C16.7809 16.1827 17.0743 16.0013 17.3303 15.756C17.5863 15.5 17.7943 15.148 17.9543 14.7C18.1249 14.2413 18.2369 13.66 18.2903 12.956L18.5623 9.596H12.8023V8.62H19.8743L19.8263 9.5L19.5703 12.716C19.5276 13.5053 19.3996 14.1987 19.1863 14.796C18.9836 15.3827 18.7063 15.8733 18.3543 16.268C18.0129 16.6627 17.6023 16.9613 17.1223 17.164C16.6529 17.3667 16.1303 17.4787 15.5543 17.5ZM12.8343 20.7V12.956L13.0103 11.868H14.0663V12.94V20.7H12.8343ZM24.3706 17.724L24.2426 16.844C24.68 16.8013 25.016 16.7053 25.2506 16.556C25.496 16.396 25.6666 16.1827 25.7626 15.916C25.8586 15.6493 25.9066 15.3187 25.9066 14.924V8.62H29.8266C30.36 8.62 30.824 8.716 31.2186 8.908C31.624 9.1 31.9386 9.41467 32.1626 9.852C32.3973 10.2893 32.5146 10.8707 32.5146 11.596V17.5H31.2826V11.548C31.2826 10.8227 31.1226 10.316 30.8026 10.028C30.4933 9.74 30.0773 9.596 29.5546 9.596H27.1386V14.796C27.1386 15.4253 27.0426 15.948 26.8506 16.364C26.6586 16.7693 26.36 17.084 25.9546 17.308C25.5493 17.5213 25.0213 17.66 24.3706 17.724ZM37.4501 17.532L37.5781 16.556C38.4635 16.748 39.1781 16.7267 39.7221 16.492C40.2661 16.2573 40.6608 15.8253 40.9061 15.196C41.1621 14.5667 41.2795 13.756 41.2581 12.764C41.2475 11.9427 41.1355 11.2973 40.9221 10.828C40.7195 10.3587 40.4475 10.028 40.1061 9.836C39.7755 9.63333 39.3968 9.532 38.9701 9.532C38.5328 9.532 38.1648 9.628 37.8661 9.82C37.5781 10.0013 37.3488 10.2413 37.1781 10.54C37.0075 10.8387 36.8848 11.164 36.8101 11.516L36.4421 10.844C36.6341 10.0333 36.9808 9.44667 37.4821 9.084C37.9941 8.71067 38.5488 8.524 39.1461 8.524C39.6048 8.524 40.0261 8.59867 40.4101 8.748C40.8048 8.88667 41.1515 9.12133 41.4501 9.452C41.7488 9.78267 41.9835 10.22 42.1541 10.764C42.3355 11.308 42.4315 11.9747 42.4421 12.764C42.4741 13.9907 42.2981 14.9987 41.9141 15.788C41.5301 16.5773 40.9595 17.1267 40.2021 17.436C39.4555 17.7347 38.5381 17.7667 37.4501 17.532ZM34.4901 17.5L35.6741 11.276L34.4421 8.62H35.7221L36.8581 11.324L35.7221 17.5H34.4901ZM44.5136 14.14V12.876V10.492L44.2896 8.62H45.5216L45.7456 10.492V12.876L45.7296 13.884L44.5136 14.14ZM50.8758 17.5L50.2518 14.156V11.18C50.2518 10.6787 50.1931 10.3 50.0758 10.044C49.9584 9.77733 49.7024 9.61733 49.3078 9.564L48.2838 9.404L48.4598 8.444L49.8038 8.652C50.4331 8.748 50.8704 8.99333 51.1158 9.388C51.3718 9.78267 51.4998 10.348 51.4998 11.084V14.172L52.0598 17.5H50.8758ZM47.7078 17.724L47.2598 16.732C47.9958 16.4653 48.6144 16.1133 49.1158 15.676C49.6278 15.228 50.0438 14.6413 50.3638 13.916L50.7638 14.7C50.5611 15.2227 50.3158 15.6813 50.0278 16.076C49.7398 16.46 49.4038 16.7853 49.0198 17.052C48.6358 17.3187 48.1984 17.5427 47.7078 17.724ZM57.6769 17.5V11.468C57.6769 11.0733 57.7142 10.716 57.7889 10.396C57.8742 10.076 57.9862 9.80933 58.1249 9.596H53.6449V8.62H60.4929V9.596H59.3089C59.1489 9.86267 59.0422 10.172 58.9889 10.524C58.9462 10.8653 58.9249 11.18 58.9249 11.468V17.5H57.6769ZM65.8261 20.7V10.492L65.6021 8.62H66.8341L67.0581 10.492V20.7H65.8261ZM72.1883 17.5L71.5643 14.156V11.18C71.5643 10.6787 71.5056 10.3 71.3883 10.044C71.2709 9.77733 71.0149 9.61733 70.6203 9.564L69.5963 9.404L69.7723 8.444L71.1163 8.652C71.7456 8.748 72.1829 8.99333 72.4283 9.388C72.6843 9.78267 72.8123 10.348 72.8123 11.084V14.172L73.3723 17.5H72.1883ZM69.0203 17.724L68.5723 16.732C69.3083 16.4653 69.9269 16.1133 70.4283 15.676C70.9403 15.228 71.3563 14.6413 71.6763 13.916L72.0763 14.7C71.8736 15.2227 71.6283 15.6813 71.3403 16.076C71.0523 16.46 70.7163 16.7853 70.3323 17.052C69.9483 17.3187 69.5109 17.5427 69.0203 17.724ZM74.8774 17.5V16.524H77.6614V11.18C77.6614 10.6467 77.5494 10.2627 77.3254 10.028C77.112 9.78267 76.808 9.628 76.4134 9.564L75.3414 9.404L75.5174 8.444L76.9094 8.652C77.5494 8.748 78.04 9.00933 78.3814 9.436C78.7227 9.852 78.8934 10.428 78.8934 11.164V17.5H74.8774Z"
                fill="black"/>
            <Path d="M89 3L103 12L89 21V3Z" stroke="black" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </Svg>
    </View>);
};

export default PlayAudioIcon;


