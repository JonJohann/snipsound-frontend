import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../screens/SoundList';
import { filterClicked } from '../../state/ParamsSlice';
import RadioButton from './RadioButton'

//Component for filtering between the different sound categories
export default function FilterRow() {
    
    const dispatch = useDispatch()
    const category = useSelector((state: AppState) => state.params.category)
    const [selected, setSelected] = useState(category)

    const changeSelected = (name: string) => {
        if (name === selected) {
            setSelected("")
            dispatch(filterClicked(""))
        }
        else {
            setSelected(name)
            dispatch(filterClicked(name))
        }
    }

    return(
        <>
        <RadioButton selected={selected==="Rap"} texts="Rap" callback={changeSelected}/>
        <RadioButton selected={selected==="Song"} texts="Song" callback={changeSelected}/>
        <RadioButton selected={selected==="Spoken"} texts="Spoken" callback={changeSelected}/>
        </>
    )
}