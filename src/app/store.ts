import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "../features/imageSlice_1";
import informationSlice from "../features/informationSlice_1";

export const store = configureStore({
    reducer: {
        image_1: imageSlice,
        informationSlice: informationSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch