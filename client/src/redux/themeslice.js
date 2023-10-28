import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode:"dark",
    //  when a user logs in their id is saved here and then used to fetch their data in other calls
    userId: "63701cc1f03239b7f700000e" 
}

export const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        setMode: (state)=>{
            state.mode = state.mode ==="light" ? "dark" :"light"
        }
    }
})

export const { setMode } = themeSlice.actions;

export default themeSlice.reducer;