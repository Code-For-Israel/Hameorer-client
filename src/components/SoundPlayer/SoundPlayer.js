import {Audio} from 'expo-av';
import {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PlayAudioIcon from '../IconsSvg/PlayAudioIcon';
import GetSiteUrl from '../../utils/GetSiteUrl';

export default function SoundPlayer({audioMedia}) {
    const [sound, setSound] = useState();
    const [loading, setLoading] = useState(false);
    const baseUrl = GetSiteUrl();

    const mediaUrl = baseUrl + 'v1/media/hameorer-audio/' + audioMedia.soundName;

    async function playSound() {
        console.log('Loading Sound');
        setLoading(true)
        const {sound} = await Audio.Sound.createAsync({uri: mediaUrl},{ shouldPlay: true } );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
        setLoading(false)

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
            <TouchableOpacity onPress={playSound}>
                {loading && <Text>טוען אודיו...</Text>}
                <PlayAudioIcon></PlayAudioIcon>
            </TouchableOpacity>
        </>
    );
}
