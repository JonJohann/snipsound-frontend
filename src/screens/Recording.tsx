import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';
const axios = require('axios').default;
import * as FileSystem from 'expo-file-system';
import { AppState } from '../screens/SoundList'
import { useSelector, useDispatch } from 'react-redux';
import TitleDescription from '../components/recording/TitleDescription'
import CategoryRow from '../components/recording/CategoryRow'
import SnipsoundLogo from '../components/misc/SnipsoundLogo'
import { resetParams } from '../state/ParamsSlice';
import RecordingRow from '../components/recording/RecordingRow';
import Divider from '../components/misc/Divider';

var initialSound = new Audio.Sound()
var initialRecord = new Audio.Recording();

// Screen for the recording of sound files
export default function Recording({ navigation }: any) {

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("Rap")
    const [description, setDescription] = useState("")
    const owner = useSelector((state: AppState) => state.sounds.user)

    const dispatch = useDispatch()

    const [sound, setSound] = useState(initialSound);
    const [isPlaying, setIsPlaying] = useState(false);

    const [isRecording, setIsRecording] = useState(false);
    const [recording, setRecording] = useState(initialRecord);
    const [songReady, setSongReady] = useState(false);

    useEffect(() => {
        Audio.requestPermissionsAsync()
        var initialSound = new Audio.Sound()
        var initialRecord = new Audio.Recording();
        setSound(initialSound);
        setRecording(initialRecord)
    },[])

    const canPost = () => {
        const titleBool = title.length >= 1 && title.length < 13
        const descriptionBool = description.length < 180
        return titleBool && descriptionBool
    }

    const recordSound = async () => {

        const status = await recording.getStatusAsync();
        try {
            if (!status.isRecording) {
                await Audio.setAudioModeAsync({
                    allowsRecordingIOS: true,
                    interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                    playsInSilentModeIOS: true,
                    shouldDuckAndroid: true,
                    interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
                    playThroughEarpieceAndroid: false,
                    staysActiveInBackground: true,
                });
                await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY)
                await recording.startAsync();
                setIsRecording(true);

            }
        } catch (error) {
            console.log(error)

        }
        if (isRecording) {
            stopRecord()

        }
    }

    const stopRecord = async () => {
        try {
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                playsInSilentModeIOS: true,
                shouldDuckAndroid: true,
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
                playThroughEarpieceAndroid: false,
                staysActiveInBackground: true,
            });
            await recording.stopAndUnloadAsync();
            await recording.createNewLoadedSoundAsync().then(sounds => {
                setSound(sounds.sound)
            })
            setIsRecording(false);
            setSongReady(true)
        } catch (error) {
            console.log(error)
        }
    }

    const newRecord = async () => {
        if (isPlaying) {
            playSound()
        }
        initialRecord = new Audio.Recording();
        setRecording(initialRecord)
        setSongReady(false);
    }

    const playSound = async () => {

        if (!isPlaying) {

            await sound.setIsLoopingAsync(true)
            await sound.playAsync();
            setIsPlaying(true);
        }
        else {

            await sound.stopAsync();
            setIsPlaying(false);
        }
    }

    const saveSound = async () => {
        const uri = String(recording.getURI());
        const url = "http://84.202.202.48:3074/upload";
        const snipsound = {
            title: title,
            date: Date.now(),
            owner: owner,
            category: category,
            filename: "",
            description: description,
            likes: 0
        }
        if (isPlaying) {
            playSound()
        }

        initialSound = new Audio.Sound()
        initialRecord = new Audio.Recording();

        FileSystem.uploadAsync(url, uri).then(res => {
            snipsound.filename = res.body
            axios.post("http://84.202.202.48:3074/", snipsound)
        }).then(() =>  {dispatch(resetParams()); navigation.navigate("SoundList")})
    }

    const recordingRowProps = {
        recordSound,
        newRecord,
        playSound,
        saveSound,
        canPost,
        songReady,
        isPlaying, 
        isRecording
    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <SnipsoundLogo />
            <View style={{ flex: 2 }}>
                <CategoryRow categoryChosen={setCategory} />
                {title.length > 12 ? <Text style={{color: "red"}}>Title must be less than 13 characters...</Text>: null}
                <TitleDescription setTitle={setTitle} setDescription={setDescription} />
                {description.length > 179 ? <Text style={{color: "red"}}>Description must be less than 180 characters...</Text>: null}
                <RecordingRow {...recordingRowProps}/>
            </View>
        </View>

    );
}