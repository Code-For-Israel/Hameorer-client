import {ScrollView, StyleSheet, View} from 'react-native';
import ProfileCard from '../components/ProfileCard';
import {useNavigation} from '@react-navigation/native';

const HorizonteScrollCardsProfile = ({list}) => {
    const navigation = useNavigation();

    return (
        <ScrollView horizontal={true}>
            {list && list.length > 0 && (
                <>
                    <View style={stylesIn.HeadSection}>
                        {list.map((card, key) => {
                            const subject_type =
                                card?.subject_type === 'figure' ? 'דמות מונפשת' : 'לא ידוע';
                            const subject_name = card?.subject_name ?? '';
                            const story_status =
                                card?.story_status === 'pending'
                                    ? 'ממתין'
                                    : card?.story_status === 'review'
                                    ? 'נשלח למשוב'
                                    : card?.story_status === 'done'
                                    ? 'סיים'
                                    : 'לא התחיל';
                            return (
                                <ProfileCard
                                    key={key}
                                    title={subject_type}
                                    status={story_status}
                                    subject={subject_name}
                                    onPress={() => {
                                        navigation.navigate('ViewTask', card?._id);
                                    }}
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
