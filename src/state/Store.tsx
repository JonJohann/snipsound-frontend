import { configureStore } from '@reduxjs/toolkit'
import soundReducer from "./SoundSlice"
import paramsReducer from "./ParamsSlice"

export default configureStore({
    reducer: {
      sounds: soundReducer,
      params: paramsReducer
    }
});