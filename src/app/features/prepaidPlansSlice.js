import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	plansList: [],
	plansInfo: {},
	phoneNo: "",
	operator: {},
	selectedPlan: "",
	circle: "",
	showPlan: false,
	renderType: "desktop",
	confirmBillState: false,
};

export const prepaidPlan = createSlice({
	name: "prepaidPlan",
	initialState,
	reducers: {
		clearAll: function (state) {
			state.plansList = [];
			state.plansInfo = {};
			state.phoneNo = "";
			state.operator = {};
			state.selectedPlan = "";
			state.circle = "";
			state.showPlan = false;
			state.confirmBillState = false;
		},
		storeRenderType: function (state, action) {
			state.renderType = action.payload;
		},
		storeShowPlan: function (state, action) {
			state.showPlan = action.payload;
		},
		storePlansList: function (state, action) {
			state.overlayContent = action.payload;
		},
		storetPlansInfo: function (state, action) {
			state.plansInfo = { ...action.payload };
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
		showConfirmBill: function (state, action) {
			state.confirmBillState = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	clearAll,
	storeShowPlan,
	storeOperator,
	storePhoneNo,
	storeRenderType,
	storePlansList,
	storetPlansInfo,
	storeSelectPlan,
	storeCircle,
	showConfirmBill,
} = prepaidPlan.actions;
export default prepaidPlan.reducer;
