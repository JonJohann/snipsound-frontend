import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Sound } from '../components/misc/SingleSound';
import { ParamsState } from './ParamsSlice';
const axios = require('axios').default;

export const fetchPosts = createAsyncThunk(
    'sounds/fetchSounds',
    async (params: ParamsState) => {
        const response = await axios.get('http://84.202.202.48:3074/', {params})
        return response.data
    }
)

export interface SoundState {
    posts: Array<Sound>,
    totalPages: number,
    status: string,
    error: string,
    user: string
}

const initialState: SoundState = {
    posts: [],
    totalPages: 1,
    status: 'idle',
    error: "",
    user: ""
}

// State slice for fetching posts from the backend, and also for storing in state which user is currently logged in
export const soundSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        loginClicked: (state: SoundState, action: {type: string, payload:string}) => {
            state.user = action.payload
        }
    },
    extraReducers: {
        [fetchPosts.pending.toString()]: (state, action) => {
            state.status = 'loading'
        },
        [fetchPosts.fulfilled.toString()]: (state, action) => {
            state.status = 'succeeded'
            state.posts = action.payload.posts
            state.totalPages = action.payload.totalPages
            state.error = ""
        },
        [fetchPosts.rejected.toString()]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },
    }
})

export const { loginClicked } = soundSlice.actions

export default soundSlice.reducer


