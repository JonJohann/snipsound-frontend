import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import KeyboardHide from './KeyboardHide'
import { styles } from '../../styles/styles'

// Component for the title and description field
export default function TitleDescription(props: any) {
    
    const [visibleKeyboard, setVisibleKeyboard] = useState(false)

    const keyboardState = {
        visibleKeyboard,
        setVisibleKeyboard
    }

    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <TextInput onFocus={() => setVisibleKeyboard(true)} placeholder="Title" onChangeText={text => props.setTitle(text)}
                    style={[styles.textInput, { flex: 1 }]} />
                <KeyboardHide {...keyboardState} /> 
            </View>

            <View style={{width:350}}>
            <TextInput multiline={true} onFocus={() => setVisibleKeyboard(true)} placeholder="Description" onChangeText={text => props.setDescription(text)}
                style={styles.recordDescription} />
            </View>
        </View>
    )
}