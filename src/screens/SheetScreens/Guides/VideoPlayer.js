import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Video} from 'expo-av';
import PrevButton from '../../../components/PrevButton';
import DownloadFile from '../../../components/DownloadFile/DownloadFile';

const VideoPlayer = ({url}) => {
    const urlParse = url?.media?.did;
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

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
                            isLooping={false}
                            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                        />
                        <DownloadFile url={urlParse}></DownloadFile>
                    </>
                )}
                {!urlParse && <Text style={{fontSize: 24}}> עוד לא קיים סרטון עבור דמות זו </Text>}
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
