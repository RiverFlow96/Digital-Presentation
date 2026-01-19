import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "../features/imageSlice_1";
import informationSlice from "../features/informationSlice_1";

export const store = configureStore({
    reducer: {
        image_1: imageSlice,
        informationSlice: informationSlice
    }
})

// Tipos derivados del store
// - RootState: tipo de todo el estado de la aplicación (útil para tipar useSelector)
// - AppDispatch: tipo del dispatch (útil para tipar useDispatch en helpers)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch