import React, { useState, useRef } from "react"
import { Menu, MenuItem } from "@mui/material"
import { Link } from "react-router-dom"

const DropMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div
      className={`${open === true ? "menu" : " "} relative dnoneLarge`}
      tabIndex={0}>
      <button
        className="relative btn px-1 w-3 h-3 bg-white"
        onClick={handleClick}>
        <span className="border-b-gray-900 block mb-1 border-0 border-b-2 w-6"></span>
        <span className="border-b-gray-900 block mb-1 border-0 border-b-2 w-6 "></span>
        <span className="border-b-gray-900 block mb-1 border-0 border-b-2 w-6"></span>
      </button>

      {/* menu items */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          li: {
            minHeight: "1.2rem",
            width: "50vw",
          },
        }}>
        <Link to="/rewards" data-route="/rewards">
          <MenuItem onClick={handleClose}>Rewards</MenuItem>
        </Link>

        <Link to="/offers" data-route="/offers">
          <MenuItem onClick={handleClose}>Offers</MenuItem>
        </Link>

        <Link to="/suggestions" data-route="/suggestions">
          <MenuItem onClick={handleClose}>Suggestions</MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default DropMenu
