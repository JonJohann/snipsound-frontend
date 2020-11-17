import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../../styles/styles'

interface RecordingRowType {
    recordSound: () => Promise<void>,
    newRecord: () => Promise<void>,
    playSound: () => Promise<void>,
    saveSound: () => Promise<void>,
    canPost: () => boolean,
    songReady: boolean,
    isPlaying: boolean,
    isRecording: boolean
}

// Component for recording, playback, uploading and discarding sound files
export default function RecordingRow(props: RecordingRowType) {

    const {recordSound, newRecord, playSound, saveSound, canPost, songReady, isPlaying, isRecording} = props

    return (
        <View style={{ flexDirection: "row", justifyContent: "center"}}>
            <TouchableOpacity
                onPress={recordSound} disabled={songReady}>
                <FontAwesome style={styles.symbols} name={!songReady ? "microphone" : "microphone-slash"} size={50} color={isRecording ? "red" : "black"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={playSound} disabled={!songReady}>
                <FontAwesome style={styles.symbols} name={isPlaying ? "pause" : "play"} size={50} color={songReady ? "black" : "lightgrey"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.symbols} onPress={newRecord} disabled={!songReady}>
                <FontAwesome name="trash" size={50} color={songReady ? "black" : "lightgrey"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={saveSound} disabled={!songReady || !canPost()}
                style={[(songReady && canPost() ? styles.active : styles.inactive), { marginTop: 10, paddingHorizontal: 10, alignSelf: "center" }]}>
                <Text style={{ fontSize: 20 }}>Upload to Snipsound</Text>
            </TouchableOpacity>
        </View>
    )
}