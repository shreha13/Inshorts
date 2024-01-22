import { createSlice } from "@reduxjs/toolkit";
import appReducer from "../reducers/appReducer";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isSidebarOpen: false,
        category: null,
        newsCount: 10,
    },
    reducers: appReducer,
});

export const { toggleSideBar, selectedCategory, updateNewsCount } = appSlice.actions
export default appSlice.reducer;