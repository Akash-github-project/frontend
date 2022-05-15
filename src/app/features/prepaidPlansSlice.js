import { createSlice } from "@reduxjs/toolkit"

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
  couponVal: "",
  couponState: true,
  amount: "",
  couponLegal: false,
  isValidAmount: false,
}

export const prepaidPlan = createSlice({
  name: "prepaidPlan",
  initialState,
  reducers: {
    clearAll: function (state) {
      state.plansList = []
      state.plansInfo = {}
      state.phoneNo = ""
      state.operator = {}
      state.selectedPlan = ""
      state.circle = ""
      state.showPlan = false
      state.confirmBillState = false
      state.couponLegal = false
      state.couponState = true
      state.couponVal = ""
      state.isValidAmount = false
      state.amount = ""
    },
    clearAllExceptAmount: function (state) {
      state.plansList = []
      state.plansInfo = {}
      state.phoneNo = ""
      state.operator = {}
      state.selectedPlan = ""
      state.circle = ""
      state.showPlan = false
      state.confirmBillState = false
      state.couponLegal = false
      state.couponState = true
      state.couponVal = ""
      state.isValidAmount = false
    },
    storeAmount: function (state, action) {
      state.amount = action.payload
    },
    storeCouponVal: function (state, action) {
      state.couponVal = action.payload
    },

    toggleCouponState: function (state) {
      state.couponState = !state.couponState
    },
    storeCouponLegal: function (state, action) {
      state.couponLegal = action.payload
    },
    storeRenderType: function (state, action) {
      state.renderType = action.payload
    },
    storeShowPlan: function (state, action) {
      state.showPlan = action.payload
    },
    storePlansList: function (state, action) {
      state.overlayContent = action.payload
    },
    storetPlansInfo: function (state, action) {
      state.plansInfo = { ...action.payload }
    },
    storePhoneNo: function (state, action) {
      state.phoneNo = action.payload
    },
    storeOperator: function (state, action) {
      state.operator = action.payload
    },
    storeSelectPlan: function (state, action) {
      state.selectedPlan = action.payload
    },
    storeCircle: function (state, action) {
      state.circle = action.payload
    },
    showConfirmBill: function (state, action) {
      state.confirmBillState = action.payload
    },
    setAmountValid: function (state, action) {
      state.isValidAmount = action.payload
    },
  },
})

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
  storeCouponLegal,
  storeCouponVal,
  toggleCouponState,
  setAmountValid,
  storeAmount,
} = prepaidPlan.actions
export default prepaidPlan.reducer
