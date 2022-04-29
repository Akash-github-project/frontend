import React, { useState, useRef } from "react"
import Wrapper from "./wrapper"
import Button from "./button"
import { NumberInput } from "./numberInput"
import { Input } from "./input"

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
        <div>
          <div className="grid grid-col-1 md:grid-cols-2 gap-2 ">
            <div className="flex flex-col gap-2">
              <span className="text-gray-primary req text-sm leading-[14px]">
                Name
              </span>
              <Input holder="Name" override={{ maxWidth: "100%" }} />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-gray-primary req text-sm leading-[14px]">
                Email
              </span>
              <Input holder="Email" override={{ maxWidth: "100%" }} />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-gray-primary req  text-sm leading-[14px]">
                Mobile
              </span>
              <NumberInput
                holder="Mobile Number"
                fieldClasses="border border-pink-primary focus-within:border-blue-500 focus-within:border-2"
                override={{ maxWidth: "100%" }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-gray-primary req text-sm leading-[14px]">
                Message Type
              </span>
              <select
                name=""
                id=""
                className="w-full border border-pink-primary p-1 rounded text-gray-600 bg-white h-[36px]">
                {options.map((element) => (
                  <option value={element.value} className="text-gray-600">
                    {element.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-full row-span-5 ">
              <span className="text-gray-primary req text-sm leading-[14px]">
                Query
              </span>
              <textarea
                required
                name=""
                id=""
                className="w-full border  border-pink-primary focus-within:border-1 focus-within:border-blue-400 outline-none rounded min-h-[7rem] text-gray-600 text-base p-[11px]"
                placeholder="Specify your query"></textarea>
            </div>

            <div className="col-span-full text-left text-gray-primary text-sm">
              Attachment file (Max 2MB) Only PDF/Image (JPE/JPEG/PNG)
            </div>

            <div
              className="text-gray-primary flex flex-col msg text-sm "
              data-message=" ">
              <div className="border border-pink-primary rounded flex items-center px-1">
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
                <span className="text-gray-600">
                  Size:
                  {`${
                    sizeNumber.toFixed(2) == 0 ? "" : sizeNumber.toFixed(2)
                  } ${postfix}`}
                </span>
                <span className="ml-auto mr-10 text-gray-600">{fileName}</span>
                <label
                  htmlFor="file"
                  className="p-1 bg-pink-primary text-white mr-1 text-[11px] hover:bg-gray-500">
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
            <Button text="Submit" exClasses="self-end mt-4 " />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Suggestions
