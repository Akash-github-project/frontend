import React, { useState } from "react"
import "../../../css/transaction.css"
import CashbackList from "../profile/userTransactions/cashbackList"

const CashbackInfo = () => {
  const [walletBalance, setWalletBalance] = useState(100)
  return (
    <div className="w-full p-2 text-pink-primary text-center h-96 flex flex-col justify-center shadow-default col-span-full">
      <div className="w-full">
        <div className="flex flex-1 flex-row w-full col-span-full gap-1 mb-3 justify-center">
          <img src="images/wallet.svg" alt="" className="w-8 h-7" />
          <span className="font-bold text-gray-primary flex flex-col">
            Total Cashback Won
          </span>
          <img
            src="images/rupee.svg"
            alt=""
            className="w-3 h-7 text-pink-primary"
          />
          <span className="text-lg">{walletBalance}</span>
        </div>
      </div>

      <span className="text-xs text-gray-500 font-normal text-left">
        History last 20 Transaction
      </span>
      <section className="w-full grid grid-cols-1 flex-1 gap-2 overflow-y-auto mb-4">
        <CashbackList />
        {/* <TransactionListUser />
        <TransactionListUser /> */}
      </section>
    </div>
  )
}

export default CashbackInfo
