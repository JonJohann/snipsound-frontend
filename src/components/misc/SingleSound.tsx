import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { AppState } from '../../screens/SoundList';
import { styles } from '../../styles/styles'
import Divider from './Divider';

export interface Sound {
    _id: string
    date: string,
    title: string,
    owner: string,
    filename: string,
    category: string,
    description: string,
    likes: number,
}

interface Function {
    callback: (props: Sound) => void
}

// Function for converting the date into a more readble format
export const dateAndTime = (date: Date) => {
    const addZeroToDate = (date: number) => {
        if (String(date).length === 1) {
            return "0".concat(String(date))
        }
        return String(date)
    }
    return (addZeroToDate(date.getDate()) + "." + addZeroToDate(date.getMonth() + 1) + "." +
    date.getFullYear() + " at " + addZeroToDate(date.getHours()) + ":" + addZeroToDate(date.getMinutes()))
}

// Component for each single sound in the sound list component. 
export default function SingleSound(props: Sound & Function) {
    
    const initialDate = new Date()
    const [date, setDate] = useState(initialDate)
    const owner = useSelector((state: AppState) => state.sounds.user)

    useEffect(() => {
        const propDate = new Date(props.date)
        setDate(propDate)
    }, [])

    return (
        <View style={styles.centeredView}>
            <View style={[styles.modalView, { borderWidth: 1 , borderColor: "#c7c7c7",}]}>
                <TouchableOpacity onPress={() => props.callback(props)} style={styles.clickableModal}>
                    <View>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.modalText}>{dateAndTime(date)}</Text>
                        <Divider titleWidth={7}/>
                        <Text style={styles.modalText}>By: {props.owner === owner ? "You!" : props.owner}</Text>
                        <Text style={styles.modalText}>Category: {props.category}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}