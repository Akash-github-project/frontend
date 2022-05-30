import React, { useState, useRef } from "react"
import SimpleModal from "./userpages/simpleModal"
import axios from "axios"
import Wrapper from "./wrapper"
import Button from "./button"
import { BASE_ROUTE } from "./routes"
import { NumberInput } from "./numberInput"
import { isValidEmail, isValidMobileNo } from "./usefullFunctions"
import { Input } from "./input"
import { Formik, Form, ErrorMessage } from "formik"
import { useSelector } from "react-redux"

const Suggestions = () => {
  const [fileName, changeName] = useState("Select a File...")
  const [referenceNo, setReferenceNo] = useState("")
  const [sizeNumber, setSizeNumber] = useState(0)
  const [postfix, setPostfix] = useState("")
  const [isFileError, changeError] = useState({
    isError: false,
    errorMessage: "",
  })
  const fileRef = useRef(false)
  const [openModal, setOpenModal] = useState(false)
  const isUserLogged = useSelector((state) => state.loginManager.isUserLogged)
  const userInfo = useSelector((state) => state.userInfo.userInfo)

  const options = [
    { name: "Select a value", value: "sv" },
    { name: "Website Improvement", value: "Website Improvement" },
    { name: "Feedback", value: "Feedback" },
    { name: "Suggestions", value: "Suggestions" },
    { name: "Issue/Complain", value: "Issue/Complain" },
    { name: "General Query", value: "General Query" },
    { name: "Wallet Payment Issue", value: "Wallet Payment Issue" },
    { name: "Giftcards", value: "Giftcards" },
  ]

  // file cheaking function

  const initialFormValues = {
    customerName: Object.keys(userInfo).length === 0 ? "" : userInfo.name,
    email: Object.keys(userInfo).length === 0 ? "" : userInfo.email,
    phoneNo: Object.keys(userInfo).length === 0 ? "" : userInfo.mobile,
    msgType: "none",
    query: "",
  }

  const validate = (values) => {
    const errors = {}
    if (!values.customerName) {
      errors.customerName = "customer name can't be empty"
    }
    if (isValidEmail(values.email) != "none") {
      errors.email = isValidEmail(values.email)
    }
    if (isValidMobileNo(values.phoneNo) != "none") {
      errors.phoneNo = isValidMobileNo(values.phoneNo)
    }
    if (values.msgType === "none") {
      errors.msgType = "please select a message type"
    }
    if (!values.query) {
      errors.query = "please enter some description aboard your query"
    }
    console.log(errors)
    return errors
  }

  const handleFileUpload = () => {
    if (fileRef.current.files) {
      if (fileRef.current.files[0]) {
        if (fileRef.current.files[0].size / 1024 >= 1024) {
          setPostfix("MB")
          setSizeNumber(fileRef.current.files[0].size / (1024 * 1024))
        } else {
          setPostfix("KB")
          setSizeNumber(fileRef.current.files[0].size / 1024)
        }
      }
    }

    changeName(fileRef.current.files[0].name)
    if (fileRef.current.files[0].size / (1024 * 1024) > 2) {
      changeError({
        isError: true,
        errorMessage: "file size cannot be more than 2MB",
      })
      return
    } else {
      changeError({ isError: false, errorMessage: "" })
    }

    console.log(fileRef.current.files[0])

    let uploadFileName = fileRef.current.files[0].name

    let extension = uploadFileName.substring(
      uploadFileName.lastIndexOf(".") + 1,
      uploadFileName.length
    )
    extension = extension.toLowerCase()

    if (
      extension !== "jpeg" &&
      extension !== "jpg" &&
      extension !== "pdf" &&
      extension !== "png"
    ) {
      changeError({
        isError: true,
        errorMessage: "Allowed attachment is : pdf, jpg, jpeg, png",
      })
    } else {
      changeError({ isError: false, errorMessage: "" })
    }
  }

  const submitForm = (values, formikBag) => {
    formikBag.setSubmitting(false)
    if (isFileError.isError) return
    else {
      const formData = new FormData()
      formikBag.setSubmitting(true)
      formData.append(
        "file",
        fileRef.current.files ? fileRef.current.files[0] : null
      )
      formData.append("name", values.customerName)
      formData.append("email", values.email)
      formData.append("mobile", values.phoneNo)
      formData.append("messagetype", values.msgType)
      formData.append("query", values.query)
      formData.append("mode", "web")
      formData.append("username", "someusername")

      axios
        .post(`${BASE_ROUTE}/postsuggestion`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data)
          if (res.data.Status !== undefined && res.data.Status === "Success") {
            setReferenceNo(res.data["Reference Number"])
            setOpenModal(true)
            changeName("Select a File...")
            setPostfix("")
            setSizeNumber(0)
            formikBag.resetForm()
            formikBag.setSubmitting(false)
          }
        })
    }
  }
  return (
    <Wrapper>
      <div className="w-full">
        <div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
          <h1 className="text-white text-[18px] py-[10px] px-1 ">
            Suggestions
          </h1>
        </div>

        <div className="py-2 px-1 md:p-3 border border-white border-b-gray-200  ">
          <h2 className="text-2xl font-medium">Send A Request</h2>
        </div>

        <div className="text-gray-primary text-sm py-4">
          Please fill out the form below. we will get back to you within a
          couple of hours.
        </div>
        <Formik
          initialValues={{ ...initialFormValues }}
          validate={validate}
          onSubmit={submitForm}>
          {(formik) => (
            <Form>
              <div className="grid grid-col-1 md:grid-cols-2 gap-2 ">
                <div className="flex flex-col gap-2">
                  <div className="w-full flex">
                    <span className="text-gray-primary req text-sm leading-[14px]">
                      Name
                    </span>

                    <span className="text-red-600 text-xs h-3 ml-auto">
                      <ErrorMessage name="customerName" />
                    </span>
                  </div>
                  <Input
                    name="customerName"
                    Id="customerName"
                    val={formik.values.customerName}
                    change={(value) =>
                      formik.setFieldValue("customerName", value, true)
                    }
                    blurFunction={() =>
                      formik.setFieldTouched("customerName", true)
                    }
                    holder="Name"
                    override={{ maxWidth: "100%" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="w-full flex">
                    <span className="text-gray-primary req text-sm leading-[14px]">
                      Email
                    </span>

                    <span className="text-red-600 text-xs h-3 ml-auto">
                      <ErrorMessage name="email" />
                    </span>
                  </div>
                  <Input
                    Id="email"
                    name="email"
                    change={(value) =>
                      formik.setFieldValue("email", value, true)
                    }
                    blurFunction={() => formik.setFieldTouched("email", true)}
                    val={formik.values.email}
                    holder="Email"
                    override={{ maxWidth: "100%" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="w-full flex">
                    <span className="text-gray-primary req  text-sm leading-[14px]">
                      Mobile
                    </span>
                    <span className="text-red-600 text-xs h-3  ml-auto">
                      <ErrorMessage name="phoneNo" />
                    </span>
                  </div>
                  <NumberInput
                    maxlen={10}
                    numbersOnly={true}
                    name="phoneNo"
                    Id="phoneNo"
                    iType="tel"
                    val={formik.values.phoneNo}
                    change={(value) =>
                      formik.setFieldValue("phoneNo", value, true)
                    }
                    blur={() => formik.setFieldTouched("phoneNo", true)}
                    holder="Mobile Number"
                    fieldClasses="border border-pink-primary focus-within:border-blue-500 focus-within:border-2"
                    override={{ maxWidth: "100%" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="w-full flex">
                    <span className="text-gray-primary req text-sm leading-[14px]">
                      Message Type
                    </span>

                    <span className="text-red-600 text-xs h-3 ml-auto">
                      <ErrorMessage name="msgType" />
                    </span>
                  </div>
                  <select
                    name="msgType"
                    id="msgType"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.msgType}
                    className="w-full border border-pink-primary p-1 rounded text-gray-600 bg-white h-[36px]">
                    {options.map((element) => (
                      <option value={element.value} className="text-gray-600">
                        {element.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-full flex flex-col row-span-5 gap-2 ">
                  <div className="w-full flex">
                    <span className="text-gray-primary req text-sm leading-[14px]">
                      Query
                    </span>

                    <span className="text-red-600 text-xs h-3 ml-auto">
                      <ErrorMessage name="query" />
                    </span>
                  </div>

                  <textarea
                    name="query"
                    id="query"
                    value={formik.values.query}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border  border-pink-primary focus-within:border-1 focus-within:border-blue-400 outline-none rounded min-h-[7rem] text-gray-600 text-base p-[11px]"
                    placeholder="Specify your query"></textarea>
                </div>

                <div className="col-span-full text-left text-gray-primary text-sm">
                  Attachment file (Max 2MB) Only PDF/Image (JPE/JPEG/PNG)
                </div>

                <div
                  className="text-gray-primary flex flex-col msg text-sm "
                  data-message=" ">
                  <div className="flex items-center w-full gap-1">
                    <input
                      ref={fileRef}
                      type="file"
                      name=""
                      id="file"
                      accept=".pdf,.jpeg,.jpg,.png"
                      className="hidden"
                      title="select a file"
                      onChange={handleFileUpload}
                    />
                    <div className="flex border border-pink-primary w-full py-1 px-1 rounded">
                      <span className="mr-10 text-gray-600">{fileName}</span>
                    </div>
                    <label
                      htmlFor="file"
                      className="p-1 bg-pink-primary text-white hover:bg-gray-500 min-w-max rounded text-md">
                      Attach file
                    </label>
                  </div>
                  <div
                    className={`${
                      isFileError === true ? "hidden" : "inline-block"
                    } text-red-600`}>
                    {isFileError.errorMessage}
                  </div>
                </div>
                <div></div>
                <div className="border border-pink-primary rounded py-1 text-sm px-1">
                  <span className="text-gray-600 inline-block">
                    Size:
                    {`${
                      sizeNumber.toFixed(2) == 0 ? "" : sizeNumber.toFixed(2)
                    } ${postfix}`}
                  </span>
                </div>
                <div></div>
                <Button
                  text={`${
                    formik.isSubmitting === false ? "Submit" : "Please wait ..."
                  }`}
                  dis={formik.isSubmitting}
                  type="submit"
                  exClasses="self-end mt-4"
                />
              </div>
              <SimpleModal
                size={false}
                open={openModal}
                height={false}
                closeModal={() => setOpenModal(false)}
                exClasses="px-1 py-1 md:h-[15rem] top-1/4 bottom-1/2">
                <div className="h-full w-full flex justify-center items-center">
                  <div className="text-center text-xl">
                    <p className="text-gray-primary">
                      Thank you for your Feedback.
                    </p>
                    <br />
                    <span className="text-gray-primary ">
                      We will reach you within 24 hours reference no is
                      <br />
                    </span>
                    <span className="text-lg px-4">{referenceNo}</span>
                  </div>
                </div>
              </SimpleModal>
            </Form>
          )}
        </Formik>
      </div>
    </Wrapper>
  )
}

export default Suggestions
