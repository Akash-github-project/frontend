import React, { useState, useEffect } from "react"
import { Tabs, useTabState, Panel } from "@bumaga/tabs"
import WalletBill from "./userTransactions/walletBill"

const cn = (...args) => args.filter(Boolean).join(" ")

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button
      className={cn(
        "border-b-2 bg-white text-sm md:text-md border-b-gray-separator text-gray-primary min-w-fit md:px-6 py-2 flex-1",
        isActive && " border-b-2 border-b-pink-600 text-pink-primary "
      )}
      onClick={onClick}>
      {children}
    </button>
  )
}

const TransactionHistory = () => {
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(0)
  }, [])

  return (
    <Tabs state={[state, setState]}>
      <div className="grid grid-cols-12 w-full bg-gray-100 gap-4">
        <div className="col-span-full overflow-x-scroll w-full flex">
          <Tab>Recharge</Tab>
          <Tab>Bill</Tab>
          <Tab>Wallet</Tab>
          <Tab>Giftcard</Tab>
        </div>
        {/* password 1 section */}
        <Panel>
          <div className="w-full col-span-full shadow-default ">
            <WalletBill />
          </div>
        </Panel>

        <Panel>
          <div className="w-full col-span-full shadow-default ">
            <WalletBill />
          </div>
        </Panel>

        <Panel>
          <div className="w-full col-span-full shadow-default">
            <WalletBill />
          </div>
        </Panel>
        <Panel>
          <div className="w-full col-span-full shadow-default">
            <WalletBill />
          </div>
        </Panel>
      </div>
    </Tabs>
  )
}

export default TransactionHistory
