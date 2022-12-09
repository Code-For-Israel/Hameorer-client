import { View } from "react-native";

export default function CustomBg() {
  return (
    <View style={{ backgroundColor: "#FFF" }}>
      <View
        style={{
          backgroundColor: "#072F5F",
          height: 70,
          borderBottomLeftRadius: 55,
        }}
      />
    </View>
  );
}