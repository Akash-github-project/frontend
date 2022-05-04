import React, { useState, useEffect, useReducer, useRef } from "react"
import LoginWrapper from "../LoginWrapper"
import Card from "../card"
import LoginModal from "../userpages/loginModal"
import prepaidConfirm from "./specialJsons/prepaidConfirm.json"
import WithTextInput from "../withTextInput"
import Checkbox from "react-custom-checkbox"
import SelectSearch, { fuzzySearch } from "react-select-search"
import operator from "../../otherData/operator.json"
import ConfirmDetails from "./confirmDetails"
import { getRenderFormValue } from "./renderFormValue"
import circle from "../../otherData/circle.json"
import { Radio, RadioGroup, InputLabel } from "@mui/material"
import { renderProvider } from "../../otherData/inputWithImage"
import "../../css/searchWithImages.css"
import "../../css/selectSearch.css"
import dataPlan from "./dataPlan.json"
import prepaidChangeJson from "./specialJsons/preapidChangeList.json"
import { useFormik } from "formik"
import { NumberInput } from "../numberInput"
import { isValidMobileNo } from "../usefullFunctions"
import MobileView from "./mobileView"
import { Input } from "../input"
import Button from "../button"

// imports for using redux
import { useSelector, useDispatch } from "react-redux"
import {
  storePhoneNo,
  storeCircle,
  storeOperator,
  storeShowPlan,
  storeRenderType,
  showConfirmBill,
  toggleCouponState,
} from "../../app/features/prepaidPlansSlice"
import { toggleUserLogged } from "../../app/features/LoginSlice"
import { addElement, toggleOverlay } from "../../app/features/overlaySlice"
import axios from "axios"

//converts circle list from default
let circleList = circle.list.map((item) => ({
  name: item.name,
  value: JSON.stringify({ code: item.code, name: item.name }),
}))

let operatorList = operator.list.map((item) => ({
  name: item.op_name,
  value: item.op_key,
  photo: item.image,
  code: item.op_code,
}))

const initialState = {
  mobileNo: "none",
  operator: "none",
  circle: "none",
  amount: "none",
}

