import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, TextInput, TouchableOpacity} from 'react-native';
import { searchClicked } from '../../state/ParamsSlice';
import FilterRow from './FilterRow'
import SortRow from './SortRow'
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../../styles/styles'
import { MaterialIcons } from '@expo/vector-icons';
import { AppState } from '../../screens/SoundList';
import { useIsFocused } from "@react-navigation/native"; 

// Search bar with buttons for adding song and sorting
function SearchBar({navigation}: any) {
    const dispatch = useDispatch()
    const searchText = useSelector((state: AppState) => state.params.search);
    const [sortVisible, setSortVisible] = useState(false)
    const isFocused = navigation.isFocused()

    const onSearchChange = (text: string) => {
        dispatch(searchClicked(text));
    }

    useEffect(() => {
        setSortVisible(false)
    }, [isFocused])

    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <TextInput
                    placeholder="Search on artists"
                    onChangeText={onSearchChange}
                    style={[styles.textInput, {flex: 1}]}
                    defaultValue={searchText}
                />
                <TouchableOpacity style={[sortVisible ? styles.active : styles.inactive, styles.searchStyle]} onPress={() => setSortVisible(!sortVisible)}>
                    <MaterialIcons name="sort" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.active, styles.searchStyle]} onPress={()=> navigation.navigate("Recording")}>
                    <FontAwesome name="plus" size={24} color="black" /> 
                </TouchableOpacity>
            </View>
            {sortVisible ? 
            <View style={{ flexDirection: "row", alignSelf: "center", justifyContent:"flex-end" }}>
                <FilterRow />
                <SortRow />
            </View>: null}
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
            </View>
        </View>
    );
};

export default SearchBar;