import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import MainRouter from "./src/screens/MainRouter";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="light" />
        <MainRouter />
      </NavigationContainer>
    </Provider>
  );
}
