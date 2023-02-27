import { ScrollView, StyleSheet, View } from 'react-native';
import ProfileCard from '../components/ProfileCard';

const HorizonteScrollCardsProfile = ({ list }) => {
  return (
    <ScrollView horizontal={true}>
      {list && list.length > 0 && (
        <>
          <View style={stylesIn.HeadSection}>
            {list.map((card, key) => {
              return (
                <ProfileCard
                  key={key}
                  title={card.subject_type}
                  status={card.story_status}
                  onPress={() => console.log('ok')}
                ></ProfileCard>
              );
            })}
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default HorizonteScrollCardsProfile;

const stylesIn = StyleSheet.create({
  HeadSection: {
    padding: 5,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
});
