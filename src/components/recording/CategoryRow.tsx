import React, { useState } from 'react';
import { View, Text} from 'react-native';
import RadioButton from '../filtering/RadioButton'

// Component for selecting between different categories for uploading
export default function CategoryRow(props: any) {

    const [selected, setSelected] = useState("Rap")

    const changeSelected = (name: string) => { 
            setSelected(name)
            props.categoryChosen(name)
    }

    return(
        <View style={{flexDirection: "row"}}>
        <Text style={{fontSize: 20, alignSelf: "center", marginRight: 5}}>Category:</Text>
        <RadioButton selected={selected==="Rap"} texts="Rap" callback={changeSelected}/>
        <RadioButton selected={selected==="Song"} texts="Song" callback={changeSelected}/>
        <RadioButton selected={selected==="Spoken"} texts="Spoken" callback={changeSelected}/>
        </View>
    )
}