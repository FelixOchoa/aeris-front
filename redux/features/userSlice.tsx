import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  user: {},
  token: "",
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.isLogged = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
