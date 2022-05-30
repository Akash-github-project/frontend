import React, { createContext, useState } from "react"
import ReactDOM from "react-dom"
import { motion } from "framer-motion"
import { useWindowSize } from "react-use"
export const LoginModalContext = createContext()
const LoginModal = ({
  closeModal,
  open,
  closeOnBackgroudClick = false,
  exClasses = "",
  children,
}) => {
  const [modalSize, changeModalSize] = useState("30")
  const { width, height } = useWindowSize()

  // useEffect(() => runOnEnd)
  if (!open) return null

  return ReactDOM.createPortal(
    <div className="z-base max-h-[80vh]">
      <div
        className="fixed inset-0 bg-gray-900/70 z-base"
        onClick={closeOnBackgroudClick ? () => closeModal() : null}></div>
      <motion.div
        className={`p-6 absolute inset-0 top-[20%] md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 grid w-full ${
          modalSize === "30" ? "md:w-[30rem]" : "md:w-[20rem] "
        } h-fit bg-white z-base ${exClasses}`}
        initial={{ top: "10%", opacity: 0 }}
        animate={
          width > 576 ? { top: "50%", opacity: 1 } : { top: "25%", opacity: 1 }
        }
        transition={{ duration: 0.5 }}>
        <div className="flex items-end h-2 w-full absolute top-7 pointer-events-none ">
          <button
            className="flex absolute -top-5 right-2 pointer-events-auto"
            onClick={() => closeModal()}>
            <i
              className={
                "fa-solid fa-xmark text-gray-primary hover:text-pink-primary"
              }></i>
          </button>
        </div>
        <LoginModalContext.Provider
          value={{
            changeSize: (value) => changeModalSize(value),
          }}>
          <div className="w-full h-full block">{children}</div>
        </LoginModalContext.Provider>
      </motion.div>
    </div>,
    document.querySelector("#portal")
  )
}

export default LoginModal
