import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {styles} from '../../../../styles/PagesStyle';
import {format} from 'date-fns';

export default function News({route}) {

    const notifications = route.params;

    return (<>
        <View style={{marginBottom: 20, paddingTop: 5}}>
            <Text style={stylesIn.h1} numberOfLines={1} adjustsFontSizeToFit>
                הודעות
            </Text>
        </View>
        <View style={{maxHeight: 500}}>
            <ScrollView style={stylesIn.container}>
                {notifications && notifications.map((note) => {
                    const date = (format(new Date(note.publish_date), 'dd/LL/yyyy'));
                    return (
                        <View key={note.id} style={{
                            marginRight: 20,
                            marginBottom: 20,
                            borderWidth: 1,
                            borderColor: '#1261A0',
                            borderBottomColor: '#1261A0'
                        }}>
                            <Text style={styles.textDirectionRTL}>מאת עמית - {date}</Text>
                            <Text style={stylesIn.notificationTitle}>{note.title}</Text>
                            <Text style={styles.textDirectionRTL}>{note.message}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    </>);
}

const stylesIn = StyleSheet.create({
    container: {
        flex: 1, position: 'relative',
    }, h1: {
        fontSize: 24,
        color: '#072F5F',
        marginBottom: 15,
        marginTop: 15,
        marginRight: 15,
        paddingTop: 10,
        textAlign: 'right',
        writingDirection: 'rtl',
    }, notificationTitle: {
        fontSize: 18,
        color: '#072F5F',
        marginBottom: 2,
        marginTop: 2,
        textAlign: 'right',
        writingDirection: 'rtl',
    }, image: {
        width: '100%', height: 150, alignSelf: 'center',
    },
});
