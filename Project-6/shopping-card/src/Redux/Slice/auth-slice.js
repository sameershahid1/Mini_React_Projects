import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{isLogedIn:false},
    reducers:{
        login(state){state.isLogedIn=true;},
        logout(state){state.isLogedIn=false;}
    }
});

export const authActions=authSlice.actions;

export default authSlice;
