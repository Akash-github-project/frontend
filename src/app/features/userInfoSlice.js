import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userInfo: {},
}

export const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: function name(state, action) {
      state.userInfo = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserInfo } = userInfo.actions

export default userInfo.reducer
