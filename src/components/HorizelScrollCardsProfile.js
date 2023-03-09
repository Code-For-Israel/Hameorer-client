import {ScrollView, StyleSheet, View} from 'react-native';
import ProfileCard from '../components/ProfileCard';

const HorizonteScrollCardsProfile = ({list}) => {
    return (
        <ScrollView horizontal={true}>
            {list && list.length > 0 && (
                <>
                    <View style={stylesIn.HeadSection}>
                        {list.map((card, key) => {
                            const subject_type = (card?.subject_type==="figure") ? "דמות מונפשת" : "לא ידוע"
                            const story_status = (card?.story_status==="pending") ? "ממתין"
                                : (card?.story_status==="review") ? ("נשלח למשוב")
                                    : (card?.story_status==="done") ? ("סיים") : "לא התחיל"
                            return (
                                <ProfileCard
                                    key={key}
                                    title={subject_type}
                                    status={story_status}
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
