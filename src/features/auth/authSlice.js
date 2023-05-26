import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: sessionStorage.getItem("accessToken")
        ? JSON.parse(sessionStorage.getItem("accessToken"))
        : "",
    email: sessionStorage.getItem("email")
        ? JSON.parse(sessionStorage.getItem("email"))
        : '',
    adminInfo: sessionStorage.getItem("adminInfo")
        ? JSON.parse(sessionStorage.getItem("adminInfo"))
        : {},
    modal: false,
}

const projectSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setAdminInfo: (state, action) => {
            state.adminInfo = action.payload;
            state.email = action.payload.admin.email;
            state.accessToken = action.payload.accessToken;

            sessionStorage.setItem("accessToken", JSON.stringify(state.accessToken));
            sessionStorage.setItem("email", JSON.stringify(state.email));
            sessionStorage.setItem("adminInfo", JSON.stringify(state.adminInfo));
        },
        modalForAuth: (state, action) => {
            state.modal = action.payload;
        }
    }
});

export default projectSlice.reducer;
export const { setAdminInfo, modalForAuth } = projectSlice.actions;