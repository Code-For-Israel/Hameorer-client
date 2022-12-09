import { View, Platform, StyleSheet } from 'react-native';

export default function CustomBg() {
  return (
    <View style={{ backgroundColor: '#FFF' }}>
      <View style={styles.container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#072F5F',
    borderBottomLeftRadius: 40,
    ...Platform.select({
      android: {
        height: 84,
      },
      ios: {
        height: 93,
      },
      default: {
        // other platforms, web for example
        height: 65,
      },
    }),
  },
});
