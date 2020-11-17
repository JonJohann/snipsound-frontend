import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, Image, Platform, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import SnipsoundLogo from '../components/misc/SnipsoundLogo';
import { resetParams } from '../state/ParamsSlice';
import { loginClicked } from '../state/SoundSlice'
import { styles } from '../styles/styles'

// Screen for loging in to Snipsound
export default function Login({ navigation }: any) {

    const [username, setUsername] = useState("")
    const dispatch = useDispatch()
    const validUsername = () => username.length < 15 && username.length > 1

    const login = () => {
        dispatch(resetParams())
        dispatch(loginClicked(username));
        Keyboard.dismiss();
        navigation.navigate('SoundList');
    }
    
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <SnipsoundLogo />
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{}}>
                <Text style={[styles.title, { alignSelf: "center" }]}>What's your name?</Text>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <TextInput onChangeText={text => setUsername(text)} style={[styles.textInput, { flex: 0, width: 200 }]} placeholder="Name.."></TextInput>
                    <TouchableOpacity onPress={login} style={[( validUsername() ? styles.active : styles.inactive), { marginTop: 10 }]}
                        disabled={!validUsername()}>
                        <Text style={{ fontSize: 20 , fontFamily: 'Manrope_400Regular' }}>Enter</Text>
                    </TouchableOpacity>
                </View>
                {username.length >= 15 ? <Text style={{color: "red", alignSelf: "center"}}>Name must be less than 15 characters</Text>: null}
            </KeyboardAvoidingView>
        </View>
    )
}