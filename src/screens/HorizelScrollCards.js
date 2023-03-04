import {ScrollView, StyleSheet, View} from 'react-native';
import GuideCard from '../components/GuideCard';

const HorizonteScrollCards = ({list}) => {
    return (
        <ScrollView horizontal={true}>
            {
                <>
                    <View style={stylesIn.HeadSection}>
                        {list.map((card, key) => {
                            return (
                                <GuideCard
                                    key={key}
                                    subject={card.subject}
                                    country={card.location}
                                    studentName={card.fullName}
                                    yearDeath={card.dateDeath}
                                    yearBorn={card.birthDate}
                                    image={card?.image}
                                    onPress={() => console.log('ok')}
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
        padding: 5,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'space-between',
    },
});
