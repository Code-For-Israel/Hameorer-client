import { useState } from "react";

import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { TimelineScreen } from "./src/screens/TimelineScreen";
import { PlusScreen } from "./src/screens/PlusScreen";
import { ContentScreen } from "./src/screens/ContentScreen";
import { MapScreen } from "./src/screens/MapScreen";
import { BottomSheet } from "./src/components/BottomSheet";
import { BottomMenuContent } from "./src/components/BottomMenuContent";
import TabButton from "./src/components/TabButton";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onPlusClick = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "More") {
                return <TabButton onPress={onPlusClick} />;
              }
              let iconName;
              switch (route.name) {
                case "Profile":
                  iconName = focused ? "account" : "account-outline";
                  break;
                case "Timeline":
                  iconName = focused
                    ? "timeline-clock"
                    : "timeline-clock-outline";
                  break;
                // case "More":
                //   iconName = focused ? "plus-box" : "plus";
                //   break;
                case "Content":
                  iconName = focused
                    ? "file-document"
                    : "file-document-outline";
                  break;
                case "Map":
                  iconName = focused ? "map" : "map-outline";
                  break;

                default:
                  break;
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            },
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: "פרופיל",
              headerTitle: "אפשר לשים כל מיני כותרות",
            }}
          />
          <Tab.Screen
            name="Timeline"
            component={TimelineScreen}
            options={{ tabBarLabel: "ציר זמן" }}
          />
          <Tab.Screen
            name="More"
            component={PlusScreen}
            options={{
              headerShown: false,
              tabBarLabel: ``,
              tabBarButton: (props) => (
                <TouchableOpacity {...props} onPress={onPlusClick} />
              ),
            }}
          />
          <Tab.Screen
            name="Content"
            component={ContentScreen}
            options={{ tabBarLabel: "תוכן", headerShown: false }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{ tabBarLabel: "מפה" }}
          />
        </Tab.Navigator>
        <BottomSheet isVisible={isModalVisible} onClose={onModalClose}>
          <BottomMenuContent onClose={onModalClose} />
        </BottomSheet>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
