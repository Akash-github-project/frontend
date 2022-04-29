import React, { useState, useRef } from "react"
import { createBreakpoint } from "react-use"
import { useClickAway } from "react-use"
import { Link } from "react-router-dom"

//defining  breakpoints for removal of hover action on user meanu
const useBreakpoint = createBreakpoint({ XL: 1200, L: 820 })

const UserMenu = ({ showInSmall = false }) => {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  useClickAway(ref, () => setOpen(false))
  const breakpoint = useBreakpoint()

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <div className="relative bg-white" ref={ref}>
      <button
        className={`w-[33px] h-[33px] user bg-pink-primary mt-[6px] small-margin scale-small small-btn  ${
          showInSmall === true ? "show-in-small" : " "
        }`}
        onClick={() => setOpen(!open)}
        onMouseOver={breakpoint > "L" ? () => setOpen(true) : null}>
        <i
          className="fas fa-user text-white pointer-events-none inline-block"
          area-hidden="true"></i>
      </button>
      <div
        className={`absolute  right-0  w-[200px] top-8 lg:top-10 z-base rounded border border-pink-primary bg-white ${
          open === true ? "block" : "hidden"
        }`}>
        <MenuBtn value="Hi User" click={closeMenu} link="#" />
        <MenuBtn
          value="My Profile"
          click={closeMenu}
          link="/profile"
          cls="text-left"
        />
        <MenuBtn
          value="My wallet"
          click={closeMenu}
          link="/addBalance"
          cls="text-left"
        />
        <MenuBtn
          value="Offers"
          click={closeMenu}
          link="/offers"
          cls="text-left"
        />
        <MenuBtn
          value="Refer &amp; Earn"
          click={closeMenu}
          link="/offers"
          cls="text-left"
        />
        <MenuBtn
          value="Write Issue/Complain"
          click={closeMenu}
          link="/suggestions"
          cls="text-left"
        />
        <MenuBtn
          value="Confirm Page"
          click={closeMenu}
          link="/confirm"
          cls="text-left"
        />
        <MenuBtn
          value="Logout"
          click={closeMenu}
          link="/feedback"
          cls="text-left"
        />
      </div>
    </div>
  )
}

const MenuBtn = ({ value, click, link, cls }) => {
  return (
    <Link to={link} className="w-full m-0 ">
      <button
        className={`w-full p-1 text-sm bg-white text-pink-primary hover:text-white border border-gray-separator hover:bg-pink-primary rounded active:bg-pink-primary active:text-white  ${cls}`}
        onClick={() => click()}>
        {value}
      </button>
    </Link>
  )
}

export default UserMenu
