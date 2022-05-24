import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loginOverlayStatus: false,
  loginOverlayContent: "",
  loginOverlayElement: "",
  toUse: "content",
  icon: "fa-solid fa-xmark",
  side: "left",
}

export const loginOverlaySlice = createSlice({
  name: "loginOverlay",
  initialState,
  reducers: {
    toggleLoginOverlay: function (state) {
      state.loginOverlayStatus = !state.loginOverlayStatus
    },
    addLoginContent: function (state, action) {
      state.loginOverlayContent = action.payload
    },
    clearLoginDetails: function (state) {
      state.loginOverlayStatus = false
      state.loginOverlayContent = ""
      state.loginOverlayElement = ""
    },
    addLoginElement: function (state, action) {
      state.loginOverlayElement = action.payload
    },
    setToUse: function (state, action) {
      state.toUse = action.payload
    },
    setIcon: function (state, action) {
      state.icon = action.payload
    },
    setSide: function (state, action) {
      state.side = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  toggleLoginOverlay,
  addLoginContent,
  clearLoginDetails,
  addLoginElement,
  setToUse,
  setIcon,
  setSide,
} = loginOverlaySlice.actions
export default loginOverlaySlice.reducer
