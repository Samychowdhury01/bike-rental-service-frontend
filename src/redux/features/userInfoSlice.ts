import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {}
};

const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfo(state, action) {
      console.log(action.payload, 'from userinfo slice');
      state.user = {...action.payload};
    },
  },
});

export const { addUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
