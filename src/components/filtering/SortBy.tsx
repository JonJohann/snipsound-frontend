import React from 'react';
import { TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../../styles/styles'

// The two sort by buttons, sorting by date or alphabetically, both ascending and descending
export default function SortBy(props: any) {
    return (
        <TouchableOpacity
            onPress={() => props.sortChanged(props.type)}
            style={props.selected ? styles.active : styles.inactive}>
            {props.type === "title" ? (props.asc ? <FontAwesome name="sort-alpha-asc" size={24} color="black" /> :
                <FontAwesome name="sort-alpha-desc" size={24} color="black" />): null}
            {props.type==="date" ? <MaterialCommunityIcons name={props.asc ? "calendar-export" : "calendar-import"} size={24} color="black" />  : null}
        </TouchableOpacity>

    );
}