import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Video, Audio} from 'expo-av';
import PrevButton from '../../../components/PrevButton';
import DownloadFile from '../../../components/DownloadFile/DownloadFile';
import ShareExample from '../../../components/ShareButton/ShareButton';
import {useEffect} from "react";

const VideoPlayer = ({url}) => {
    const urlParse = url?.media?.did;
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    useEffect(() => {
        Audio.setAudioModeAsync({playsInSilentModeIOS: true})
     }, [])

    return (
        url && (
            <View style={styles.container}>
                {urlParse && (
                    <>
                        <View style={styles.buttons}>
                            <PrevButton
                                title={status.isPlaying ? 'עצור' : 'נגן'}
                                onPress={() =>
                                    status.isPlaying
                                        ? video.current.pauseAsync()
                                        : video.current.playAsync()
                                }
                            />
                        </View>
                        <Video
                            ref={video}
                            style={styles.video}
                            source={{
                                uri: urlParse,
                            }}
                            useNativeControls
                            resizeMode="contain"
                            isLooping={true}
                            ignoreSilentSwitch={'ignore'}
                            playsInSilentLockedModeIOS={ true }
                            shouldPlay={true}
                            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                        />
                        {/*todo enable in the future*/}
                        {/*<DownloadFile url={urlParse}></DownloadFile>*/}
                    </>
                )}
                {!urlParse && (
                    <Text style={[styles.textDirectionRTL, {fontSize: 24}]}>
                        {' '}
                        עוד לא קיים סרטון עבור דמות זו{' '}
                    </Text>
                )}
            </View>
        )
    );
};
export default VideoPlayer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 320,
        borderRadius: 5,
        padding: 5,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
});
