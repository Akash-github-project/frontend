import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/LoginSlice";
import overlayReducer from "./features/overlaySlice";
import prepaidPlansSlice from "./features/prepaidPlansSlice";
import loginOverlaySlice from "./features/loginOverlaySlice";

export const store = configureStore({
	reducer: {
		login: loginReducer,
		overlay: overlayReducer,
		prepaidPlan: prepaidPlansSlice,
		loginOverlay: loginOverlaySlice,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				// Ignore these action types
				ignoredActions: ["storeElement"],
			},
		}),
});
