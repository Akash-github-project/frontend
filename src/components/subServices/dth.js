import ConfirmDetails from "./confirmDetails"
import Button from "../button"
import Card from "../card"
import { Input } from "../input"
import {
  isStartingWithLength,
  isOfLength,
  isLongerThan,
} from "../../matchingFunctions"
import { isValidMobileNo } from "../usefullFunctions"
import Checkbox from "react-custom-checkbox"
import WithTextInput from "../withTextInput"
import { getRenderFormValue } from "./renderFormValue"
import { renderProvider } from "../../otherData/inputWithImage"
import SelectSearch, { fuzzySearch } from "react-select-search"
import operator from "../../otherData/dthOperator.json"
import { NumberInput } from "../numberInput"
import React, { useRef, useState } from "react"
import Wrapper from "../wrapper"
//to change
import { Formik, Form, ErrorMessage } from "formik"
import dthConfirm from "./specialJsons/dthConfirm.json"

let operatorList = operator.list.map((item) => ({
  name: item.op_name,
  value: item.op_key,
  photo: item.image,
  code: item.op_code,
  msg: item.msg,
}))

const Dth = () => {
  const [openCoupon, setCouponState] = useState(false)
  const [couponState, toggleCouponState] = useState(true)
  const [outputOperator, setOperator] = useState(operatorList)
  const [currentMsg, setCurrentMsg] = useState("")

  const [otp, setOtp] = useState(false)
  const [promo, setPromo] = useState(" ")
  const [have, setHave] = useState(false)
  const ref = useRef("")

  const initialValues = {
    operator: "",
    mobileOrSubscriber: "",
    amount: "",
  }

  const validate = (values) => {
    let validation = ref.current
    handleOperatorChange(values.operator)
    const errors = {}
    console.log(values.operator)
    if (values.operator === "") {
      errors.operator = "Please choose a service provider"
    }

    //testing for operator
    if (values.operator === "AD") {
      validation.setFieldError("mobileOrSubscriber", "", false)
      if (isStartingWithLength("1", 10, values.mobileOrSubscriber) === false) {
        errors.mobileOrSubscriber = "enter a valid subscriber no"
      }
    } else if (values.operator === "DT") {
      validation.setFieldError("mobileOrSubscriber", "", false)
      if (isStartingWithLength("0", 11, values.mobileOrSubscriber) === false) {
        errors.mobileOrSubscriber = "enter a valid subscriber no"
      }
    } else if (values.operator === "TP") {
      validation.setFieldError("mobileOrSubscriber", "", false)
      if (isStartingWithLength("1", 10, values.mobileOrSubscriber) === false) {
        if (
          isValidMobileNo(values.mobileOrSubscriber) !== "none" &&
          isStartingWithLength("1", 10, values.mobileOrSubscriber) === false
        ) {
          errors.mobileOrSubscriber = "enter a valid subscriber no or mobile no"
        }
      }
    } else if (values.operator === "vH") {
      validation.setFieldError("mobileOrSubscriber", "", false)
      if (isStartingWithLength("1", 10, values.mobileOrSubscriber) === false) {
        if (
          isValidMobileNo(values.mobileOrSubscriber) !== "none" &&
          isLongerThan(values.mobileOrSubscriber, 3) !== true
        ) {
          errors.mobileOrSubscriber = "enter a valid subscriber no or mobile no"
        }
      }
    } else if (values.operator === "SD") {
      validation.setFieldError("mobileOrSubscriber", "", false)
      if (isStartingWithLength("1", 10, values.mobileOrSubscriber) === false) {
        if (isOfLength(values.mobileOrSubscriber, 11) === false) {
          errors.mobileOrSubscriber = "enter a valid subscriber no or mobile no"
        }
      }
    }

    if (values.mobileOrSubscriber === "") {
      errors.mobileOrSubscriber = "please enter a subscriber Number"
    }
    if (values.amount === "") {
      errors.amount = "please enter a valid amount"
    }
    return errors
  }

  const renderOperator = getRenderFormValue("operator", false)
  const handleSubmit = (values) => {
    console.log(values)
  }

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
    if (value != "") {
      let currentOperator = operatorList.filter((operator) => {
        return operator.value === value
      })

      return setCurrentMsg(currentOperator[0].msg)
    } else {
      return ""
    }
  }

  return (
    <Wrapper>
      <div className="w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-11 gap-6 justify-center ">
          <div className="col-span-1 md:col-span-5">
            <Formik
              initialValues={initialValues}
              validate={validate}
              innerRef={ref}
              onSubmit={handleSubmit}>
              {(formik) => (
                <Form>
                  <div className="grid grid-cols-1 gap-4 w-full mx-auto lg:ml-auto lg:mr-8 lg:max-w-[218px] lg:mt-3">
                    <div className="w-full col-span-full font-medium leading-[19px]">
                      DTH Recharge
                    </div>
                    {/* select operator*/}

                    <div className="flex flex-col w-full ">
                      <SelectSearch
                        className="select-search "
                        options={outputOperator}
                        renderOption={renderProvider}
                        search
                        id="operator"
                        filterOptions={fuzzySearch}
                        value={formik.values.operator}
                        renderValue={renderOperator}
                        placeholder="Search Operator"
                        onChange={(value) => {
                          formik.setFieldTouched("operator", true)
                          formik.setFieldValue("operator", value, true)
                        }}
                      />

                      <span className="text-red-600 text-xs leading-3">
                        <ErrorMessage name="operator" />
                      </span>
                    </div>
                    {/*  select operator ends*/}
                    <div className="flex flex-col w-full ">
                      <Input
                        Id="mobileOrSubscriber"
                        name="mobileOrSubscriber"
                        val={formik.values.mobileOrSubscriber}
                        change={(value) =>
                          formik.setFieldValue(
                            "mobileOrSubscriber",
                            value,
                            true
                          )
                        }
                        blurFunction={formik.handleBlur}
                        extraClasses="min-h-[36px] rounded-r rounded-l-none"
                        override={{ maxWidth: "100%", flex: 1 }}
                        holder="Mobile/ Subscriber No"
                      />

                      <span className="text-red-600 text-xs leading-3">
                        <ErrorMessage name="mobileOrSubscriber" />
                      </span>
                      <span className="text-green-600 text-xs leading-3">
                        {currentMsg}
                        {/* (Subscriber ID starts with 1 and is 10 digits long. To locate
                  it, press the home button on remote.) */}
                      </span>
                    </div>

                    <div className="flex flex-col w-full">
                      <NumberInput
                        extraClasses="h-full rounded-r rounded-l-none w-full"
                        fieldClasses="border border-pink-primary w-full"
                        holder="Amount"
                        onleft="₹"
                        color="pink"
                        Id="amount"
                        name="amount"
                        val={formik.values.amount}
                        change={(value) =>
                          formik.setFieldValue("amount", value, true)
                        }
                        blur={formik.handleBlur}
                      />
                      <span className="text-red-600 text-xs leading-3">
                        <ErrorMessage name="amount" />
                      </span>
                    </div>
                    <Button text="Continue to Recharge" />

                    {/* <button className="lg:p-1 h-[36px] w-full bg-pink-primary active:bg-pink-800 text-white rounded text-[15px] lg:text-[15px] leading-[15px] font-medium text-sm"
                placeholder="Ammount"
                // onClick={handleRechargeRequest}
              >
                Continue to Recharge
              </button> */}
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          {/* <div className="hidden md:block lg:col-span-1"></div> */}
          {/* bill display section */}

          <div className="grid col-span-1 md:col-span-5 ">
            <Card
              cardConfirmList={dthConfirm}
              otp={otp}
              setOtp={(value) => setOtp(value)}
              msgCoupon="Coupon applied"
              applied={false}
              exClasses="lg:ml-4"
            />
            {/* confirm details section end*/}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Dth
