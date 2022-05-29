import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userId: "",
  rememberMe: false,
  loginScreenStatus: false,
  isUserLogged: false,
  jwtAndAuth: {},
}

export const loginManager = createSlice({
  name: "loginManager",
  initialState,
  reducers: {
    userId: function (state, action) {
      state.userId = action.payload
    },
    rememberMe: function (state, action) {
      state.rememberMe = action.payload
    },
    changeLoginScreenState: function (state, action) {
      state.loginScreenStatus = action.payload
    },
    changeUserLoginState: function (state, action) {
      state.isUserLogged = action.payload
    },
    setJwtAndAuth: function (state, action) {
      state.jwtAndAuth = action.payload
    },
    logOutUser: function (state) {
      state.userId = ""
      state.rememberMe = false
      state.isUserLogged = false
      state.jwtAndAuth = {}
      state.loginScreenStatus = false
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  rememberMe,
  userId,
  password,
  changeLoginScreenState,
  changeUserLoginState,
  setJwtAndAuth,
  logOutUser,
} = loginManager.actions

export default loginManager.reducer
