import ConfirmDetails from "./confirmDetails"
import Button from "../button"
import Checkbox from "react-custom-checkbox"
import React, { useState } from "react"
import { getRenderFormValue } from "./renderFormValue"
import Wrapper from "../wrapper"
import { Formik, Form, ErrorMessage } from "formik"
//to change
import WithTextInput from "../withTextInput"
import electricityConfirm from "./specialJsons/ElectricityConfirm.json"
import electricityState from "./specialJsons/ElectricityStateList.json"
import SelectSearch from "react-select-search"
import recents from "./specialJsons/recents.json"
import { Radio, InputLabel } from "@mui/material"
import Card from "../card"

const Electricity = () => {
  const [openCoupon, setCouponState] = useState(false)
  const [couponState, toggleCouponState] = useState(true)
  const [boardList, setBoardList] = useState(electricityState)
  const [currentBoard, setCurrentBoard] = useState([])

  const [otp, setOtp] = useState(false)
  const [promo, setPromo] = useState(" ")
  const [have, setHave] = useState(false)

  const inittialState = {
    state: "",
    circle: "",
    consumerId: "",
  }

  const setCls = () => {
    let x = " "
    setPromo(x)
    setOtp(false)
  }
  const handleApplyCoupon = () => {
    toggleCouponState(!couponState)
  }

  let renderCircle = getRenderFormValue("circle")
  const handleSubmit = (values) => {
    console.log(values)
  }

  const validate = (values) => {
    const errors = {}
    console.log(values.state)
    handleStateChange(values.state)

    if (values.state === "" || values.state === "Select State") {
      errors.state = "Select A State"
    }

    if (values.circle === "") {
      errors.circle = "select an electricity board"
    }

    if (values.consumerId === "") {
      errors.consumerId = "please enter consumser id"
    }

    if (values.consumerId.length < 2) {
      errors.consumerId = "invalid consumer id"
    }
    return errors
  }

  const handleStateChange = (value) => {
    console.log(value)
    //work req
    let currentBoard = boardList.Names.filter((operator) => {
      return operator.stateName === value
    })

    if (value != "") {
      console.log(currentBoard[0].boards)
      let requiredFormatData = currentBoard[0].boards.map(
        (eachElectricProvider) => ({
          name: eachElectricProvider,
          value: eachElectricProvider,
        })
      )

      setCurrentBoard(requiredFormatData)
    }

    // setCurrentBoard(currentBoard[0].boards)
  }
  return (
    <Wrapper>
      <div className="w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 justify-center">
          <Formik
            initialValues={inittialState}
            validate={validate}
            onSubmit={handleSubmit}>
            {(formik) => (
              <Form className="col-span-1 md:col-span-6">
                <div className="grid grid-cols-1 gap-4 w-full mx-auto lg:ml-auto lg:mr-4 lg:max-w-[335px] lg:mt-3">
                  <div className="w-full col-span-full font-medium leading-[19px]">
                    Pay For Electriciry
                  </div>
                  {/* select operator*/}

                  <div className="flex gap-1">
                    <Radio
                      value="special"
                      id="spc"
                      onClick={() => console.log("clicked")}
                      checked={true}
                      style={{ padding: "1px" }}
                      size="small"
                    />
                    <InputLabel
                      htmlFor="spc"
                      style={{ fontSize: "14px", marginRight: "1rem" }}>
                      Electricity Boards
                    </InputLabel>
                  </div>

                  <div className="flex flex-col w-full">
                    <select
                      name="state"
                      id="state"
                      value={formik.values.state}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="lg:w-full h-[36px] border border-pink-600 rounded text-gray-primary bg-white">
                      {boardList.Names.map((stateObj) => (
                        <option
                          value={stateObj.stateName}
                          className="lg:max-w-[218px] text-inherit">
                          {stateObj.stateName}
                        </option>
                      ))}
                    </select>
                    <span className="text-xs text-red-600 h-3">
                      <ErrorMessage name="state" />
                    </span>
                  </div>
                  {/*  select operator ends*/}

                  {currentBoard.length === 0 ? null : (
                    <div className="flex flex-col w-full">
                      <SelectSearch
                        options={currentBoard}
                        value={formik.values.circle}
                        renderValue={renderCircle}
                        placeholder="Select An Electricity Board "
                        onChange={(value) => {
                          formik.setFieldTouched("circle", true)
                          formik.setFieldValue("circle", value, true)
                        }}
                      />
                      <span className="text-xs text-red-600 h-3">
                        <ErrorMessage name="circle" />
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col w-full">
                    <WithTextInput
                      name="consumerId"
                      val={formik.values.consumerId}
                      Id="consumerId"
                      numbersOnly={true}
                      change={(value) =>
                        formik.setFieldValue("consumerId", value, true)
                      }
                      blur={formik.handleBlur}
                      placeholder="Consumer No"
                      text="View Sample Bill"
                    />

                    <span className="text-xs text-red-600 h-3">
                      <ErrorMessage name="consumerId" />
                    </span>
                  </div>
                  <Button text="Get Bill Details" />
                </div>

                <div className="w-full lg:max-w-[335px]  rounded bg-blue-200 text-xs leading-3 text-blue-800 p-2 mx-auto mt-2 lg:mr-4 lg:ml-auto">
                  Your service provider will take two working days to consider
                  bill paid in their accounts.
                </div>
              </Form>
            )}
          </Formik>

          {/* <div className="hidden md:block lg:col-span-1"></div> */}
          {/* bill display section */}

          <div className="grid col-span-1 md:col-span-5 ">
            <Card
              cardConfirmList={electricityConfirm}
              otp={otp}
              setOtp={(value) => setOtp(value)}
              msgCoupon="Coupon applied"
              applied={false}
              exClasses="lg:ml-4"
            />
            {/* confirm details section end*/}
          </div>
        </div>

        <div className="bg-white border mt-4 grid grid-cols-1 lg:grid-cols-5 lg:p-2">
          <div className=" hidden lg:block lg:col-span-2"></div>
          <div className="col-span-full lg:col-span-3 grid gap-1 border   bg-white p-1">
            <div className="w-full col-span-full">Recents</div>
            <div className="shadow-default grid gap-1 p-2">
              {recents.list.map((item) => (
                <div className="flex w-full h-[36px]">
                  <span className="p-2 flex-1 text-xs md:text-sm lg:text-md text-gray-primary">
                    {item.heading}
                  </span>
                  <span className="p-2 flex-1 text-xs md:text-sm lg:text-md text-gray-primary">
                    {item.number}
                  </span>

                  <button
                    className=" border border-pink-primary w-[75px] hover:bg-pink-primary hover:text-white rounded text-inherit  "
                    data-val={item.id}>
                    <span
                      className="mx-auto text-inherit hover:text-white"
                      data-val={item.id}>
                      Pay Bill
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Electricity
