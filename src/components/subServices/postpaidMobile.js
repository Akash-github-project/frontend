import React, { useState, useRef } from "react"
import ConfirmDetails from "./confirmDetails"
import Card from "../card"
import LoginModal from "../userpages/loginModal"
import LoginWrapper from "../LoginWrapper"
import { renderProvider } from "../../otherData/inputWithImage"
import SelectSearch, { fuzzySearch } from "react-select-search"
import { useFormik } from "formik"
import Button from "../button"
import WithTextInput from "../withTextInput"
import Checkbox from "react-custom-checkbox"
import { NumberInput } from "../numberInput"
import circle from "../../otherData/circle.json"
import { useSelector } from "react-redux"
import { getRenderFormValue } from "./renderFormValue"
import operator from "../../otherData/postpaidOperator.json"
import { isValidMobileNo } from "../usefullFunctions"
import postpaidConfirm from "./specialJsons/postpaidConfirm.json"
import "../../css/grids.css"

let operatorList = operator.list.map((item) => ({
  name: item.op_name,
  value: item.op_key,
  photo: item.image,
  code: item.op_code,
}))

let circleList = circle.list.map((item) => ({
  name: item.name,
  value: JSON.stringify({ code: item.code, name: item.name }),
}))

const PostpaidMobile = () => {
  const validationRef = useRef({
    phoneNo: "",
    circle: "",
    operator: "",
  })

  const [valid, setValid] = useState(false)
  const [outputOperator, setOperator] = useState(operatorList)
  const [outputCircle, setCircle] = useState(circleList)
  const [openCoupon, setCouponState] = useState(false)
  const [couponState, toggleCouponState] = useState(true)
  const [otp, setOtp] = useState(false)
  const [promo, setPromo] = useState(" ")
  const [have, setHave] = useState(false)
  const ref = useRef({ circle: "", phoneNo: "", operator: "" })
  let circleRender = getRenderFormValue("circle")
  let operatorRender = getRenderFormValue("operator")
  const [openModal, setOpenModal] = useState(false)
  const userLogged = useSelector((state) => state.login.isUserLogged)

  const setCls = () => {
    let x = " "
    setPromo(x)
    setOtp(false)
  }

  const handleApplyCoupon = () => {
    toggleCouponState(!couponState)
  }

  const handleOperatorChange = (value) => {
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
    setCircle([...filterCircle])
  }

  function handleSubmit(value) {
    if (userLogged) {
      setValid(true)
    } else {
      setOpenModal(true)
    }
    console.log(value)
  }

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
      formik.setFieldError("circle", "")
      formik.setFieldError("operator", "")
      formik.setFieldError("amount", "")
      return { ...errors }
    }
    console.log(validationRef.operator !== values.operator)

    if (validationRef.operator !== values.operator) {
      console.log(validationRef.operator !== values.operator, "texting")
      formik.setFieldValue("circle", "", false)
      formik.setFieldValue("amount", "", false)

      validationRef.operator = values.operator
      validationRef.circle = ""

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

    return { ...errors }
  }
  const handleCircleChange = (value) => {
    console.log(value)
  }

  const formik = useFormik({
    initialValues: {
      phoneNo: "",
      circle: "",
      operator: "",
    },
    validate,
    onSubmit: (value) => handleSubmit(value),
  })

  const setProps = (field, value) => {
    formik.setFieldValue(field, value)
  }

  return (
    <div>
      <form
        className="grid grid-cols-1 gap-4 lg:gap-2 xl:gap-3 w-full mx-auto input-width-grid"
        onSubmit={formik.handleSubmit}>
        <div className="flex flex-col h-auto">
          <NumberInput
            iType="tel"
            val={formik.values.phoneNo}
            blur={() => formik.setFieldTouched("phoneNo")}
            change={(value) => setProps("phoneNo", value)}
            maxlen={10}
            numbersOnly={true}
            onleft="+91-"
            id="phoneNo"
            holder="Mobile Number"
            // change={value => dispatch(storePhoneNo(value))}
            extraClasses=" text-sm focus:text-gray-primary text-base"
            fieldClasses="border-pink-600 focus:outline-none focus-within:border-blue-400 flex-1 h-[36px] "
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
        <div className="flex flex-col h-auto">
          <SelectSearch
            className="select-search "
            options={outputOperator}
            renderOption={renderProvider}
            id="operator"
            value={formik.values.operator}
            filterOptions={fuzzySearch}
            renderValue={operatorRender}
            placeholder="Search Operator"
            onChange={(value) => {
              formik.setFieldTouched("operator")
              return formik.setFieldValue("operator", value, true)
            }}
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
        <div className="flex flex-col h-auto">
          <SelectSearch
            options={outputCircle}
            value={formik.values.circle}
            id="circle"
            renderValue={circleRender}
            name="circle"
            placeholder="Circle"
            onChange={(value) => {
              formik.setFieldTouched("circle")
              return formik.setFieldValue("circle", value, true)
            }}
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
        <button
          type="submit"
          className="p-3 lg:p-1 bg-pink-primary active:bg-pink-800 text-white rounded text-[15px] lg:text-[13px] leading-[13px] font-medium lg:ml-4 text-sm h-[36px]"
          // onClick={handleRechargeRequest}
        >
          Fetch Bill
        </button>
      </form>

      <LoginModal
        closeModal={() => setOpenModal(false)}
        open={openModal}
        exClasses="px-3 py-3 pb-1">
        <LoginWrapper />
      </LoginModal>
      {/* bill display section */}

      <div className="grid items-center justify-center">
        <Card
          cardConfirmList={postpaidConfirm}
          otp={otp}
          setOtp={(value) => setOtp(value)}
          msgCoupon="Coupon applied"
          applied={false}
        />
        {/* confirm details section end*/}
      </div>
    </div>
  )
}

export default PostpaidMobile
