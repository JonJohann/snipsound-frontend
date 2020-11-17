import React from 'react';
import { TouchableOpacity, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../../styles/styles'

// Button for hiding the keyboard
export default function KeyboardHide(props: any) {
    
    return (
        <TouchableOpacity style={[styles.symbols, { marginTop: 15, marginRight: -1, marginLeft: 2}]} onPress={() => {Keyboard.dismiss(); props.setVisibleKeyboard(false)}}>
            <MaterialIcons style={{opacity: props.visibleKeyboard ? 1 : 0}} name="keyboard-hide" size={30} color="black" />
        </TouchableOpacity>
    )
}