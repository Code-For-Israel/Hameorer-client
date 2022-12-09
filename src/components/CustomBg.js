import { View, Platform } from 'react-native';

export default function CustomBg() {
  const heightPlatform = () => {
    if (Platform.OS === 'ios') {
      return 93;
    }
    else if (Platform.OS === 'android') {
      return 84;
    }
    return 65;
  };
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        // height: heightPlatform(),
      }}>
      <View
      style={{
        backgroundColor: '#072F5F',
        height: heightPlatform(),
        borderBottomLeftRadius: 40,
      }}></View>
      </View>
  );
}
