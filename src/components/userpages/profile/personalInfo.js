import React from "react"
import Button from "../../button"
import { Input } from "../../input"
import WithTextInput from "../../withTextInput"

const PersonalInfo = () => {
  return (
    <div className="grid grid-cols-1 w-full bg-gray-100">
      <div className="col-span-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-1 pl-6">
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
          <WithTextInput text="Change Mobile No" holder="Mobile No" />
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
