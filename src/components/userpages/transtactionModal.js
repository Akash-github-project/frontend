import React from "react"
import ReactDOM from "react-dom"
import Button from "../button"

const TransactionModal = ({ closeModal, open, children }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <div
        className="fixed inset-0 bg-gray-900/70"
        onClick={() => closeModal()}></div>
      <div className="p-6 fixed inset-0 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 grid w-full md:w-[34rem] md:h-[28rem] bg-white">
        <div className="flex items-end h-2 w-full absolute top-7">
          <button
            className="flex absolute -top-5 right-2"
            onClick={() => closeModal()}>
            <i
              className={
                "fa-solid fa-xmark text-gray-primary hover:text-pink-primary"
              }></i>
          </button>
        </div>
        <div className="w-full h-auto overflow-y-auto relative">
          <div className="flex flex-col sticky top-0">
            <div className="w-full flex-1 text-center font-bold bg-white">
              Cashback Earned
            </div>
            <div className="flex flex-1">
              <span className="w-full flex-1 p-2 bg-white text-gray-primary">
                Date
              </span>
              <span className="w-full flex-1 p-2 bg-white text-gray-primary">
                Amount
              </span>
              <span className="w-full flex-1 p-2 bg-white text-gray-primary">
                Code
              </span>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>,
    document.querySelector("#portal")
  )
}

export default TransactionModal
