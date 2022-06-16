import React, { useState } from "react"
// import { ModalContext } from "../App"
// import { useDispatch } from "react-redux"
import Button from "./button"
import LoginModal from "./userpages/loginModal"
import Danger from "./danger"
const Offercard = ({
  promocode,
  cashback,
  title,
  frequency,
  details,
  validTill,
}) => {
  // const mContext = useContext(ModalContext)
  // const detail = useRef()
  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    // dispatch(addContent(detail.current))
    // dispatch(toggleOverlay())
    // mContext.modalToggle()
    setOpenModal(true)
  }
  const formatDate = (dateAsString) => {
    let data = new Date(dateAsString)
    let day = data.getDate()
    let month = data.getMonth() + 1
    let year = data.getFullYear()

    switch (data.getMonth() + 1) {
      case 1:
        month = "Jan"
        break
      case 2:
        month = "Feb"
        break
      case 3:
        month = "March"
        break
      case 4:
        month = "April"
        break
      case 5:
        month = "May"
        break
      case 6:
        month = "June"
        break
      case 7:
        month = "July"
        break
      case 8:
        month = "Aug"
        break
      case 9:
        month = "Sept"
        break
      case 10:
        month = "Oct"
        break
      case 11:
        month = "Nov"
        break
      case 12:
        month = "Dec"
        break
    }
    return `${day}-${month}-${year}`
  }

  return (
    <div className="offerGrid gap-2 p-4 shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-200">
      <strong
        className="col-span-full text-pink-primary text-right self-center leading-5 "
        style={{ fontSize: "13px" }}>
        Valid Till: {formatDate(validTill)}
      </strong>
      {/* row 1 */}
      <strong className="col-span-full text-black text-center p-1 self-center ">
        {title}
      </strong>
      {/* row 2 */}
      <h4 className="col-span-full text-center text-pink-primary font-semibold capitalize">
        {frequency}
      </h4>
      {/* row 3 */}
      <div className="col-span-full  flex justify-left items-center border-2 border-blue-400 font-semibold rounded px-2">
        <div className="text-black font-semibold">Cashback:</div>
        <strong className="text-blue-800 p-1 font-semibold">{cashback}</strong>
      </div>
      {/* row 4*/}
      <div className="flex items-center gap-1 border-2 border-blue-400 rounded px-2">
        <span className="inline-block px-1 text-black font-semibold">
          Promocode:
        </span>
        <strong className="text-blue-800 inline-block font-semibold uppercase">
          {promocode}
        </strong>
      </div>
      <Button
        text="View Details"
        override={{ fontSize: "13px" }}
        click={() => handleClick()}
      />
      {/* this is not for login it just uses the modal used by login screen */}
      <LoginModal closeModal={() => setOpenModal(false)} open={openModal}>
        <div className="text-2xl text-center p-4 font-semibold">
          Terms &amp; Conditions{" "}
        </div>
        <Danger content={details} />
      </LoginModal>
    </div>
  )
}

export default Offercard
