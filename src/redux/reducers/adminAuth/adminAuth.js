import { createSlice } from "@reduxjs/toolkit";

const init = {
  adminAuth: {
    accessToken: null,
    refreshToken: null,
  },
};

const adminAuthReducer = createSlice({
  name: "adminAuthReducer",
  initialState: init,
  reducers: {
    login: (state, action) => {
      state.adminAuth.accessToken = action.payload.accessToken;
      state.adminAuth.refreshToken = action.payload.refreshToken;
    },
    logout: (state, action) => {
      state.adminAuth.accessToken = null;
      state.adminAuth.refreshToken = null;
    },
  },
});

export const { login, logout } = adminAuthReducer.actions;
export default adminAuthReducer.reducer;
