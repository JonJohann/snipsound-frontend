import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Recording from './src/screens/Recording';
import SoundList from './src/screens/SoundList'
import Login from './src/screens/Login'
import { Provider } from 'react-redux';
import configureStore from './src/state/Store';
import { StyleSheet, Text } from 'react-native'
import {
    useFonts,
    Manrope_400Regular,
  } from '@expo-google-fonts/manrope';

const Stack = createStackNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: "#3a3a3a",
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: "bold" as "bold" }
}

export default function App() {

    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
      });
    if (!fontsLoaded) {
        return (<Text>Wait</Text>)
    }
    return (

        <Provider store={configureStore}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={screenOptions} >
                    <Stack.Screen name="Login" component={Login} options={{ title: "Welcome" }} />
                    <Stack.Screen name="SoundList" component={SoundList} options={{ title: "All snipsounds" }} />
                    <Stack.Screen name="Recording" component={Recording} options={{ title: "Record your own Snipsound" }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
