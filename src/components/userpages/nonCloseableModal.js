import React, { useEffect } from "react"
import ReactDOM from "react-dom"

export const NonCloseableModal = ({ open, children }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <div className="z-base max-h-[80vh]">
      <div className="fixed inset-0 bg-gray-900/70 z-base"></div>
      <div className="p-6 fixed inset-0 top-[20%] md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 grid w-full md:w-[20rem] h-fit bg-white z-base">
        <div className="flex items-end h-2 w-full absolute top-7"></div>
        <div className="w-full h-full block">{children}</div>
      </div>
    </div>,
    document.querySelector("#portal")
  )
}
