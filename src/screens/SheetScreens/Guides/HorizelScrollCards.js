import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, View } from 'react-native';
import GuideCard from '../../../components/GuideCard';

const HorizonteScrollCards = ({ list }) => {
  const navigation = useNavigation();

  return (
    <ScrollView horizontal={true} style={{ flexDirection: 'row-reverse' }}>
      {
        <>
          <View style={stylesIn.HeadSection}>
            {list &&
              list.length > 0 &&
              list.map((card, key) => {
                return (
                  <GuideCard
                    key={key}
                    subject={card?.subject}
                    country={card?.location}
                    studentName={card?.fullName}
                    yearDeath={card?.dateDeath}
                    yearBorn={card?.dateBirth}
                    onPress={() => {
                      navigation.navigate('בדיקה לעמוד חדש', card.story )
                      // console.log(card.story);
                    }}
                  ></GuideCard>
                );
              })}
          </View>
        </>
      }
    </ScrollView>
  );
};

export default HorizonteScrollCards;

const stylesIn = StyleSheet.create({
  HeadSection: {
    padding: 0,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
});
