import React, { useState } from "react"
import Button from "../../button"
import { Input } from "../../input"
import WithTextInput from "../../withTextInput"
import PasswordModal from "../../modals/passwordModal"

const PersonalInfo = () => {
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
                <span>Existing Mobile No</span>
                <Input override={{ maxWidth: "100%" }} />
                <span className="mt-2">New Mobile No</span>
                <div className="flex">
                  <Button text="OTP" exClasses="ml-auto" />
                </div>
                <Input override={{ maxWidth: "100%" }} />
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
