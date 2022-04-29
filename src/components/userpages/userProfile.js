import React, { useState, useEffect } from "react"
import PersonalInfo from "./profile/personalInfo"
import Wrapper from "../wrapper"
import ChangePassword from "./profile/changePassword"
import { Tabs, useTabState, Panel } from "@bumaga/tabs"
import TransactionHistory from "./profile/TransactionHistory"

const cn = (...args) => args.filter(Boolean).join(" ")

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button
      className={cn("tab text-left", isActive && "active")}
      onClick={onClick}>
      {children}
    </button>
  )
}

const UserProfile = () => {
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(0)
  }, [])

  return (
    <Wrapper>
      <div className="w-full">
        <div className="flex items-center justify-right bg-primary h-[40px] px-[15px] mb-2 w-order box-border">
          <h1 className="text-white text-[18px] py-[10px] px-1">My Profile</h1>
        </div>

        <Tabs state={[state, setState]}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 lg:gap-2">
            <div className="col-span-full mx-auto lg:mx-0 lg:col-span-3 flex lg:flex-col">
              <Tab>Personal Information</Tab>
              <Tab>Change Passowrd</Tab>
              <Tab>Transaction History</Tab>
            </div>
            <div className="col-span-full lg:col-span-9">
              <Panel>
                <PersonalInfo />
              </Panel>
              <Panel>
                <ChangePassword />
              </Panel>
              <Panel>
                <TransactionHistory />
              </Panel>
            </div>
          </div>
        </Tabs>
      </div>
    </Wrapper>
  )
}

export default UserProfile
