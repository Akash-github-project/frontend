import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loginId: "",
	password: "",
	rememberMe: false,
};

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		remember: function (state) {
			state.rememberMe = state.rememberMe === true ? false : true;
		},
		loginId: function (state, action) {
			state.loginId = action.payload;
		},
		password: function (state, action) {
			state.password = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { remember, loginId, password } = loginSlice.actions;

export default loginSlice.reducer;
