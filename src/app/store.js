import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "./features/LoginSlice"
import overlayReducer from "./features/overlaySlice"
import prepaidPlansSlice from "./features/prepaidPlansSlice"
import loginOverlaySlice from "./features/loginOverlaySlice"
import loginManager from "./features/loginManager"
import userInfo from "./features/userInfoSlice"

export const store = configureStore({
  reducer: {
    login: loginReducer,
    overlay: overlayReducer,
    prepaidPlan: prepaidPlansSlice,
    loginOverlay: loginOverlaySlice,
    loginManager: loginManager,
    userInfo: userInfo,
  },
})
