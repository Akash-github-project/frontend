//header for logged user
import "../App.css"
import "../css/loggedHeader.css"
import React, { useEffect } from "react"
import UserMenu from "./userMenu"
import { Link, useNavigate } from "react-router-dom"
import DropMenu from "./dropMenu"
import { useDispatch } from "react-redux"
import { clearAll } from "../app/features/prepaidPlansSlice"
import { useRequestWithAuth } from "./customHooks/useRequestWithAuth"
import { setUserInfo } from "../app/features/userInfoSlice"

export const HeaderLogged = () => {
  const { getRequsetWithAuth } = useRequestWithAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // getting userinfo and saving to redux store
  useEffect(() => {
    getRequsetWithAuth("userinfo").then((res) => {
      console.log(res)
      dispatch(setUserInfo(res))
    })
  }, [])

  return (
    <header className="">
      <div className=" width mx-auto flex items-center mt-[3px] pl-1 ">
        <DropMenu />

        {/*logo declaration   */}
        <div
          className="pl-[2px] pr-4 logo mr-auto relative  mt-[1px] ml-2  small-logo shrink-[0.2] cursor-pointer"
          onClick={() => {
            dispatch(clearAll())
            navigate("/home")
          }}
          tabIndex={0}
          title="RechargeAXN"></div>
        {/* </Link> */}

        <div className="nav flex  gap-[0.9rem] items-center flat-menu ">
          <Link to="/rewards">
            <div className="rewards text-sm">Rewards</div>
          </Link>
          <Link to="/offers">
            <div className="offers text-sm">Offers</div>
          </Link>
          <Link to="/suggestions">
            <div className="suggestion text-sm">Suggestions</div>
          </Link>

          <div className="notification">
            <button
              className="flex px-1 items-center justify-center"
              id="notifiy">
              <i className=" fa-regular fa-bell text-xl" area-hidden="true"></i>
            </button>

            <div className="notificaton-box  absolute flex flex-col items-center justify-center w-64 right-32">
              <div className="item bg-white px-4 py-2 border">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, iste.
              </div>
              <div className="item bg-white px-4 py-2 border">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                ea.
              </div>
              <div className="item bg-white px-4 py-2 border">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                architecto
              </div>
            </div>
          </div>

          <Link to="/addBalance" title="Add Money">
            <span className="flex items-center justify-center ">
              <button className="flex w-8 h-8 items-center justify-center add-money scale-95"></button>
              <span className="text-sm">Add Money</span>
            </span>
          </Link>
          <UserMenu showInSmall={true} />
        </div>

        <div className="notification show-in-small ml-[0.9rem]  mt-[6px] scale-small small-btn">
          <button
            className="flex px-1 items-center justify-center"
            id="notifiy">
            <i
              className=" fa-regular fa-bell text-[2rem]"
              area-hidden="true"></i>
          </button>

          <div className="notificaton-box  absolute flex flex-col items-center justify-center w-64 right-32  ">
            <div className="item bg-white px-4 py-2 border">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, iste.
            </div>
            <div className="item bg-white px-4 py-2 border">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              ea.
            </div>
            <div className="item bg-white px-4 py-2 border">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              architecto
            </div>
          </div>
        </div>

        <Link to="/addBalance">
          <span className="flex items-center justify-center show-in  sm:scale-[.85] flex-col lg:flex-row md:mt-2 lg:mt-auto">
            <button className="flex w-[2rem] h-[2rem]  items-center justify-center add-money sm:scale-[.9] show-in-small ml-[0.9rem] small-margin  mt-[6px] scale-small sm-font-sm small-btn"></button>
            <span className="hide-at-large text-sm">Add Money</span>
          </span>
        </Link>

        <UserMenu />
      </div>
    </header>
  )
}
