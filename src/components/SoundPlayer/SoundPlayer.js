import {Audio} from 'expo-av';
import {useEffect, useState} from "react";
import {Button, View} from "react-native";
import {styles} from "../../styles/PagesStyle";

export default function SoundPlayer({audioFile}) {
    const [sound, setSound] = useState();
    console.log(audioFile)

    async function playSound() {
        console.log('Loading Sound');
        const {sound} = await Audio.Sound.createAsync(require('../../../assets/test.mp3'));
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);


    return (
        <View style={styles.container}>
            <Button title="Play Sound" onPress={playSound}/>
        </View>);
}
