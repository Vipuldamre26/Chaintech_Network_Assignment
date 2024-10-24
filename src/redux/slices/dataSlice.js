import { createSlice } from "@reduxjs/toolkit";


let userData = ['hello'];


// const getUserData = () => {

//     if (localStorage.getItem('userData') === null) {
//         localStorage.setItem('userData', JSON.stringify([]));
//     }
//     else {
//         userData = JSON.parse(localStorage.getItem('userData'));
//     }

//     return userData;

// }

// let getData = getUserData();

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