import React, { useState } from "react"
import TransactionList from "../../TransactionList"
import "../../../css/transaction.css"

const CashbackInfo = () => {
  const [walletBalance, setWalletBalance] = useState(100)
  return (
    <div className="w-full p-2 text-pink-primary text-center h-64 flex flex-col justify-center shadow-default col-span-full">
      <div className="w-full">
        <div className="flex flex-1 flex-row w-full col-span-full gap-1 mb-3 justify-center">
          <img src="images/wallet.svg" alt="" className="w-8 h-7" />
          <span className="inline-block font-bold text-gray-primary">
            Total Wallet Balance
          </span>
          <img
            src="images/rupee.svg"
            alt=""
            className="w-3 h-7 text-pink-primary"
          />
          <span className="text-lg">{walletBalance}</span>
        </div>
      </div>
      <TransactionList />
    </div>
  )
}

export default CashbackInfo
