import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fromData: sessionStorage.getItem("fromData") ? JSON.parse(sessionStorage.getItem("fromData")) : {
        title: "",
        date: "",
        templateType: "",
        description: [],
        fills: [],
        video: "",
        photos: [],
        skills: [],
        projectUrl: ""
    }
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        addProject: (state, action) => {
            state.fromData.title = action.payload.title;
            state.fromData.date = action.payload.date;

            sessionStorage.setItem("fromData", JSON.stringify(state.fromData));
        },
        selectTemplate: (state, action) => {
            state.fromData.templateType = action.payload.template;
            sessionStorage.setItem("fromData", JSON.stringify(state.fromData));
        },
        setDescription: (state, action) => {
            state.fromData.description = action.payload;
            sessionStorage.setItem("fromData", JSON.stringify(state.fromData));
        },
        setPhotos: (state, action) => {
            state.fromData.photos = [...state.fromData.photos, action.payload];
            sessionStorage.setItem("fromData", JSON.stringify(state.fromData));
        },

        setSkill: (state, action) => {
            state.fromData.skills = [...state.fromData.skills, action.payload];
            sessionStorage.setItem("fromData", JSON.stringify(state.fromData));
        },
        setDefaultSkill: (state, action) => {
            state.fromData.skills = action.payload;
            sessionStorage.setItem("fromData", JSON.stringify(state.fromData));
        },
        removeSkill: (state, action) => {
            const position = action.payload;
            const array = state.fromData.skills;

            if (position >= 0 && position < array.length) {
                for (let i = position; i < array.length - 1; i++) {
                    array[i] = array[i + 1];
                }
                array.length--;
            }
            state.fromData.skills = array;

            sessionStorage.setItem("fromData", JSON.stringify(state.fromData));
        }
    }
});

export default projectSlice.reducer;
export const { setSkill, removeSkill, setDefaultSkill, addProject, selectTemplate, setDescription, setPhotos } = projectSlice.actions;