import React from "react"
import ReactDOM from "react-dom"

const prepaidModal = ({ closeModal, open, children }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center overlay bg-black/80"
      id="overlay"
      onClick={() => closeModal()}>
      <div className="fixed  top-0 bottom-0 right-0 left-0 lg:right-1/2 lg:top-1/2 lg:bottom-1/2 lg:translate-x-1/2 lg:-translate-y-1/2 lg:max-w-[45rem] p-4 pt-1 border border-white h-auto lg:h-[40rem] bg-white">
        <div className="flex top-0 mb-1">
          <button
            className={
              "flex  absolute justify-center items-center " +
              side +
              "-1 top-2 w-4 h-4 text-gray-primary hover:text-pink-primary p-1 bg-white"
            }
            onClick={() => closeModal()}>
            <i
              className={
                icon + " text-gray-primary hover:text-pink-primary"
              }></i>
          </button>
        </div>
        <div className=" w-full block py-1 h-full text-gray-primary">
          {children}
        </div>
      </div>
    </div>
  )
}

export default prepaidModal
