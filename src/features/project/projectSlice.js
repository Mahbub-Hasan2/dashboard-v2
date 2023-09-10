import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    fromData: sessionStorage.getItem("fromData") ? JSON.parse(sessionStorage.getItem("fromData")) : {
        title: "",
        date: "",
        templateType: "",
        description: [],
        fills: [],
        video: "",
        photos: [],
        photo: "",
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
            const newSkill = action.payload.toLowerCase();

            // Check if the new skill already exists in the skills array
            if (!state.fromData.skills.includes(newSkill)) {
                state.fromData.skills = [...state.fromData.skills, newSkill];
                sessionStorage.setItem("fromData", JSON.stringify(state.fromData));
            }
            else {
                toast.warning("This skill already exists", {
                    position: "bottom-right",
                });
            }
        },
        setDefaultSkill: (state, action) => {
            state.fromData.skills = action.payload;
            sessionStorage.setItem("fromData", JSON.stringify(state.fromData));
        },
        removeSkill: (state, action) => {
            const skillToRemove = action.payload;
            state.fromData.skills = state.fromData.skills.filter(skill => skill !== skillToRemove);

            sessionStorage.setItem("fromData", JSON.stringify(state.fromData));
        },
        addProjectUrl: (state, action) => {
            state.fromData.projectUrl = action.payload.projectUrl;
            sessionStorage.setItem("fromData", JSON.stringify(state.fromData));
        },
        addVideo: (state, action) => {
            state.fromData.video = action.payload;
            sessionStorage.setItem("fromData", JSON.stringify(state.fromData));
        },
        addPhoto: (state, action) => {

            state.fromData.photo = action.payload.photo;

            const photos = state.fromData.photos;
            const arrayOfObjects = photos.map(photo => photo.public_id === action.payload.public_id ? { ...photo, selected: true } : { ...photo, selected: false });
            state.fromData.photos = arrayOfObjects;

            sessionStorage.setItem("fromData", JSON.stringify(state.fromData));
        },
        deleteOnePhoto: (state, action) => {
            const public_id = action.payload;
            state.fromData.photos = state.fromData.photos.filter(photo => photo.public_id !== public_id);
            sessionStorage.setItem("fromData", JSON.stringify(state.fromData));
        },
        resetProjectData: (state) => {
            state.fromData = {
                title: "",
                date: "",
                templateType: "",
                description: [],
                fills: [],
                video: "",
                photos: [],
                photo: "",
                skills: [],
                projectUrl: ""
            }
            sessionStorage.setItem("fromData", JSON.stringify(state.fromData));
        },
    }
});

export default projectSlice.reducer;
export const {
    setSkill,
    deleteOnePhoto,
    removeSkill,
    setDefaultSkill,
    addProject,
    selectTemplate,
    setDescription,
    setPhotos,
    addProjectUrl,
    addVideo,
    addPhoto,
    resetProjectData
} = projectSlice.actions;