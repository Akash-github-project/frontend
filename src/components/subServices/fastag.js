import ConfirmDetails from "./confirmDetails"
import Button from "../button"
import { Input } from "../input"
import Checkbox from "react-custom-checkbox"
import React, { useState } from "react"
import { ErrorMessage, FormikProvider, useFormik } from "formik"
import Wrapper from "../wrapper"
import SelectSearch from "react-select-search"

import WithTextInput from "../withTextInput"
//to change
import fastagConfirm from "./specialJsons/fastagConfirm.json"
import fastagProvider from "../../otherData/fastagProvider.json"
import "../../css/grids.css"

const Fastag = () => {
  const [openCoupon, setCouponState] = useState(false)
  const [couponState, toggleCouponState] = useState(true)

  const [otp, setOtp] = useState(false)
  const [promo, setPromo] = useState(" ")
  const [have, setHave] = useState(false)

  const validate = (values) => {
    console.log(values)
    const errors = {}
    if (values.fastagProvider === "none") {
      errors.fastagProvider = "please select a fastag provider"
    }
    if (!values.vechileNo) {
      errors.vechileNo = "vechile no can't be empty"
    }
    if (!values.amouont) {
      errors.amouont = "amount can't be empty"
    }
    console.log(values)
    console.log(errors)
    return { ...errors }
  }
  const formik = useFormik({
    initialValues: {
      fastagProvider: "none",
      vechileNo: "",
      amount: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  function renderFontValue(valueProps, snapshot, className) {
    const { option } = snapshot
    const style = {
      fontFamily:
        !snapshot.focus && option && "stack" in option ? option.stack : null,
    }
    const inputVal = snapshot.focus ? snapshot.search : snapshot.displayValue
    return (
      <input
        {...valueProps}
        className={className}
        style={style}
        name="fastagProvider"
        value={inputVal}
      />
    )
  }

  const setProps = (field, value) => {
    formik.setFieldValue(field, value)
  }

  const setCls = () => {
    let x = " "
    setPromo(x)
    setOtp(false)
  }
  const handleApplyCoupon = () => {
    toggleCouponState(!couponState)
  }

  return (
    <Wrapper>
      <div className="w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 justify-center">
          <div className="col-span-1 md:col-span-4 ">
            <form
              className="grid grid-cols-1 gap-3 w-full mx-auto justiry-center"
              onSubmit={formik.handleSubmit}>
              {/* <div className="w-full col-span-full font-medium leading-[19px]"> */}
              <div className="col-span-full grid input-width-grid4 lg:justify-center gap-4 ">
                <span>Pay for Fastag</span>
                <span className="hidden lg:block"></span>
                <span className="hidden lg:block"></span>
              </div>
              {/* select fastag service type*/}
              <div className="col-span-full grid input-width-grid4 lg:justify-center gap-4 ">
                <div className="flex flex-col w-full h-[36px]">
                  <SelectSearch
                    options={fastagProvider.fastag}
                    value={formik.values.fastagProvider}
                    placeholder="Select A Fastag Provider"
                    id="fastagProvider"
                    onChange={(value) => {
                      formik.setFieldTouched("fastagProvider")
                      return formik.setFieldValue("fastagProvider", value, true)
                    }}
                    renderValue={renderFontValue}
                  />

                  <span className="text-red-600 h-3 text-xs">
                    {formik.errors.fastagProvider &&
                    formik.touched.fastagProvider
                      ? formik.errors.fastagProvider
                      : null}
                    {formik.touched.fastagProvider}
                  </span>
                </div>

                <div className="flex flex-col w-full h-[36px]">
                  <Input
                    iType="tel"
                    Id="vechileNo"
                    name="vechileNo"
                    val={formik.values.vechileNo}
                    blurFunction={() => formik.setFieldTouched("vechileNo")}
                    change={(value) => setProps("vechileNo", value)}
                    holder="Vechile No"
                    extraClasses="text-gray-primary"
                    override={{ maxWidth: "100%", flex: 1 }}
                  />
                  <span className="text-red-600 h-3 text-xs">
                    {formik.errors.vechileNo && formik.touched.vechileNo
                      ? formik.errors.vechileNo
                      : null}
                    {formik.touched.vechileNo}
                  </span>
                </div>

                <div className="flex flex-col w-full h-[36px]">
                  <Input
                    iType="tel"
                    Id="amount"
                    val={formik.values.amount}
                    blurFunction={() => formik.setFieldTouched("amount")}
                    numbersOnly={true}
                    maxlen={6}
                    change={(value) => setProps("amount", value)}
                    name="amount"
                    holder="Amount of fastag"
                    extraClasses="text-gray-primary"
                    override={{ maxWidth: "100%", flex: 1 }}
                  />
                  <span className="text-red-600 h-3 text-xs">
                    {formik.errors.amouont && formik.touched.amouont
                      ? formik.errors.amouont
                      : null}
                    {formik.touched.amouont}
                  </span>
                </div>
                <button
                  className="lg:p-1 h-[36px] w-full bg-pink-primary active:bg-pink-800 text-white rounded text-[15px] lg:text-[15px] leading-[15px] font-medium text-sm"
                  type="submit"
                  placeholder="Amount">
                  Continue to Recharge
                </button>
              </div>
              {/* se */}
            </form>
          </div>
        </div>

        <div>
          {/* bill display section */}

          <div className="grid col-span-1 md:col-span-5 lg:mt-4 lg:mx-auto">
            <div
              className={`grid grid-cols-2 w-full lg:w-[348px] border mx-auto mt-4 md:mt-0 `}>
              {/* card details section start*/}
              <ConfirmDetails dataPlan={fastagConfirm} />
              {/* card details section end*/}

              {/* ammount showing section start */}
              <div className="p-1 bg-gray-200 font-medium text-black text-left px-1 py-2">
                Total Amount:
              </div>
              <div className="p-1 bg-gray-200 font-medium text-black text-right px-1 py-2">
                Rs 1000
              </div>
              {/* ammount showing section end*/}

              {/* Apply coupon section start*/}
              <div className="capitalize col-span-full text-xs mt-1">
                <span
                  className="inline-block w-full text-center cursor-pointer hover:text-black text-sm"
                  onClick={() => setHave(!have)}>
                  Apply Coupon code
                  <i
                    className={`fas fa-chevron-${
                      openCoupon ? "up" : "down"
                    } text-xs mx-1 hover:text-black`}></i>
                </span>
                {/* Apply coupon input start */}

                <div className="mx-auto flex items-center scale-90 w-3/5">
                  {have ? (
                    <>
                      <WithTextInput
                        change={(e) => setPromo(e.target.value)}
                        val={promo}
                        disable={otp ? true : false}
                        text={
                          otp ? <i className="fa-solid fa-trash-can"></i> : " "
                        }
                        textClick={setCls}
                        exClasses={`${otp ? "" : " mx-auto "} `}
                      />
                      {otp ? null : (
                        <Button click={() => setOtp(true)} text="Apply" />
                      )}
                    </>
                  ) : null}
                </div>
                {/* Apply coupon input end*/}
              </div>
              {/* Apply coupon section end*/}
              <div
                className={`${
                  openCoupon ? "" : "hidden"
                } col-span-full text-xs mt-1 text-green-600 text-center`}>
                some demo message
              </div>

              <div className="col-span-full flex mt-1">
                {/* wallet balance section start */}
                <div className="flex ml-1 items-center">
                  <Checkbox
                    borderColor="#f5317c"
                    icon={
                      <i class="fa-solid fa-square-check text-pink-600"></i>
                    }
                    id="payFromWallet"
                  />
                  <label
                    htmlFor="payFromWallet"
                    className="ml-1 text-gray-primary text-sm">
                    Wallet Balance
                  </label>
                </div>
                <span className="ml-auto mr-1 text-gray-800 font-semibold">
                  {3343}
                </span>
              </div>
              {/* wallet balance section start */}

              {/* pay ammount button section start */}
              <div className=" col-span-full py-2">
                <Button
                  text="Pay Rs 1000 "
                  exClasses="w-full "
                  fClasses="text-[15px] leading-[15px]"
                />
              </div>
              {/* pay ammount button section end*/}
            </div>

            {/* confirm details section end*/}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Fastag
