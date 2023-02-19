import {SafeAreaView, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import PrevButton from "../../../../components/PrevButton";
import NextButton from "../../../../components/NextButton";
import {styles} from "./PagesStyle";

//placeholder
import TEMP_AddPhoto from "../../../../components/TEMP_AddPhoto";

const Page4 = ({navigation}) => {
    const [text, setText] = useState("");
    return (<SafeAreaView style={{flex: 1}}>
        <View style={styles.pageContainer}>
            <View style={styles.TextContainer}>
                <Text style={styles.textThree}>
                    *הוסף עד 5 תמונות *קבצי jpg,png (עד 2 מגה)
                </Text>
            </View>
            <TEMP_AddPhoto/>
            <View style={styles.TextContainer}>
                <Text style={styles.TextOne}>הוסף לינק ליו-טיוב</Text>
            </View>
            <View style={styles.TextInputContainer}>
                <TextInput
                    placeholder="מקום לטקסט"
                    direction="rtl"
                    multiline={true}
                    style={styles.input2}
                    onChangeText={setText}
                    value={text}
                />
            </View>
            <View style={styles.ButtonContainer}>
                <View style={{width: 130}}>
                    <NextButton
                        title="שלח למדריך"
                        onPress={() => {
                            console.log("the text is:", text);
                        }}
                    />
                </View>
                <View>
                    <Text>שלב 5 מתוך 5</Text>
                </View>
                <View style={{width: 100}}>
                    <PrevButton
                        title="הקודם"
                        onPress={() => {
                            navigation.navigate("Page4");
                        }}
                    />
                </View>
            </View>
        </View>
    </SafeAreaView>);
};
export default Page4;
