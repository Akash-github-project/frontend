import React from "react"
import ReactDOM from "react-dom"

const LoginModal = ({ closeModal, open, children }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <div className="z-base">
      <div
        className="fixed inset-0 bg-gray-900/70 z-base"
        onClick={() => closeModal()}></div>
      <div className="p-6 fixed inset-0 top-[20%] md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 grid w-full md:w-[34rem] h-fit bg-white z-base">
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
        <div className="w-full h-full block">{children}</div>
      </div>
    </div>,
    document.querySelector("#portal")
  )
}

export default LoginModal
