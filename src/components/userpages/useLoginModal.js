import { changeLoginScreenState } from "../../app/features/loginManager"
import { useSelector, useDispatch } from "react-redux"

export const useLoginModal = () => {
  const dispatch = useDispatch()
  const isUserLogged = useSelector((state) => state.loginManager.isUserLogged)
  const loginModalState = useSelector(
    (state) => state.loginManager.loginScreenStatus
  )

  const showLoginModalIfNotLogged = () => {
    if (isUserLogged === false && loginModalState === false) {
      dispatch(changeLoginScreenState(true))
      return true
    } else {
      return false
    }
  }

  const closeModal = () => {
    dispatch(changeLoginScreenState(false))
  }
  return {
    loginState: isUserLogged,
    modalState: loginModalState,
    actionFuncion: showLoginModalIfNotLogged,
    close: closeModal,
  }
}
