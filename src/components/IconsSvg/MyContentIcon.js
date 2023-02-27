import Svg, { Path } from 'react-native-svg';

const MyContentIcon = ({ color, size }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4.19922 3.25V20.75C4.19922 21.0152 4.30458 21.2696 4.49211 21.4571C4.67965 21.6446 4.934 21.75 5.19922 21.75H6.36422V2.25H5.19922C4.934 2.25 4.67965 2.35536 4.49211 2.54289C4.30458 2.73043 4.19922 2.98478 4.19922 3.25V3.25ZM6.36422 2.25V21.75H18.7992C19.0644 21.75 19.3188 21.6446 19.5063 21.4571C19.6939 21.2696 19.7992 21.0152 19.7992 20.75V3.25C19.7992 2.98478 19.6939 2.73043 19.5063 2.54289C19.3188 2.35536 19.0644 2.25 18.7992 2.25H6.36422Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.1328 5.82812H16.0308V8.79862H10.1328V5.82812Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default MyContentIcon;
