import React from 'react';
import { View } from 'react-native';

interface DividerProps {
    titleWidth?: number 
}

export default function Divider(props: DividerProps) {
    const titleWidth = props.titleWidth ? props.titleWidth : 20

    return (
        <View style={{borderTopColor: "#F194FF", borderTopWidth: 1, marginVertical: titleWidth, alignSelf: "stretch", width: 250 }}/>
    )
}