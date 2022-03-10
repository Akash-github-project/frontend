import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	plansInfo: "",
	phoneNo: "",
	operator: "",
	selectedPlan: "",
	circle: "",
};

export const overlaySlice = createSlice({
	name: "prepaidMobile",
	initialState,
	reducers: {
		toggleOverlay: function (state) {
			state.overlayStatus = state.overlayStatus === true ? false : true;
		},
		addContent: function (state, action) {
			state.overlayContent = action.payload;
		},
		clearDetails: function (state) {
			state.overlayStatus = false;
			state.overlayContent = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggleOverlay, addContent, clearDetails } = overlaySlice.actions;
export default overlaySlice.reducer;
