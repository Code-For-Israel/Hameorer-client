import * as React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Video} from 'expo-av';

const VideoPlayer = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (<View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={styles.buttons}>
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}
                />
            </View>
        </View>);
};
export default VideoPlayer;

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1',
    }, video: {
        alignSelf: 'center', width: 320, height: 200,
    }, buttons: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    },
});
