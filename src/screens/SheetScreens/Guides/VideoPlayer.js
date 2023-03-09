import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Video} from 'expo-av';
import PrevButton from "../../../components/PrevButton";

const VideoPlayer = (url) => {
    const urlParse = url?.did?.http_link
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (url &&
        <View style={styles.container}>
            <View style={styles.buttons}>
                <PrevButton
                    title={status.isPlaying ? 'עצור' : 'נגן'}
                    onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}
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
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />

        </View>);
};
export default VideoPlayer;

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center'
    }, video: {
        alignSelf: 'center', width: 320, height: 320,
    }, buttons: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    },
});
