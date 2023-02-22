import { ScrollView, StyleSheet, View } from "react-native";
import ProfileCard from "../components/profileCard";

const HorizonteScrollCardsProfile = ({ list }) => {
  return (
    <ScrollView horizontal={true}>
      {
        <>
          <View style={stylesIn.HeadSection}>
            {list.map((card, key) => {
              return (
                <ProfileCard
                  key={key}
                  title={card.title}
                  status={card.status}
                  onPress={() => console.log("ok")}
                ></ProfileCard>
              );
            })}
          </View>
        </>
      }
    </ScrollView>
  );
};

export default HorizonteScrollCardsProfile;

const stylesIn = StyleSheet.create({
  HeadSection: {
    padding: 5,
    flexDirection: "row",
    alignSelf: "normal",
    justifyContent: "space-between",
  },
});
