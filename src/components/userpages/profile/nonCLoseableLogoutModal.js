import React, { useEffect } from "react"
import { NonCloseableModal } from "../nonCloseableModal"
import { useTimer } from "use-timer"
import Button from "../../button"
import { useDispatch } from "react-redux"
import { logOutUser } from "../../../app/features/loginManager"
import { setUserInfo } from "../../../app/features/userInfoSlice"
import { useNavigate } from "react-router-dom"

const NonCLoseableLogoutModal = ({ open = false }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutUser = () => {
    dispatch(logOutUser())
    dispatch(setUserInfo({}))
    navigate("/home")
  }

  const {
    time: logoutTime,
    start: startLogoutTimer,
    reset: resetLogoutTimer,
  } = useTimer({
    initialTime: 500,
    endTime: 0,
    timerType: "DECREMENTAL",
    onTimeOver: () => {
      resetLogoutTimer()
      logoutUser()
    },
  })

  useEffect(() => {
    startLogoutTimer()
  }, [])

  if (open == false) {
    return null
  }

  return (
    <NonCloseableModal open={open}>
      <div className="w-full px-2 grid items-center justify-center">
        <div className="p-1 text-gray-primary">
          <span className="text-green-600 font-bold">
            Password Change Successful,
          </span>
          <br /> Please logout and login again
          <br />
          or within <strong>{logoutTime}</strong> seconds <br />{" "}
          <strong className="text-red-500">
            You will be logged out automatically
          </strong>
        </div>
        <div className="p-1 flex justify-center">
          <Button text={"Logout Now"} click={logoutUser} />
        </div>
      </div>
    </NonCloseableModal>
  )
}

export default NonCLoseableLogoutModal
