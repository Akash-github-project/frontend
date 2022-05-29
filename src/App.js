import { Header } from "./components/Header"
import React, { createContext } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { useState } from "react"
import { useSelector } from "react-redux"
import "./App.css"
import "./index.css"
import { Outlet } from "react-router-dom"
import { Footer } from "./components/Footer"
import Wrapper from "./components/wrapper"
import { HeaderLogged } from "./components/HeaderLogged"
import MainWrapper from "./components/MainWrapper"

export const ModalContext = createContext()
function App() {
  const [modal, setModal] = useState(false)
  const [toggleMenu, setMenu] = useState(false)

  const queryClient = new QueryClient()
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
          <MainWrapper>
            {toggleMenu === true ? <HeaderLogged /> : <Header />}
            <Outlet />
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
