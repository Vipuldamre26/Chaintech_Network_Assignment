import { createSlice } from "@reduxjs/toolkit";


let userData = [];


const getUserData = () => {

    if (localStorage.getItem('userdata') === null) {
        localStorage.setItem('userdata', JSON.stringify([]));
    }
    else {
        userData = JSON.parse(localStorage.getItem('userdata'));
    }

    return userData;

}

let getData = getUserData();

const dataSlice = createSlice({
    name: 'data',
    initialState: { data: userData }, 
    reducers: {
        submit: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const { submit } = dataSlice.actions;
export default dataSlice.reducer;