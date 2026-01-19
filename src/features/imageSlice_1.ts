import { createSlice } from "@reduxjs/toolkit";

// Slice para almacenar URL de la imagen del avatar
// - Utiliza Immer internamente: en los reducers podemos mutar `state` directamente
//   (ej. `state.value = action.payload`) y Immer aplicará los cambios sin devolver
//   un nuevo objeto desde el reducer.
export const imageSlice = createSlice({
    name: 'image',
    initialState: {
        value: ''
    },
    reducers: {
        // setImage: guarda la URL del avatar en el estado
        setImage: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setImage } = imageSlice.actions

export default imageSlice.reducer