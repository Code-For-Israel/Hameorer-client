import {Text, TextInput, View} from 'react-native';
import {styles} from './PagesStyles';

export function PageTop(setText, text, subjectTitle, subjectDate, subtitleText, explainText) {
    return (
        <>
            <View style={{width: '100%'}}>
                <View style={[styles.TextContainerFull, {marginTop: 20, justifyContent: 'center'}]}>
                    <Text style={styles.TextSubtitle}>{subjectTitle}</Text>
                </View>
                <View style={[styles.TextContainerFull, {justifyContent: 'center'}]}>
                    <Text style={styles.TextOne}>שנת האירוע: {subjectDate}</Text>
                </View>
            </View>
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
        </>
    );
}
