import React from "react"
import EachTransaction from "./eachTransaction"
const list = [
  {
    icon: "fas fa-mobile-alt",
    name: "some name",
    date: "22/11/2",
    time: "23:23:11",
    value: "232",
    transactionId: "fs23232335",
    status: true,
    userIdentifier: "43438918",
  },
  {
    icon: "fas fa-mobile-alt",
    name: "some name",
    date: "22/11/2",
    time: "23:23:11",
    value: "232",
    transactionId: "fs23232335",
    status: true,
    userIdentifier: "43438918",
  },
  {
    icon: "fas fa-mobile-alt",
    name: "some name",
    date: "22/11/2",
    time: "23:23:11",
    value: "232",
    transactionId: "fs23232335",
    status: true,
    userIdentifier: "43438918",
  },
  {
    icon: "fas fa-mobile-alt",
    name: "some name",
    date: "22/11/2",
    time: "23:23:11",
    value: "232",
    transactionId: "fs23232335",
    status: true,
    userIdentifier: "43438918",
  },
  {
    icon: "fas fa-mobile-alt",
    name: "some name",
    date: "22/11/2",
    time: "23:23:11",
    value: "232",
    transactionId: "fs23232335",
    status: true,
    userIdentifier: "43438918",
  },
  {
    icon: "fas fa-mobile-alt",
    name: "some name",
    date: "22/11/2",
    time: "23:23:11",
    value: "232",
    transactionId: "fs23232335",
    status: true,
    userIdentifier: "43438918",
  },
]
const WalletBill = () => {
  return (
    <div className="grid  lg:grid-cols-2 gap-2 max-h-[400px] overflow-y-auto">
      {list.map((each) => (
        <EachTransaction {...each} />
      ))}
    </div>
  )
}

export default WalletBill
