import { Formik, Form, ErrorMessage } from "formik"
import Card from "../card"
import Button from "../button"
import { Input } from "../input"
import { getRenderFormValue } from "./renderFormValue"
import Checkbox from "react-custom-checkbox"
import provider from "../../otherData/waterPorvider.json"
import { useState } from "react"
import Wrapper from "../wrapper"
import SelectSearch from "react-select-search"

import WithTextInput from "../withTextInput"
//to change
import waterConfirm from "./specialJsons/waterConfirm.json"

const Water = () => {
  const [openCoupon, setCouponState] = useState(false)
  const [couponState, toggleCouponState] = useState(true)
  const [waterProvider, setWaterProvider] = useState(provider)
  const [currentMsg, setCurrentMsg] = useState("")

  const [otp, setOtp] = useState(false)
  const [promo, setPromo] = useState(" ")
  const [have, setHave] = useState(false)

  //initial values
  const initialValues = {
    provider: "",
    subscriberNo: "",
  }

  const renderProvider = getRenderFormValue("provider")
  const handleSubmit = (values) => {
    console.log(values)
  }

  const validate = (values) => {
    const errors = {}

    if (values.provider === "") {
      errors.provider = "please select a water provider"
    }
    if (values.subscriberNo === "") {
      errors.subscriberNo = "Please enter a subscriber number"
    }

    return errors
  }

  const setCls = () => {
    let x = " "
    setPromo(x)
    setOtp(false)
  }
  const handleApplyCoupon = () => {
    toggleCouponState(!couponState)
  }

  const handleProviderChange = (value) => {
    console.log(value)
  }
  return (
    <Wrapper>
      <div className="w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 justify-center ">
          <div className="col-span-1 md:col-span-6">
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={handleSubmit}>
              {(formik) => (
                <Form>
                  <div className="grid grid-cols-1 gap-4 w-full mx-auto lg:ml-auto lg:mr-4 lg:max-w-[335px] lg:mt-3">
                    <div className="w-full col-span-full font-medium leading-[19px]">
                      Pay for Water
                    </div>
                    {/* select operator*/}
                    <div className="flex flex-col">
                      <SelectSearch
                        options={waterProvider.waterList}
                        value={formik.values.provider}
                        renderValue={renderProvider}
                        placeholder="Select A Water Provider"
                        onChange={(value) => {
                          formik.setFieldTouched("provider", true)
                          formik.setFieldValue("provider", value, true)
                        }}
                      />
                      <span className="text-red-600 text-xs leading-3 h-3">
                        <ErrorMessage name="provider" />
                      </span>
                    </div>

                    <div className="flex flex-col w-full ">
                      <Input
                        change={(value) =>
                          formik.setFieldValue("subscriberNo", value, true)
                        }
                        val={formik.values.subscriberNo}
                        blurFunction={formik.handleBlur}
                        Id="subscriberNo"
                        iType="tel"
                        numbersOnly={true}
                        name="subscriberNo"
                        extraClasses="min-h-[36px] rounded-r rounded-l-none"
                        override={{ maxWidth: "100%", flex: 1 }}
                        holder="Subscriber No"
                      />
                      <span className="text-red-600 text-xs leading-3 h-3">
                        <ErrorMessage name="subscriberNo" />
                      </span>
                    </div>

                    <Button text="Fetch Bill" type="submit" />
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
            <Card
              cardConfirmList={waterConfirm}
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

export default Water
