import "../App.css"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import DropMenu from "./dropMenu"
import LoginWrapper from "./LoginWrapper"
import LoginModal from "./userpages/loginModal"
import { useDispatch, useSelector } from "react-redux"
import { clearAll } from "../app/features/prepaidPlansSlice"
import { useLoginModal } from "./userpages/useLoginModal"

export const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { actionFuncion, modalState, close } = useLoginModal()

  return (
    <>
      <header className="">
        <div className=" width mx-auto flex items-center mt-[3px] pl-1 ">
          {/* menu box */}

          <DropMenu />

          <div
            className="pl-[2px] pr-4 logo  sm:mr-auto relative  mt-[1px] ml-2  small-logo shrink-[0.2] cursor-pointer"
            tabIndex={0}
            onClick={() => {
              dispatch(clearAll())
              navigate("/home")
            }}
            title="RechargeAXN"></div>

          <div className="nav flex  gap-[0.9rem] items-center flat-menu ">
            <Link to="/rewards">
              <div className="rewards  text-sm">Rewards</div>
            </Link>
            <Link to="/offers">
              <div className="offers  text-sm">Offers</div>
            </Link>

            <Link to="/suggestions">
              <div className="suggestion  text-sm">Suggestions</div>
            </Link>
            {/* button for login/sign Up  shown when normal screen*/}
            <button
              className="flex border-box h-9 rounded bg-primary font-normal  px-[5px] py-[4px] items-center  relative  -top-[2px] active:bg-pink-800"
              title="Login / Sign Up"
              onClick={actionFuncion}>
              <span className="text-tertiary leading-[13px] text-[13px]">
                Login / Sign Up
              </span>
            </button>
            {/* button for login/sign Up  shown when normal screen end*/}
          </div>

          {/* button for login/sign Up  shown when normal screen*/}
          <button
            className="flex border-box h-9 rounded bg-primary font-normal  items-center p-[5px] relative show-small active:bg-pink-800 -top-[1px]"
            style={{ top: "-1px" }}
            title="Login / Sign Up"
            onClick={actionFuncion}>
            <span className="text-tertiary leading-[13px] text-[13px]">
              Login / Sign Up
            </span>
          </button>
          {/* button for login/sign Up  shown when small screen end*/}

          <LoginModal
            closeModal={() => close()}
            open={modalState}
            exClasses="px-3 py-3 pb-1">
            <LoginWrapper />
          </LoginModal>
        </div>
      </header>
    </>
  )
}
