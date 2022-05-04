import Button from "../button"
import LoginWrapper from "../LoginWrapper"
import LoginModal from "../userpages/loginModal"
import { useSelector } from "react-redux"
import React, { useState } from "react"
import Wrapper from "../wrapper"
import { useFormik } from "formik"
//to change
import giftCardConfirm from "./specialJsons/giftCardConfirm.json"
import "../../css/grids.css"
import { NumberInput } from "../numberInput"
import Card from "../card"

const GiftCard = () => {
  const [couponState, toggleCouponState] = useState(true)
  const [giftCardProvider, setGiftCardProvider] = useState("googlePay")
  const userLogged = useSelector((state) => state.login.isUserLogged)
  const [valid, setValid] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [otp, setOtp] = useState(false)
  const [promo, setPromo] = useState(" ")

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
                    fieldClasses="border border-pink-primary focus-within:border-2 focus-within:border-blue-500 h-[36px]"
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
            <Card
              cardConfirmList={giftCardConfirm}
              otp={otp}
              setOtp={(value) => setOtp(value)}
              msgCoupon="Coupon applied"
              applied={false}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default GiftCard
