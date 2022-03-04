import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/LoginSlice";
import overlayReducer from "./features/overlaySlice";

export const store = configureStore({
	reducer: {
		login: loginReducer,
		overlay: overlayReducer,
	},
});
