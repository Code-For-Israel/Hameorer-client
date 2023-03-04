import {Audio} from 'expo-av';
import {useEffect, useState} from "react";
import {TouchableOpacity} from "react-native";
import PlayAudioIcon from "../IconsSvg/PlayAudioIcon";
import mock_audio from "../../screens/SheetScreens/Guides/mock_audio.json";

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
        <>
            <TouchableOpacity
                value={mock_audio.http_link}
                onPress={playSound}>
                <PlayAudioIcon></PlayAudioIcon>
            </TouchableOpacity>
        </>
    );
}
