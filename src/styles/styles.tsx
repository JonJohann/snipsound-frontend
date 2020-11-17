import { StyleSheet } from 'react-native'
import {
    useFonts,
    Manrope_400Regular,
  } from '@expo-google-fonts/manrope';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    modalView: {
        margin: 0,
        backgroundColor: "rgba(255,255,255, 1.0)",
        borderRadius: 20,
        paddingRight: 5,
        paddingVertical: 15,
        paddingLeft: 15,
        flexDirection: "row",
        alignItems: "center",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        elevation: 5,
        width: "90%",
    },
    detailedView: {
        backgroundColor: "rgba(255,255,255, 0.96)",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
    },
    modalText: {
        marginBottom: 5,
        fontSize: 16,
        fontFamily: 'Manrope_400Regular' 
    },
    active: {
        borderColor: "#F194FF",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: "white",
        elevation: 2,
        marginHorizontal: 5,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 0.84,

    },
    inactive: {
        borderColor: "#6d557000",
        borderRadius: 10,
        backgroundColor: "#e6e6e6",
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
        elevation: 2,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    textInput: {
        height: 40,
        alignItems: "center",
        fontSize: 20,
        borderColor: "gray",
        borderRadius: 10,
        borderBottomWidth: 0.5,
        paddingHorizontal: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        fontFamily: 'Manrope_400Regular' 
    },
    description: {
        fontSize: 20,
        paddingHorizontal: 10,
        borderColor: "#acacac",
        textAlign: "center",
        fontFamily: 'Manrope_400Regular' 
    },
    recordDescription: {
        fontSize: 20,
        marginTop: 10,
        height: 100,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: "gray",
        alignItems: "center",
        marginLeft: 10,
        fontFamily: 'Manrope_400Regular',
        borderBottomWidth: 0.5,
    },
    buttonRow: {
        flexDirection: "row"
    },
    symbols: {
        margin: 10
    },
    header: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    clickableModal: {
        backgroundColor: "white",
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
        marginVertical: 5,
        width: "100%",
    },
    searchStyle: {
        marginTop: 10,
        fontSize: 20,
        paddingVertical: 7,
        fontFamily: 'Manrope_400Regular' 
    },
    detailedText: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 2,
        fontFamily: 'Manrope_400Regular' 
    }
});