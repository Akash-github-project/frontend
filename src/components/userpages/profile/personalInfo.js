import React, { useState } from "react"
import Button from "../../button"
import { isValidMobileNo } from "../../usefullFunctions"
import { Input } from "../../input"
import OtpInput from "../../otp"
import WithTextInput from "../../withTextInput"
import PasswordModal from "../../modals/passwordModal"

const PersonalInfo = () => {
  //section specific to otp
  const [otpVal, setOtpVal] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [existing, setExisting] = useState("")
  const handlePhoneNoInput = (value) => {
    setOtpVal(value)
  }

  const validate = (value) => {
    if (isValidMobileNo(value) === "none") {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
    console.log(value)
  }
  //specific section ends here

  const [modalState, setModalState] = useState(false)
  const showPasswordModal = () => {
    setModalState(true)
  }

  return (
    <div className="grid grid-cols-1 w-full p-2 shadow-default mt-2">
      <div className="col-span-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-2">
        <div className="flex flex-col">
          <span className="text-gray-primary">Full Name</span>
          <Input
            iType="text"
            override={{ maxWidth: "100%" }}
            holder="Full Name"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-primary">Mobile No</span>
          <WithTextInput
            text="Change Mobile No"
            holder="Mobile No"
            textClick={() => showPasswordModal()}
          />
          {modalState === true ? (
            <PasswordModal
              closeModal={() => setModalState(false)}
              open={modalState}>
              <div className="w-full h-full flex flex-col">
                <span className="text-gray-primary">Existing Mobile No</span>
                <Input
                  numbersOnly={true}
                  val={existing}
                  change={(value) => setExisting(value)}
                  maxlen={10}
                  override={{ maxWidth: "100%" }}
                  extraClasses="text-gray-primary"
                />
                <span className="inline-block h-3  "></span>
                <span className="mt-2 text-gray-primary">New Mobile No</span>
                <div className="flex w-full">
                  <OtpInput
                    fun={(value) => "1111" === value}
                    val={otpVal}
                    change={(value) => setOtpVal(value)}
                    outer="w-full"
                    disOrNot={isValid}
                    labelFirst="hidden"
                    contactInput="w-full"
                    runBlur={validate}
                    otpInputStyle="min-w-[6rem] max-w-[6rem]"
                    resendBtn=""
                  />
                  {/* <Input override={{ maxWidth: "100%", width: "100%" }} />
                  <Button text="OTP" exClasses="ml-auto" /> */}
                </div>
                <span className="text-xs text-red-600">
                  Note: Please enter unique mobile number
                </span>
              </div>
            </PasswordModal>
          ) : null}
        </div>
        <div className="flex flex-col">
          <span className="text-gray-primary">Email ID</span>
          <Input iType="email" override={{ maxWidth: "100%" }} holder="Email" />
        </div>
        <div className="flex flex-col ">
          <span className="text-gray-primary">Date of Birth (DD-MM-YYYY)</span>
          <Input
            iType="date"
            override={{ maxWidth: "100%" }}
            holder="Date Of Birth"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-primary">City</span>
          <Input iType="text" override={{ maxWidth: "100%" }} holder="city" />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-primary"></span>
        </div>
        <div className="flex flex-col col-span-full">
          <span>
            <Button text="Update Now" exClasses="max-w-[]" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
