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
        className={`w-8 h-8 user bg-pink-primary mt-[6px] small-margin scale-small small-btn  ${
          showInSmall === true ? "show-in-small" : " "
        }`}
        onClick={() => setOpen(!open)}
        onMouseOver={breakpoint > "L" ? () => setOpen(true) : null}>
        <i
          className="fas fa-user text-white pointer-events-none inline-block"
          area-hidden="true"></i>
      </button>
      <div
        className={`absolute  right-2 w-[200px] top-12 z-base rounded border border-pink-primary bg-white ${
          open === true ? "block" : "hidden"
        }`}>
        <MenuBtn value="Hi User" click={closeMenu} link="#" />
        <MenuBtn value="My Profile" click={closeMenu} link="/profile" />
        <MenuBtn value="My wallet" click={closeMenu} link="/addBalance" />
        <MenuBtn value="Offers" click={closeMenu} link="/offers" />
        <MenuBtn value="Refer &amp; Earn" click={closeMenu} link="/offers" />
        <MenuBtn
          value="Write Issue/Complain"
          click={closeMenu}
          link="/suggestions"
        />
        <MenuBtn value="Confirm Page" click={closeMenu} link="/confirm" />
        <MenuBtn value="Logout" click={closeMenu} link="/feedback" />
      </div>
    </div>
  )
}

const MenuBtn = ({ value, click, link }) => {
  return (
    <Link to={link} className="w-full m-0 ">
      <button
        className="w-full p-1 text-sm bg-white text-pink-primary hover:text-white border border-gray-separator hover:bg-pink-primary rounded active:bg-pink-primary active:text-white"
        onClick={() => click()}>
        {value}
      </button>
    </Link>
  )
}

export default UserMenu
