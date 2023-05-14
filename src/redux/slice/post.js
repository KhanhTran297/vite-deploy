import { createSlice } from "@reduxjs/toolkit";
const postStore = createSlice({
    name: "post",
    initialState: {
        listPost: []
    },
    reducers: {
        setListPost: (state,action) => {
            return {
                ...state,
                listPost: action.payload,
            }

        }
    }
});
export const {setListPost} = postStore.actions;
export default postStore.reducer;