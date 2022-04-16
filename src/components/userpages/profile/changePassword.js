import React from "react"
import Button from "../../button"
import Password from "../../password"

const ChangePassword = () => {
  return (
    <div className="grid grid-cols-12 w-full bg-gray-100 gap-4">
      <h2 className="col-span-full text-left text-2xl font-medium border-b border-b-gray-separator lg:pl-6">
        Personal Information
      </h2>
      <div className="flex flex-col lg:flex-row col-span-full xl:col-span-9 gap-2 lg:pl-6">
        <span className="text-gray-primary w-40">Existing Password</span>
        <Password
          change={(value) => console.log(value)}
          dis={false}
          fClasses="flex-1"
        />
      </div>

      <div className="flex flex-col lg:flex-row col-span-full xl:col-span-9 gap-2 lg:pl-6">
        <span className="text-gray-primary w-40">New Password</span>
        <Password
          change={(value) => console.log(value)}
          dis={false}
          fClasses="flex-1"
        />
      </div>
      <div className="flex flex-col lg:flex-row col-span-full xl:col-span-9 gap-2 lg:pl-6">
        <span className="text-gray-primary w-40">Confirm Password</span>
        <Password
          change={(value) => console.log(value)}
          dis={false}
          fClasses="flex-1"
        />
      </div>
      <div className="col-span-full flex gap-2 lg:pl-6">
        <span className="lg:w-40"></span>
        <Button text="Update Passowrd" fClasses="flex-1" />
      </div>
    </div>
  )
}

export default ChangePassword
