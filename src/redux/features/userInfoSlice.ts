import { createSlice } from "@reduxjs/toolkit";

type TUser = {
  userId?: string;
  exp?: number;
  iat?: number;
  username?: string;
  userRole?: string;
};
type TUserState = {
  user: TUser ;
};
const initialState: TUserState = {
  user: {},
};

const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfo(state, action) {
      console.log(action.payload, "from userinfo slice");
      state.user = { ...action.payload };
    },
  },
});

export const { addUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
