import {Text, TextInput, View} from 'react-native';
import {styles} from '../../screens/SheetScreens/Students/SelfGuide/PagesStyles';

export function StudentViewPagePolinActivityYoutubeComponent(
    setText,
    text,
    subtitleText,
    explainText,
    adminText,
) {
    return (
        <>
            <View style={[styles.TextContainer, {marginTop: 20}]}>
                <Text style={styles.TextSubtitle}>{subtitleText}</Text>
            </View>
            <View style={styles.TextContainer}>
                <Text style={styles.textThree}>{explainText}</Text>
            </View>
            <View style={styles.TextInputContainer}>
                <TextInput
                    direction="rtl"
                    style={{
                        height: 44,
                        padding: 10,
                        backgroundColor: '#f5f5f5',
                        borderRadius: 10,
                        marginBottom: 30,
                        textAlign: 'right',
                        textAlignVertical: 'top',
                    }}
                    onChangeText={setText}
                    value={text}
                />
            </View>
            <View style={[styles.TextContainer, {}]}>
                <Text style={styles.TextSubtitle}>הערות מדריך</Text>
            </View>
            <View style={styles.TextInputContainer}>
                <Text
                    placeholder="אין הערות"
                    direction="rtl"
                    style={{
                        height: 44,
                        padding: 10,
                        backgroundColor: '#fffff',
                        borderRadius: 10,
                        marginBottom: 30,
                        textAlign: 'right',
                        textAlignVertical: 'top',
                    }}
                >{adminText}</Text>
            </View>
        </>
    );
}
