import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fromData: {
        title: "",
        date: "",
        templateType: "",
        description: "",
        fills: [],
        video: "",
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
        },
        selectTemplate: (state, action) => {
            state.fromData.templateType = action.payload.template;
        },

        setSkill: (state, action) => {
            state.fromData.skills = [...state.fromData.skills, action.payload];
        },
        setDefaultSkill: (state, action) => {
            state.fromData.skills = action.payload;
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

        }
    }
});

export default projectSlice.reducer;
export const { setSkill, removeSkill, setDefaultSkill, addProject, selectTemplate } = projectSlice.actions;