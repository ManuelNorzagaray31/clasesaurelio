import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const VideoScreen = () => {

    return (
        
        <View style={styles.container}>
            <Video
                source={require('../assets/videoschido.mp4')}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                style={styles.video}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    video: {
        width: 1080, 
        height: 720,
        marginBottom: 20,
    },
});

export default VideoScreen;
