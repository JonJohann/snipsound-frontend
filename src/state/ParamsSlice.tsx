import { createSlice } from '@reduxjs/toolkit'

export interface ParamsState {
    sortby: string,
    search: string,
    category: string,
    limit: number
}

const initialState = {
    sortby: "-date",
    search: "",
    category: "",
    limit: 5
}

// The store slice consisting of reducers for updating the query parameters sent to the backend API.
export const paramsSlice = createSlice({
    name: 'params',
    initialState,
    reducers: {
        askForMore: (state: ParamsState) => {
            state.limit += 5;
        },
        searchClicked: (state: ParamsState, action: any) => {
            state.search = action.payload
            state.limit = 5;
        },
        filterClicked: (state: ParamsState, action: any) => {
            state.category = action.payload;
            state.limit = 5;
        },
        sortClicked: (state: ParamsState, action: any) => {
            state.sortby = action.payload;
            state.limit = 5;
        },
        resetParams: (state: ParamsState) => {
            state.limit = 5;
            state.search = "";
            state.sortby = "-date";
            state.category = "";
        }
    }
})




export const { askForMore, searchClicked, filterClicked, sortClicked, resetParams } = paramsSlice.actions
export default paramsSlice.reducer

