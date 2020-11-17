import React, { useEffect, useState } from 'react';
import { View, Text, Platform } from 'react-native';
import  Modal  from 'react-native-modal'
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from "@react-navigation/native"; 

import SingleSound, { Sound } from '../components/misc/SingleSound'
import { fetchPosts, SoundState } from '../state/SoundSlice';
import SoundDetailed from './SoundDetailed';
import { askForMore, ParamsState } from '../state/ParamsSlice'
import SearchBar from '../components/filtering/SearchBar'

import { styles } from '../styles/styles'
import SnipsoundLogo from '../components/misc/SnipsoundLogo';

export interface AppState {
    sounds: SoundState
    params: ParamsState
}

// Screen showing all Snipsounds
export default function SoundList(props: any) {

    const dispatch = useDispatch()
    const params = useSelector((state: AppState) => state.params)
    const maxPages = useSelector((state: AppState) => state.sounds.totalPages)
    const networkError = useSelector((state: AppState) => state.sounds.error)
    const isFocused = props.navigation.isFocused()

    const initialPost = {
        _id: "",
        date: "",
        title: "",
        owner: "",
        filename: "",
        category: "",
        description: "",
        likes: 0,
    }
    
    const [visiblePost, setVisiblePost] = useState<Sound>(initialPost)
    const [visible, setVisible] = useState(false)
    const sounds = useSelector((state: AppState) => state.sounds.posts)

    // Fetches all the posts each time the query parameters changes or when this screen is in focus
    useEffect(() => {
        dispatch(fetchPosts( params ))
    }, [params, isFocused])

    // Checks if user has scrolled to the end of the screen
    const endReached = () => { 
        if (params.limit < maxPages) {
            dispatch(askForMore());
        }
        else {
            console.log("No more pages")
        }
    }

    const showModal = (props: Sound) => {
        setVisiblePost(props)
        setVisible(true)
    }
    const closeModal = () => {
        setVisiblePost(initialPost)
        setVisible(false)
    }

    const renderSound = ({ item }: { item: Sound }) => { return (<SingleSound {...item} callback={showModal} />) }

    return (
        <View style={{ flex: 1}}>
            <SnipsoundLogo />
            <View style={styles.header}>
                <SearchBar {...props} />
                <Modal isVisible={visible} hasBackdrop={true}>
                    <SoundDetailed {...visiblePost} callback={closeModal} />
                </Modal>
            </View>
            {sounds.length === 0 || networkError ? <Text style={[styles.title, { textAlign: "center" }]}>
                {networkError ? "Network error. Call 95005234 if you need help" : "Nothing matches your query"}
            </Text> : null}
            <FlatList
                data={sounds}
                renderItem={renderSound}
                keyExtractor={(item: Sound) => item._id}
                onEndReachedThreshold={0.2}
                onEndReached={endReached} 
                scrollIndicatorInsets={{ right: 1 }}/> 
        </View>
    );
}
