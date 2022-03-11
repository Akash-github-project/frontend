import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/LoginSlice";
import overlayReducer from "./features/overlaySlice";
import prepaidPlansSlice from "./features/prepaidPlansSlice";

export const store = configureStore({
	reducer: {
		login: loginReducer,
		overlay: overlayReducer,
		prepaidPlan: prepaidPlansSlice,
	},
});