const PrepaidMobile = ({ open }) => {
  const [outputCircle, setCircle] = useState(circleList)
  const cir = useRef(circle)
  const ref = useRef({ circle: "", phoneNo: "", operator: "" })
  const [fakeRadio, setFakeRadio] = useState(true)

  const [otp, setOtp] = useState(false)
  const [promo, setPromo] = useState(" ")

  const [outputOperator, setOperator] = useState(operatorList)
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false)
  const userLogged = useSelector((state) => state.login.isUserLogged)
  const phoneNo = useSelector((state) => state.prepaidPlan.phoneNo)
  const Operator = useSelector((state) => state.prepaidPlan.operator)
  const circle2 = useSelector((state) => state.prepaidPlan.circle)
  const planInfo = useSelector((state) => state.prepaidPlan.plansInfo)
  const billState = useSelector((state) => state.prepaidPlan.confirmBillState)
  const couponState = useSelector((state) => state.prepaidPlan.couponState)
  const renderCircle = getRenderFormValue("circle")
  const render = getRenderFormValue("operator")

  const giveCircleValue = (code) => {
    console.log(code)

    let list = cir.current.list.map((item) => ({
      name: item.code,
      value: JSON.stringify({ code: item.code, name: item.name }),
    }))
    let list2 = list.filter((each) => each.name === code)
    console.log(list2)

    return list2[0]
  }

  const giveOperatorValue = (code, circleCode) => {
    let x = operator.list2
    // md of dl
    let keys = Object.keys(x)
    let ret = keys.filter((val) => x[`${val}`].includes(code) === true)
    console.log("operator ----", ret[0])

    if (circleCode === "MU" && code === "DP") {
      return "MM"
    } else if (circleCode === "DL" && code === "DP") {
      return "MD"
    } else {
      return ret[0]
    }
  }

  const clearErrors = (errorsFields) => {
    errorsFields.forEach((element) => {
      formik.setFieldError(element, "")
    })
    console.log(errorsFields)
  }
  //validate function of formik
  const validate = (values) => {
    const errors = {}
    let validationRef = ref.current

    if (values.phoneNo === "") {
      errors.phoneNo = "please enter a mobile no"
    }
    if (isValidMobileNo(values.phoneNo) !== "none") {
      errors.phoneNo = isValidMobileNo(values.phoneNo)
    }
    if (validationRef.phoneNo != values.phoneNo) {
      validationRef.phoneNo = values.phoneNo
      // clearErrors(["hello", "bolle", "hello"])
      formik.setFieldValue("circle", "", false)
      formik.setFieldValue("operator", "", false)
      formik.setFieldValue("amount", "", false)
      if (isValidMobileNo(values.phoneNo) == "none") {
        axios
          .get(
            `https://open-api.plansinfo.com/mobile/operator-circle?number=${values.phoneNo}`
          )
          .then(function (response) {
            console.log(response)
            let c = giveCircleValue(response.data.data.circle)
            console.log(c)
            if (response.data.status === "OK") {
              formik.setFieldValue("circle", c.value, false)
              formik.setFieldError("circle", "")
              formik.setFieldError("operator", "")
              formik.setFieldError("amount", "")
              console.log(response.data.data.circle)

              formik.setFieldValue(
                "operator",
                giveOperatorValue(
                  response.data.data.operator,
                  response.data.data.circle
                ),
                false
              )
              handleOperator(
                giveOperatorValue(
                  response.data.data.operator,
                  response.data.data.circle
                )
              )
              // validationRef.circle = response.data.data.circle
              validationRef.operator = giveOperatorValue(
                response.data.data.operator,
                response.data.data.circle
              )
              validationRef.circle = response.data.data.circle

              console.log(response.data.data.operator)
            } else {
              formik.setFieldError("phoneNo", "invalid MobileNo")
            }
          })
          .catch(function (error) {
            console.log(error)
            return { status: "ErrorHappened" }
          })
      } else {
        errors.phoneNo = "Invalid Mobile No"
      }
    }
    console.log(validationRef.operator !== values.operator)

    if (validationRef.operator !== values.operator) {
      console.log(validationRef.operator !== values.operator, "texting")
      formik.setFieldValue("circle", "", false)
      formik.setFieldValue("amount", "", false)

      validationRef.operator = values.operator
      validationRef.circle = ""
      validationRef.amount = ""

      handleOperator(values.operator)
    } else if (validationRef.operator === "") {
      errors.operator = "select an operator"
    }
    if (values.circle === "") {
      errors.circle = "select a circle"
    }

    console.log(validationRef.circle != values.circle)
    if (validationRef.circle != values.circle) {
      console.log("circle changed")
      formik.setFieldValue("amount", "", false)
      validationRef.circle = values.circle
      validationRef.amount = ""
    } else if (values.circle === "") {
      errors.circle = "Please select a circle"
    }
    if (values.amount === "") {
      errors.amount = "please enter a valid amount"
    }
    return { ...errors }
  }

  function HandleSubmit() {
    showModal()
  }
  //useFromik hook
  const formik = useFormik({
    initialValues: {
      phoneNo: "",
      circle: "",
      operator: "",
      amount: "",
      mode: "web",
    },
    validate,
    onSubmit: (value) => HandleSubmit(value),
  })

  useEffect(() => {
    if (planInfo.amount !== undefined) {
      formik.setFieldValue("amount", planInfo.amount, false)
    }
  }, [planInfo.amount])

  const setProps = (field, value) => {
    formik.setFieldValue(field, value)
  }

  let circleProvider = getRenderFormValue("circle")
  let operatorProvider = getRenderFormValue("operator")

  let changeLst = [...prepaidChangeJson.data]
  let couponLegal = useSelector((state) => state.prepaidPlan.couponLegal)

  useEffect(() => {
    if (Object.keys(Operator).length > 0 && circle.length > 1) {
    }
  }, [Operator, circle])

  /*changes circle accorging to selected operator*/
  function handleOperator(value) {
    console.log(value)
    let filterCircle = circleList.filter((element) => {
      let toCompare = JSON.parse(element.value)

      if ("MM" === value) {
        return toCompare.code === "MU"
      } else if ("MD" === value) {
        return toCompare.code === "DL"
      } else if ("BS" === value) {
        return !(toCompare.code === "DL" || toCompare.code === "MU")
      } else return true
    })

    let currentOperator = operatorList.filter((operator) => {
      return operator.value === value
    })

    console.log(currentOperator)
    console.log([...filterCircle], "filter circle")
    setCircle([...filterCircle])
    // dispatch(storeOperator(currentOperator[0]))
  }

  const setCls = () => {
    let x = " "
    setPromo(x)
    setOtp(false)
  }

  const handlePlansRequest = () => {
    formik.setTouched({
      phoneNo: true,
      operator: true,
      circle: true,
    })
    formik.validateForm()
    if (Object.keys(formik.touched).length != 0) {
      let x = formik.values
      if (
        x.phoneNo.length != 0 &&
        x.operator.length != 0 &&
        x.circle.length != 0
      ) {
        setTimeout(show, 400)
      }
    }
  }

  const show = () => {
    if (
      formik.errors.mobileNo === undefined &&
      formik.errors.operator === undefined &&
      formik.errors.circle === undefined
    ) {
      dispatch(storeCircle(formik.values.circle))
      dispatch(storeOperator(formik.values.operator))
      dispatch(storeShowPlan(true))
      console.log(formik.values.circle, "cirlce")
      console.log(formik.values.operator, "operator")
      if (window.innerWidth > 820) dispatch(storeRenderType("desktop"))
      else {
        // dispatch(addElement(<MobileView />))
        dispatch(storeRenderType("mobile"))
        open()
        // dispatch(toggleOverlay())
      }
    }
  }

  const handleFakeRadio = (e) => {}

  const handleRechargeRequest = () => {
    let err = formik.errors.touched

    formik.setTouched({
      phoneNo: true,
      operator: true,
      circle: true,
      amount: true,
    })
    formik.validateForm()
  }

  function showModal() {
    if (userLogged) {
      dispatch(showConfirmBill(true))
    } else {
      setOpenModal(true)
    }
  }

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-2 xl:gap-3 w-full mx-auto">
        {/* change={(value) => dispatch(storePhoneNo(value))} */}
        <div className="flex flex-col h-auto ">
          <NumberInput
            iType="tel"
            val={formik.values.phoneNo}
            blur={() => formik.setFieldTouched("phoneNo")}
            change={(value) => setProps("phoneNo", value)}
            onleft="+91-"
            id="phoneNo"
            holder="Mobile Number"
            name="phoneNo"
            maxlen={10}
            numbersOnly={true}
            extraClasses="text-gray-primary "
            fieldClasses="border-pink-600 focus:outline-none focus-within:border-blue-400 flex-1 min-h-[36px] w-full"
          />
          <span className="h-3 text-red-600 text-xs">
            {/* {isValid.mobileNo === "" || isValid.mobileNo === "none"
              ? null
              : isValid.mobileNo} */}
            {formik.errors.phoneNo && formik.touched.phoneNo
              ? formik.errors.phoneNo
              : null}
          </span>
        </div>

        {/* onChange={(value) => handleOperator(value)} */}
        <div className="flex flex-col h-auto">
          <SelectSearch
            value={formik.values.operator}
            className="select-search"
            options={outputOperator}
            renderOption={renderProvider}
            placeholder="Search Operator"
            onChange={(value) => {
              formik.setFieldTouched("operator")
              return formik.setFieldValue("operator", value, true)
            }}
            renderValue={operatorProvider}
          />
          <span className="h-3 text-red-600 text-xs">
            {/* {isValid.operator === "none" || isValid.operator === ""
              ? null
              : isValid.operator} */}
            {formik.errors.operator && formik.touched.operator
              ? formik.errors.operator
              : null}
          </span>
        </div>
        {/* circle dropdown */}

        {/* onChange={(value) => dispatch(storeCircle(value))} */}
        <div className="flex flex-col h-auto">
          <SelectSearch
            options={outputCircle}
            value={formik.values.circle}
            name="circle"
            placeholder="Circle"
            onChange={(value) => {
              formik.setFieldTouched("circle")
              return formik.setFieldValue("circle", value, true)
            }}
            renderValue={circleProvider}
          />

          <span className="h-3 text-red-600 text-xs">
            {formik.errors.circle && formik.touched.circle
              ? formik.errors.circle
              : null}
            {/* {isValid.circle === "none" || isValid.circle === ""
              ? null
              : isValid.circle} */}
          </span>
        </div>
        {/* spacially made custom input box just for this page to show view plans */}
        <div className="rounded flex flex-col">
          <WithTextInput
            maxlen={5}
            numbersOnly={true}
            placeholder="Amount"
            text="View Plans"
            val={formik.values.amount}
            blur={() => formik.setFieldTouched("amount")}
            change={(value) => setProps("amount", value)}
            textClick={() => handlePlansRequest()}
          />

          {formik.errors.amount && formik.touched.amount ? (
            <span className="h-3 text-red-600 text-xs">
              {formik.errors.amount}
            </span>
          ) : null}
        </div>

        {/* this div should only be visible in mobile mode */}
        <div
          className={
            Object.keys(planInfo).length === 0
              ? "hidden  "
              : " " +
                "text-[11px] leading-[11px] text-green-info text-justify lg:hidden"
          }>
          {planInfo.benefit} | Validity:{planInfo.validity}
        </div>
        {/* only visible in mobile mode  {useless radio button for bsnl}*/}
        <div
          className={`${
            formik.values.operator !== "CG" ? "hidden" : "inline-block"
          } lg:hidden`}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-bsnl"
            defaultValue="special"
            name="radio-buttons-bsnl"
            row={true}
            style={{ display: "flex", alignItems: "center" }}>
            <Radio
              value="special"
              id="spc"
              onClick={handleFakeRadio}
              style={{ padding: "1px" }}
              size="small"
            />
            <InputLabel
              htmlFor="spc"
              style={{ fontSize: "14px", marginRight: "1rem" }}>
              Special
            </InputLabel>
            <Radio
              value="topup"
              id="top"
              onClick={handleFakeRadio}
              style={{ padding: "1px" }}
              size="small"
            />
            <InputLabel htmlFor="top" style={{ fontSize: "14px" }}>
              Topup
            </InputLabel>
          </RadioGroup>
        </div>

        {/* button of recharge */}
        <button
          className="p-3 lg:p-1 bg-pink-primary active:bg-pink-800 text-white rounded text-[15px] lg:text-[13px] leading-[13px] font-medium lg:ml-4 max-h-[36px]"
          type="submit"
          onClick={handleRechargeRequest}>
          Continue to Recharge
        </button>

        <LoginModal closeModal={() => setOpenModal(false)} open={openModal}>
          <LoginWrapper />
        </LoginModal>
      </form>
      {/* row 2 for information display */}
      <div className="hidden lg:grid grid-col-1 md:grid-cols-5 gap-3 w-full">
        <div className="lg:block md:col-span-3"></div>
        <small
          className={
            Object.keys(planInfo).length === 0
              ? "hidden  "
              : " " +
                "col-span-2 text-[11px] leading-[11px] text-green-info text-justify pr-4"
          }>
          {planInfo.benefit} | Validity:{planInfo.validity}
        </small>
      </div>
      {/* row 3 for special case of bsnl to show topup and spacial offer options */}
      {/* <FormControl> */}
      <div
        className={`hidden ${
          formik.values.operator !== "CG" ? "hidden" : " lg:grid"
        } grid-col-1 md:grid-cols-5 gap-3 w-full self-end `}>
        <div className="md:block md:col-span-3"></div>
        <div className="md:col-span-2">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-big-bsnl"
            defaultValue="special"
            name="radio-buttons-group"
            row={true}
            style={{ display: "flex", alignItems: "center" }}>
            <Radio
              value="special"
              id="rspc"
              name="bsnlRType"
              onClick={handleFakeRadio}
              style={{ padding: "1px" }}
              size="small"
            />
            <InputLabel
              htmlFor="rspc"
              style={{ fontSize: "14px", marginRight: "1rem" }}>
              Special
            </InputLabel>
            <Radio
              value="topup"
              id="rtop"
              name="bsnlRType"
              onClick={handleFakeRadio}
              style={{ padding: "1px" }}
              size="small"
            />
            <InputLabel htmlFor="rtop" style={{ fontSize: "14px" }}>
              Topup
            </InputLabel>
          </RadioGroup>
        </div>
      </div>
      {/* </FormControl> */}
      {/* confirm details section start*/}
      {billState === false ? null : (
        <Card
          cardConfirmList={prepaidConfirm}
          otp={otp}
          setOtp={(value) => setOtp(value)}
          msgCoupon="Coupon applied"
          applied={false}
        />
      )}
      {/* confirm details section end*/}
    </>
  )
}

export default PrepaidMobile

// if bsnl--> not avilable in mumbai and delhi
// if mtnl delhi --> only delhi
// if mtnl mumbai --> only mumbai
