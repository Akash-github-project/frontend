import React, { useState, useRef } from "react"
import Wrapper from "./wrapper"
import Button from "./button"
import { NumberInput } from "./numberInput"
import { isValidEmail, isValidMobileNo } from "./usefullFunctions"
import { Input } from "./input"
import { Formik, Form, ErrorMessage } from "formik"

const Suggestions = () => {
  const [fileName, changeName] = useState("Select a File...")
  const [isFileError, changeError] = useState({
    isError: false,
    errorMessage: "",
  })
  const fileRef = useRef(false)

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

  let postfix = ""
  let sizeNumber = 0

  // const fileChecker = (userFile) => {
  //   fileRef.current.files
  //   if (userFile) {
  //     if (userFile.size / 1024 >= 1024) {
  //       postfix = "MB"
  //       sizeNumber = userFile.size / (1024 * 1024)
  //     } else {
  //       postfix = "KB "
  //       sizeNumber = userFile.size / 1024
  //     }
  //   }
  // }

  if (fileRef.current.files) {
    if (fileRef.current.files[0]) {
      if (fileRef.current.files[0].size / 1024 >= 1024) {
        postfix = "MB"
        sizeNumber = fileRef.current.files[0].size / (1024 * 1024)
      } else {
        postfix = "KB "
        sizeNumber = fileRef.current.files[0].size / 1024
      }
    }
  }

  // file cheaking function

  const initialFormValues = {
    customerName: "",
    email: "",
    phoneNo: "",
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
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false)
            console.log(values)
            console.log({
              ...values,
              file: fileRef.current.files ? fileRef.current.files[0] : null,
            })
          }}>
          {(formik) => (
            <Form>
              <div className="grid grid-col-1 md:grid-cols-2 gap-2 ">
                <div className="flex flex-col gap-2">
                  <div className="w-full flex">
                    <span className="text-gray-primary req text-sm leading-[14px]">
                      Name
                    </span>

                    <span className="text-red-600 text-xs h-3">
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

                    <span className="text-red-600 text-xs h-3">
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
                    <span className="text-red-600 text-xs h-3">
                      <ErrorMessage name="phoneNo" />
                    </span>
                  </div>
                  <NumberInput
                    maxlen={10}
                    numbersOnly={true}
                    name="phoneNo"
                    Id="phoneNo"
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

                    <span className="text-red-600 text-xs h-3">
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

                    <span className="text-red-600 text-xs h-3">
                      <ErrorMessage name="query" />
                    </span>
                  </div>

                  <textarea
                    required
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
                  <div className="flex items-center px-1 w-full gap-1">
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
                    <div className="flex border border-pink-primary w-full py-1 rounded">
                      <span className="text-gray-600 inline-block mr-auto ">
                        Size:
                        {`${
                          sizeNumber.toFixed(2) == 0
                            ? ""
                            : sizeNumber.toFixed(2)
                        } ${postfix}`}
                      </span>
                      <span className="ml-auto mr-10 text-gray-600 ml-auto">
                        {fileName}
                      </span>
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
                <Button
                  text="submit"
                  type="submit"
                  exClasses="self-end mt-4 "
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Wrapper>
  )
}

export default Suggestions
