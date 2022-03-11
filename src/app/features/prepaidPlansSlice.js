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
		setPlanList: function (state, action) {
			state.overlayContent = action.payload;
		},
		setPlansInfo: function (state, action) {
			state.plansInfo = [...action.payload];
		},
		setPhoneNo: function (state, action) {
			state.phoneNo = action.payload;
		},
		setOperator: function (state, action) {
			state.operator = { ...action.payload };
		},
		setSelectPlan: function (state, action) {
			state.selectedPlan = action.payload;
		},
		setCircle: function (state, action) {
			state.circle = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	clearAll,
	setOperator,
	setPhoneNo,
	setPlanList,
	setPlansInfo,
	setSelectPlan,
	setCircle,
} = prepaidPlan.actions;
export default prepaidPlan.reducer;
