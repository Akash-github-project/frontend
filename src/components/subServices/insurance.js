import ConfirmDetails from "./confirmDetails"
import Button from "../button"
import { Input } from "../input"
import Checkbox from "react-custom-checkbox"
import SelectSearch from "react-select-search"
import Card from "../card"
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
import insuranceConfirm from "./specialJsons/insuranceConfirm.json"
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
    dob: "",
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
    // console.log(values)

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
    // console.log(errors)
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
                        iType="tel"
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
            <Card
              cardConfirmList={insuranceConfirm}
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

export default Insurance
