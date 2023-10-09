import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userInfo = action.payload;
    },
    logOutUser: (state) => {
      state.userInfo = {};
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { logOutUser, loginUser } = userSlice.actions;

export default userSlice.reducer;
