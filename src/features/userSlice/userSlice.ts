import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name: "",
    token: ""
}

const userSlice = createSlice({
    name: "userDetails",
    initialState,
    reducers:{

    }
})

export default userSlice.reducer;