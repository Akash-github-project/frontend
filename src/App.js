import { Header } from "./components/Header"
import React, { createContext } from "react"
import { QueryClient, QueryClientProvider, useQuery } from "react-query"
import { useState } from "react"
import { useSelector } from "react-redux"
import "./App.css"
import "./index.css"
import { Outlet } from "react-router-dom"
import { Footer } from "./components/Footer"
// import { Dropdown, NormalElement } from "./components/Dropdown";
import Wrapper from "./components/wrapper"
import { HeaderLogged } from "./components/HeaderLogged"
import MainWrapper from "./components/MainWrapper"
// import NotificationBar from "./components/NotificationBar";
import LoginOverlay from "./components/loginOverlay"
export const ModalContext = createContext()
function App() {
  const [modal, setModal] = useState(false)
  const [toggleMenu, setMenu] = useState(false)
  const showLogin = useSelector(
    (state) => state.loginOverlay.loginOverlayStatus
  )

  const queryClient = new QueryClient()
  // const [store, setStore] = useState("");
  // let item = {
  // 	one: {
  // 		text: "option 1",
  // 		value: "op 1",
  // 	},
  // 	two: {
  // 		text: "option 2",
  // 		value: "op 2",
  // 	},
  // };
  return (
    <ModalContext.Provider
      value={{
        modalToggle: () => setModal(!modal),
        toggleMenu: () => setMenu(!toggleMenu),
      }}>
      <QueryClientProvider client={queryClient}>
        <div
          className={`m-0 p-0 ${
            modal === true ? "h-screen overflow-hidden" : ""
          }`}>
          {showLogin === true ? <LoginOverlay /> : <div></div>}
          <MainWrapper>
            {toggleMenu === true ? <HeaderLogged /> : <Header />}
            {/* change */}
            <Outlet />
            {/* change here */}
            <Wrapper>
              <Footer />
            </Wrapper>
          </MainWrapper>
        </div>
      </QueryClientProvider>
    </ModalContext.Provider>
  )
}

export default App
