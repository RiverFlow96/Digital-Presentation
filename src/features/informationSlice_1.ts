import { createSlice } from "@reduxjs/toolkit";

export const informationSlice = createSlice({
    name: 'information',
    initialState: {
        name: '',
        numberOfProjects: 0,
        mail: '',
        location: '',
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setNumberOfProjects: (state, action) => {
            state.numberOfProjects = action.payload
        },
        setMail: (state, action) => {
            state.mail = action.payload
        },
        setLocation: (state, action) => {
            state.mail = action.payload
        }
    }
})

export const { setName, setNumberOfProjects, setMail, setLocation } = informationSlice.actions
export default informationSlice.reducer