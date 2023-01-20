import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import UseFetchGet from "../hooks/ApiCalls/useFetchGet";
import { useState } from "react";
import getSiteUrl from "../utils/getSiteUrl";
import BottomSheet from "../components/BottomSheet";
import BottomMenuContent from "../components/BottomMenuContent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { UploadExcelFile } from "./UploadExcelFile/UploadExcelFile";

export default function ProfileScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePress = () => {
    setIsModalVisible(true);
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const { data, loading } = UseFetchGet(
    getSiteUrl() + "v1/authentication/user/"
  );

  const [parsedData, setParsedData] = useState(null);

  // enable this for getting the login
  // const x = getTokenAccess()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={{
           position: "absolute", bottom: 20, right: 20,
        }}>
           <View
               style={{
                   justifyContent: "center",
                   alignItems: "center",
                   width: 50,
                   height: 50,
                   borderRadius: 50,
                   backgroundColor: "#FCBF49",
                   color: "#fff",
                   shadowColor: "#000",
                   shadowOffset: {
                       width: 0, height: 2
                   },
                   shadowOpacity: 0.25,
                   shadowRadius: 3.84,
                   elevation: 5,
               }}
           >
               <MaterialCommunityIcons name="plus" size={25} color={"#fff"}/>
           </View>
        </TouchableOpacity> 

      <Text>Profile Screen</Text>

      <UploadExcelFile parsedData={parsedData} setParsedData={setParsedData} />

      <Text>
        {loading ? "Loading data ........." : "Data Loaded!"}
      </Text>

      <Button
        title={"click to pull groups and console log them"}
        onPress={() => console.log(data)}
      />

      <BottomSheet isVisible={isModalVisible} onClose={onModalClose}>
        <BottomMenuContent onClose={onModalClose} />
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
