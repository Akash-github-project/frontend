import ConfirmDetails from "./confirmDetails"
import Button from "../button"
import { Input } from "../input"
import Checkbox from "react-custom-checkbox"
import SelectSearch from "react-select-search"
import provider from "../../otherData/insuranceProvider.json"
import { useState } from "react"
import { Formik, Form, ErrorMessage } from "formik"
import { getRenderFormValue } from "./renderFormValue"
import { formatDate } from "../dateFormatter"
import insuranceProviderDateFormat from "../../otherData/includeList.json"
import { isThisOnList, isValidMobileNo } from "../usefullFunctions"
import Wrapper from "../wrapper"
import WithTextInput from "../withTextInput"
//to change
import dthConfirm from "./specialJsons/insuranceConfirm.json"
import DatePicker from "../date"

const Insurance = () => {
  const [openCoupon, setCouponState] = useState(false)
  const [couponState, toggleCouponState] = useState(true)
  const [insuranceProvider, setinsuranceProvider] = useState(provider)
  const [currentMsg, setCurrentMsg] = useState("")
  const [inputType, setInputType] = useState("text")
  const [showDateOfBirth, setShowDateOfBirth] = useState(false)
  const [otp, setOtp] = useState(false)
  const [promo, setPromo] = useState(" ")
  const [have, setHave] = useState(false)
  const renderInsuranceProvider = getRenderFormValue("provider")

  //form validation section
  const initialValues = {
    provider: "",
    policyNo: "",
    dob: new Date(),
    mobileNo: "",
  }

  const handleShouldShowDob = (value) => {
    if (
      isThisOnList(
        value,
        insuranceProviderDateFormat.insuranceProviderDateFormat
      ) === "none"
    ) {
      setShowDateOfBirth(false)
    } else {
      setShowDateOfBirth(true)
    }
  }

  const handleSubmit = (values) => {
    console.log(values)
  }

  const validate = (values) => {
    const errors = {}
    console.log(values)

    handleShouldShowDob(values.provider)
    if (values.provider === "") {
      errors.provider = "please select a Insurance Provider"
    }

    if (values.policyNo === "") {
      errors.policyNo = "please enter a policy number"
    }

    if (isValidMobileNo(values.mobileNo) !== "none") {
      errors.mobileNo = isValidMobileNo(values.mobileNo)
    }
    if (showDateOfBirth === true) {
      if (values.dob === "") {
        errors.dob = "select a date"
      }
    }
    console.log(errors)
    return errors
  }

  //form validation ends here

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
                      Pay for insurance
                    </div>
                    {/* select operator*/}

                    <div className="flex flex-col w-full ">
                      <SelectSearch
                        options={insuranceProvider.insuranceList}
                        value={formik.values.provider}
                        renderValue={renderInsuranceProvider}
                        placeholder="Select An Insurance Provider"
                        onChange={(value) => {
                          formik.setFieldTouched("provider", true)
                          formik.setFieldValue("provider", value, true)
                        }}
                      />

                      <span className="text-xs text-red-600 h-3">
                        <ErrorMessage name="provider" />
                      </span>
                    </div>
                    <div className="flex flex-col w-full ">
                      <Input
                        extraClasses="min-h-[36px] rounded-r rounded-l-none"
                        Id="policyNo"
                        name="policyNo"
                        blurFunction={formik.handleBlur}
                        change={(value) =>
                          formik.setFieldValue("policyNo", value, true)
                        }
                        val={formik.values.policyNo}
                        override={{ maxWidth: "100%", flex: 1 }}
                        holder="policy no"
                      />

                      <span className="text-xs text-red-600 h-3">
                        <ErrorMessage name="policyNo" />
                      </span>
                    </div>

                    {showDateOfBirth === false ? null : (
                      <div className="flex flex-col w-full ">
                        {/* <DatePicker
                          id="date"
                          name="date"
                          change={(value) =>
                            formik.setFieldValue("dob", value, true)
                          }
                          blur={formik.handleBlur}
                          value={formik.values.dob}
                        /> */}
                        <Input
                          extraClasses="min-h-[36px] rounded-r rounded-l-none"
                          override={{ maxWidth: "100%", flex: 1 }}
                          holder="Date Of Birth"
                          iType="date"
                          Id="dob"
                          name="dob"
                          val={formik.values.dob}
                          change={(value) =>
                            formik.setFieldValue("dob", value, true)
                          }
                          blurFunction={formik.handleBlur}
                        />

                        <span className="text-xs text-red-600 h-3">
                          <ErrorMessage name="dob" />
                        </span>
                      </div>
                    )}
                    {/*  select operator ends*/}
                    <div className="flex flex-col w-full ">
                      <Input
                        Id="mobileNo"
                        name="mobileNo"
                        val={formik.values.mobileNo}
                        change={(value) =>
                          formik.setFieldValue("mobileNo", value, true)
                        }
                        blurFunction={formik.handleBlur}
                        extraClasses="min-h-[36px] rounded-r rounded-l-none"
                        override={{ maxWidth: "100%", flex: 1 }}
                        holder="Mobile No"
                        iType="tel"
                      />

                      <span className="text-xs text-red-600 h-3">
                        <ErrorMessage name="mobileNo" />
                      </span>
                    </div>

                    <Button text="Get Premium Details" />
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
            <div
              className={`grid grid-cols-2 w-full lg:w-[348px] border mx-auto lg:ml-0 mt-4 md:mt-0 `}>
              {/* card details section start*/}
              <ConfirmDetails dataPlan={dthConfirm} />
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

export default Insurance
