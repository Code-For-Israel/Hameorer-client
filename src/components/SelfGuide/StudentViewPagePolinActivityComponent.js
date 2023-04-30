import {Text, TextInput, View} from 'react-native';
import {styles} from '../../screens/SheetScreens/Students/SelfGuide/PagesStyles';

export function StudentViewPagePolinActivityComponent(
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
                    placeholder="הסבירו על הנושא"
                    direction="rtl"
                    multiline={true}
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                />
            </View>
            <View style={[styles.TextContainer, {}]}>
                <Text style={styles.TextSubtitle}>הערות מדריך</Text>
            </View>
            <View style={styles.TextInputContainer}>
                <TextInput
                    placeholder="אין הערות"
                    direction="rtl"
                    multiline={true}
                    style={styles.inputT}
                    value={adminText}
                />
            </View>
        </>
    );
}
