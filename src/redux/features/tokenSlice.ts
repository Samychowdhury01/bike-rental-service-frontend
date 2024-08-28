import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  token: string;
} = {
  token: "",
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;
export const selectToken = (state) => state.token.token;
export default tokenSlice.reducer;
