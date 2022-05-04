import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loginId: "",
  password: "",
  rememberMe: false,
  loginScreenShow: false,
  isUserLogged: true,
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    remember: function (state) {
      state.rememberMe = state.rememberMe === true ? false : true
    },
    loginId: function (state, action) {
      state.loginId = action.payload
    },
    password: function (state, action) {
      state.password = action.payload
    },
    toggleScreenShow: function (state) {
      state.loginScreenShow = !state.loginScreenShow
    },
    toggleUserLogged: function (state) {
      state.isUserLogged = !state.isUserLogged
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  remember,
  loginId,
  password,
  toggleScreenShow,
  toggleUserLogged,
} = loginSlice.actions

export default loginSlice.reducer
