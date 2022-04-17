import React, { useState, useEffect } from "react"
import Button from "../../button"
import Password from "../../password"
import { Tabs, useTabState, Panel } from "@bumaga/tabs"

const cn = (...args) => args.filter(Boolean).join(" ")

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button
      className={cn(
        "tabStyle2 border-b border-b-white",
        isActive && "bg-white border-b-2 border-b-pink-600 "
      )}
      onClick={onClick}>
      {children}
    </button>
  )
}

const TransactionHistory = () => {
  const [state, setState] = useState(1)
  useEffect(() => {
    setState(1)
  }, [])

  return (
    <Tabs state={[state, setState]}>
      <div className="grid grid-cols-12 w-full bg-gray-100 gap-4">
        <h2 className="col-span-full text-left text-2xl font-medium border-b border-b-gray-separator lg:pl-6">
          Personal Information
        </h2>

        <div className="col-span-full grid grid-cols-2">
          <Tab>Recharge &amp; Bill Paid</Tab>
          <Tab>Wallet</Tab>
        </div>
        {/* password 1 section */}
        <Panel>
          <>
            <div className="flex flex-col lg:flex-row col-span-full xl:col-span-9 gap-2 lg:pl-6">
              <span className="text-gray-primary w-40">Existing Password</span>
              <Password
                change={(value) => console.log(value)}
                dis={false}
                fClasses="flex-1"
              />
            </div>
            {/* passowrd 2 secion */}
            <div className="flex flex-col lg:flex-row col-span-full xl:col-span-9 gap-2 lg:pl-6">
              <span className="text-gray-primary w-40">New Password</span>
              <Password
                change={(value) => console.log(value)}
                dis={false}
                fClasses="flex-1"
              />
            </div>

            {/* confirm password section */}
            <div className="flex flex-col lg:flex-row col-span-full xl:col-span-9 gap-2 lg:pl-6">
              <span className="text-gray-primary w-40">Confirm Password</span>
              <Password
                change={(value) => console.log(value)}
                dis={false}
                fClasses="flex-1"
              />
            </div>
            {/* submit secion */}
            <div className="col-span-full flex gap-2 lg:pl-6">
              <span className="lg:w-40"></span>
              <Button text="Update Passowrd" fClasses="flex-1" />
            </div>
          </>
        </Panel>
        <Panel>
          <></>
        </Panel>
      </div>
    </Tabs>
  )
}

export default TransactionHistory
