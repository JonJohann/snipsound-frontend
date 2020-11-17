import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from '../../styles/styles'

// Simple radiobutton
export default function RadioButton(props: any) {
    return (
        <TouchableOpacity
            onPress={() => props.callback(props.texts)}
            style={[(props.selected ? styles.active : styles.inactive), {marginHorizontal: 2}]}>
            <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 20, color: (props.selected ? "black" : "grey")}}>
                {props.texts.charAt(0).toUpperCase() + props.texts.slice(1)}
                </Text>
        </TouchableOpacity>

    );
}