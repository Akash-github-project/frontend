import React, { useState, useEffect } from "react"
import Button from "../../button"
import Password from "../../password"
import TransactionList from "../../TransactionList"
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
          <div className="w-full col-span-full">
            <TransactionList />
          </div>
        </Panel>

        <Panel>
          <div className="w-full col-span-full">
            <TransactionList />
          </div>
        </Panel>
      </div>
    </Tabs>
  )
}

export default TransactionHistory
