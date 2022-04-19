import React, { useState } from "react"
import "../../../css/transaction.css"
import TransactionListUser from "../../TransactionList2"

const CashbackInfo = () => {
  const [walletBalance, setWalletBalance] = useState(100)
  return (
    <div className="w-full p-2 text-pink-primary text-center h-64 flex flex-col justify-center shadow-default col-span-full">
      <div className="w-full">
        <div className="flex flex-1 flex-row w-full col-span-full gap-1 mb-3 justify-center">
          <img src="images/wallet.svg" alt="" className="w-8 h-7" />
          <span className="font-bold text-gray-primary flex flex-col">
            Total Cashback Won
            <span className="text-xs text-gray-500 font-normal">
              History last 20 Transaction
            </span>
          </span>
          <img
            src="images/rupee.svg"
            alt=""
            className="w-3 h-7 text-pink-primary"
          />
          <span className="text-lg">{walletBalance}</span>
        </div>
      </div>
      <TransactionListUser />
    </div>
  )
}

export default CashbackInfo
