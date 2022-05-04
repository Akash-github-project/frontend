import Card from "../card"
import Button from "../button"
import { Input } from "../input"
import WithTextInput from "../withTextInput"
import Checkbox from "react-custom-checkbox"
import React, { useState, useRef } from "react"
import Wrapper from "../wrapper"
import SelectSearch from "react-select-search"
import { getRenderFormValue } from "./renderFormValue"
import { Formik, ErrorMessage, Form } from "formik"
//to change
import gasConfirm from "./specialJsons/gasConfirm.json"
import gasProvider from "./specialJsons/GasProivder.json"
import recents from "./specialJsons/recents.json"

const GasLpg = () => {
  const [openCoupon, setCouponState] = useState(false)
  const [couponState, toggleCouponState] = useState(true)
  const [providerList, setProviderList] = useState([])

  const [otp, setOtp] = useState(false)
  const [promo, setPromo] = useState(" ")
  const [have, setHave] = useState(false)
  const rendnerProvider = getRenderFormValue("serviceProvider")

  const initialValue = {
    serviceType: "",
    serviceProvider: "",
    consumerNo: "",
  }

  const validationRef = {
    serviceType: "",
    serviceProvider: "",
  }

  //service change handler
  const handleServiceChange = (value) => {
    console.log(value)
    // setServiceType(e.target.value)
    const pipe = [...gasProvider.pipe]
    const cylinder = [...gasProvider.cylinder]

    if (value === "cylinder") setProviderList([...cylinder])
    else if (value === "pipe") setProviderList([...pipe])
    else setProviderList([])
  }

  const validate = (values) => {
    const errors = {}

    handleServiceChange(values.serviceType)
    if (values.serviceType === "") {
      errors.serviceType = "Please select a sevice type"
    }

    if (values.consumerNo === "") {
      errors.consumerNo = "consumer number can't be empty"
    }

    if (values.serviceProvider === "") {
      errors.serviceProvider = "Please select a sevice provider"
    }

    if (values.serviceType === "pipe" && values.consumerNo.length < 10) {
      errors.consumerNo = "Invaid Consumer No"
    } else if (
      values.serviceType === "cylinder" &&
      values.consumerNo.length < 17
    ) {
      errors.consumerNo = "Invaid Consumer No"
    }

    return errors
  }

  const handleSubmit = (values) => {
    console.log(values)
  }

  //this is for coupon
  const setCls = () => {
    let x = " "
    setPromo(x)
    setOtp(false)
  }
  const handleApplyCoupon = () => {
    toggleCouponState(!couponState)
  }

  const handleServiceSelect = (e) => {
    console.log(e.target.value)
  }

  //need to work here to complete
  return (
    <Wrapper>
      <div className="w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 justify-center">
          <div className="col-span-1 md:col-span-6">
            <Formik
              initialValues={initialValue}
              onSubmit={handleSubmit}
              validate={validate}>
              {(formik) => (
                <Form>
                  <div className="grid grid-cols-1 gap-3 w-full mx-auto lg:ml-auto lg:mr-4 lg:max-w-[335px] lg:mt-3">
                    <div className="w-full col-span-full font-medium leading-[19px]">
                      Pay for Gas &amp; LPG
                    </div>
                    {/* select gas service type*/}
                    <div className="flex flex-col w-full h-[48px]">
                      <select
                        name="serviceType"
                        id="serviceType"
                        value={formik.serviceType}
                        placeholder="Gas Cylinder/Gas Pipes"
                        // onChange={handleServiceChange}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="lg:w-full  h-full border border-pink-600 rounded text-gray-primary bg-white flex-1">
                        <option value="" className="text-inherit">
                          Select A Service Type
                        </option>
                        <option value="cylinder" className="text-inherit">
                          Gas Cylinder
                        </option>
                        <option value="pipe" className="text-inherit">
                          Gas Pipe
                        </option>
                      </select>
                      {/* //error for this block */}
                      <span className="text-xs text-red-600 w-full h-3">
                        <ErrorMessage name="serviceType" />
                      </span>
                    </div>
                    {/*  select gas service type ends*/}

                    {/* select operator starts  */}

                    <div className="flex flex-col w-full h-[48px]">
                      <SelectSearch
                        options={providerList}
                        value={formik.values.serviceProvider}
                        renderValue={rendnerProvider}
                        name="circle"
                        placeholder="Select A Gas Provider"
                        onChange={(value) => {
                          formik.setFieldTouched("serviceProvider", true)
                          formik.setFieldValue("serviceProvider", value, true)
                        }}
                      />

                      <span className="text-xs text-red-600">
                        <ErrorMessage name="serviceProvider" />
                      </span>
                    </div>
                    {/* select operator ends  */}

                    <div className="flex flex-col w-full h-[48px]">
                      <Input
                        iType="tel"
                        Id="consumerNo"
                        name="consumerNo"
                        numbersOnly={true}
                        maxlen={
                          formik.values.serviceType === "pipe"
                            ? 10
                            : formik.values.serviceType === "cylinder"
                            ? 17
                            : 0
                        }
                        val={formik.values.consumerNo}
                        change={(value) =>
                          formik.setFieldValue("consumerNo", value, true)
                        }
                        blurFunction={formik.handleBlur}
                        holder="Consumer No"
                        extraClasses="text-gray-primary max-h-[36px]"
                        override={{ maxWidth: "100%", flex: 1 }}
                      />
                      <span className="text-xs text-red-600">
                        <ErrorMessage name="consumerNo" />
                      </span>
                    </div>
                    <Button text="Get Bill Details" type="submit" />
                  </div>
                </Form>
              )}
            </Formik>
            <div className="w-full lg:max-w-[335px]  rounded bg-blue-200 text-xs leading-3 text-blue-800 p-2 mx-auto mt-2 lg:mr-4 lg:ml-auto">
              Your service provider will take two working days to consider bill
              paid in their accounts.
            </div>
          </div>

          {/* <div className="hidden md:block lg:col-span-1"></div> */}
          {/* bill display section */}

          <div className="grid col-span-1 md:col-span-5 ">
            {/* confirm details section end*/}

            <Card
              cardConfirmList={gasConfirm}
              otp={otp}
              setOtp={(value) => setOtp(value)}
              msgCoupon="Coupon applied"
              applied={false}
              exClasses="lg:ml-4"
            />
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

export default GasLpg
