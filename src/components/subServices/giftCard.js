import ConfirmDetails from "./confirmDetails"
import Button from "../button"
import LoginWrapper from "../LoginWrapper"
import LoginModal from "../userpages/loginModal"
import { useSelector } from "react-redux"
import { Input } from "../input"
import Checkbox from "react-custom-checkbox"
import React, { useState } from "react"
import WithTextInput from "../withTextInput"
import Wrapper from "../wrapper"
import { useFormik } from "formik"
//to change
import giftCardConfirm from "./specialJsons/giftCardConfirm.json"
import "../../css/grids.css"
import { NumberInput } from "../numberInput"

const GiftCard = () => {
  const [openCoupon, setCouponState] = useState(false)
  const [couponState, toggleCouponState] = useState(true)
  const [giftCardProvider, setGiftCardProvider] = useState("googlePay")
  const userLogged = useSelector((state) => state.login.isUserLogged)
  const [valid, setValid] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [otp, setOtp] = useState(false)
  const [promo, setPromo] = useState(" ")
  const [have, setHave] = useState(false)

  const setCls = () => {
    let x = " "
    setPromo(x)
    setOtp(false)
  }

  const handleSubmit = (values) => {
    if (userLogged) {
      setValid(true)
    } else {
      setOpenModal(true)
    }
    console.log(values)
  }

  const validate = (values) => {
    const errors = {}
    if (values.provider === "none") {
      errors.provider = "Select a Giftcard Provider"
    }
    if (values.amount === "") {
      errors.amount = "please enter a amount"
    }
    console.log(errors)
    return { ...errors }
  }

  const formik = useFormik({
    initialValues: {
      amount: "",
      provider: "none",
    },
    validate,
    onSubmit: (value) => handleSubmit(value),
  })

  const setTouched = () => {
    formik.setFieldTouched("amount", true)
    formik.setFieldTouched("provider", true, true)
    formik.validateForm()
  }
  const handleApplyCoupon = () => {
    toggleCouponState(!couponState)
  }

  const handleServiceChange = (e) => {
    console.log(e.target.value)
    setGiftCardProvider(e.target.value)
    console.log("test")
  }
  return (
    <Wrapper>
      <div className="w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 justify-center">
          <form
            className="col-span-1 md:col-span-4 "
            onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 gap-4 w-full mx-auto justify-center">
              {/* <div className="w-full col-span-full font-medium leading-[19px]"> */}

              <div className="col-span-full grid input-width-grid3 lg:justify-center gap-4">
                <span>Pay for Gift Card</span>
                <span className="hidden lg:block"></span>
                <span className="hidden lg:block"></span>
              </div>
              {/* select giftcard service type*/}
              <div className="col-span-full grid input-width-grid3 lg:justify-center gap-4 ">
                <div className="flex flex-col">
                  <select
                    required={true}
                    name="provider"
                    id="provider"
                    value={formik.values.provider}
                    placeholder="Gas Cylinder/Gas Pipes"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="lg:w-full h-[36px] border border-pink-600 rounded text-gray-primary bg-white lg:max-w-[335px]">
                    <option value="none" className="text-inherit">
                      Select A Gift Card Provider
                    </option>
                    <option value="googlePlay" className="text-inherit">
                      Google Play E-Gift Card
                    </option>
                    <option value="amazonPay" className="text-inherit">
                      Amazon Gift Card
                    </option>
                  </select>
                  <span className="h-3 text-red-600 text-xs">
                    {formik.errors.provider && formik.touched.provider
                      ? formik.errors.provider
                      : null}
                  </span>
                </div>
                {/*  select gift card service type ends*/}

                <div className="flex w-full flex-col ">
                  <NumberInput
                    numbersOnly={true}
                    Id="amount"
                    fieldClasses="border border-pink-primary focus-within:border-2 focus-within:border-blue-500"
                    name="amount"
                    blur={() => formik.setFieldTouched("amount")}
                    change={(value) => formik.setFieldValue("amount", value)}
                    iType="tel"
                    holder="Amount"
                    extraClasses="text-gray-primary"
                    override={{ maxWidth: "100%", flex: 1 }}
                  />
                  <span className="h-3 text-red-600 text-xs">
                    {formik.errors.amount && formik.touched.amount
                      ? formik.errors.amount
                      : null}
                  </span>
                </div>
                <Button
                  text="Continue to Recharge"
                  type="submit"
                  onClick={() => setTouched()}
                />
              </div>
              <LoginModal
                closeModal={() => setOpenModal(false)}
                open={openModal}>
                <LoginWrapper />
              </LoginModal>
            </div>
          </form>
        </div>

        <div>
          {/* bill display section */}

          <div className="grid col-span-1 md:col-span-5 lg:mt-4 lg:mx-auto">
            <div
              className={`grid grid-cols-2 w-full lg:w-[348px] border mx-auto mt-4 md:mt-0 `}>
              {/* card details section start*/}
              <ConfirmDetails dataPlan={giftCardConfirm} />
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
                  fClasses="text-[13px] leading-[13px]"
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

export default GiftCard
