import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PlayAudioIcon from '../IconsSvg/PlayAudioIcon';
import StopAudioIcon from '../IconsSvg/StopAudioIcon';
import GetSiteUrl from '../../utils/GetSiteUrl';

export default function SoundPlayer({ audioMedia }) {
    const [sound, setSound] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const baseUrl = GetSiteUrl();

    const mediaUrl = baseUrl + 'v1/media/hameorer-audio/' + audioMedia.soundName;

    const isSoundPlaying = async () => {
        if (sound !== null) {
            const status = await sound.getStatusAsync();
            return status.isPlaying;
        }
        return false;
    };

    const playSound = async () => {
        try {
            console.log('Loading Sound');
            setLoading(true);
            const { sound: audioSound } = await Audio.Sound.createAsync(
                { uri: mediaUrl },
                { shouldPlay: true }
            );
            setSound(audioSound);
            setIsPlaying(true);
            console.log('Playing Sound');
            await audioSound.playAsync();
            setLoading(false);
        } catch (error) {
            console.error('Failed to play sound', error);
            setLoading(false);
        }
    };

    const stopSound = async () => {
        try {
            if (sound) {
                console.log('Stopping Sound');
                await sound.stopAsync();
                setIsPlaying(false);
            }
        } catch (error) {
            console.error('Failed to stop sound', error);
        }
    };

    useEffect(() => {
        return () => {
            if (sound) {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
        };
    }, [sound]);

    return (
        <>
            <TouchableOpacity onPress={isPlaying ? stopSound : playSound}>
                {loading && <Text>טוען אודיו...</Text>}
                {isPlaying ? <StopAudioIcon /> : <PlayAudioIcon />}
            </TouchableOpacity>
        </>
    );
}
