import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    logout(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
