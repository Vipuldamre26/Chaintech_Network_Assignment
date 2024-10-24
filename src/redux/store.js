import { configureStore } from "@reduxjs/toolkit";
import dataSlice  from './slices/dataSlice'

const store = configureStore({
    reducer: {
        formData: dataSlice
    }
})

export default store;