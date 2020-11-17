import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Sound } from '../components/misc/SingleSound'
import { Audio, AVPlaybackStatus } from 'expo-av';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../styles/styles'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { dateAndTime } from '../components/misc/SingleSound'
import Divider from '../components/misc/Divider';

export interface Function {
    callback: () => void
}

// Detailed view of each Snipsound
export default function SoundDetailed(props: Sound & Function) {

    const [playing, setPlaying] = useState(false)
    const initialSound = new Audio.Sound();
    const [sound] = useState(initialSound)
    const date = new Date(props.date)

    const stopPlaying = () => {
        if (playing) {
            sound.stopAsync()
            sound.unloadAsync()
        }
    }

    const playOrPause = async () => {
        try {
            if (!playing) {
                await sound.loadAsync({ uri: 'http://84.202.202.48:3074/' + props.filename });
                await sound.setIsLoopingAsync(true)
                await sound.playAsync();
                setPlaying(true)
            }
            else {
                await sound.stopAsync();
                await sound.unloadAsync();
                setPlaying(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.centeredView}>
            <View style={styles.detailedView}>
                <Text style={[styles.title, {marginBottom: 10}]}>{props.title}</Text>
                <Text style={styles.detailedText}>By {props.owner}</Text>
                <Text style={styles.detailedText}> Category: {props.category} </Text>
                <Text style={styles.detailedText}> Posted on: {dateAndTime(date)} </Text>
                <Divider/>
                <Text style={styles.description}>{props.description}</Text>
                <Divider/>
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={playOrPause} style={styles.symbols}>
                        <FontAwesome style={styles.symbols} name={playing ? "pause" : "play"} size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { stopPlaying(); props.callback() }} style={styles.symbols}>
                        <Entypo name="cross" size={70} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
