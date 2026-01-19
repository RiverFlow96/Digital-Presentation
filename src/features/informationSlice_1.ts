import { createSlice } from "@reduxjs/toolkit";

// Slice para almacenar información del usuario obtenida desde GitHub
// Campos principales: name, numberOfProjects, mail, location
// Reducers: funciones que actualizan el estado (mutación segura gracias a Immer)
export const informationSlice = createSlice({
    name: 'information',
    initialState: {
        name: '',
        numberOfProjects: 0,
        mail: '',
        location: '',
    },
    reducers: {
        // Actualiza el nombre público del usuario
        setName: (state, action) => {
            state.name = action.payload
        },
        // Guarda el número de repositorios
        setNumberOfProjects: (state, action) => {
            state.numberOfProjects = action.payload
        },
        // Guarda el email (puede ser string vacío si GitHub devuelve null)
        setMail: (state, action) => {
            state.mail = action.payload
        },
        // Guarda la ubicación pública del perfil
        setLocation: (state, action) => {
            state.location = action.payload
        }
    }
})

export const { setName, setNumberOfProjects, setMail, setLocation } = informationSlice.actions
export default informationSlice.reducer