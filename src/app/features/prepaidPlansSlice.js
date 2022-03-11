import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	plansList: [],
	plansInfo: "",
	phoneNo: "",
	operator: {},
	selectedPlan: "",
	circle: "",
};

export const prepaidPlan = createSlice({
	name: "prepaidPlan",
	initialState,
	reducers: {
		clearAll: function (state) {
			state.plansList = [];
			state.plansInfo = "";
			state.phoneNo = "";
			state.operator = {};
			state.selectedPlan = "";
			state.circle = "";
		},
		storePlansList: function (state, action) {
			state.overlayContent = action.payload;
		},
		storetPlansInfo: function (state, action) {
			state.plansInfo = [...action.payload];
		},
		storePhoneNo: function (state, action) {
			state.phoneNo = action.payload;
		},
		storeOperator: function (state, action) {
			state.operator = action.payload;
		},
		storeSelectPlan: function (state, action) {
			state.selectedPlan = action.payload;
		},
		storeCircle: function (state, action) {
			state.circle = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	clearAll,
	storeOperator,
	storePhoneNo,
	storePlansList,
	storetPlansInfo,
	storeSelectPlan,
	storeCircle,
} = prepaidPlan.actions;
export default prepaidPlan.reducer;
