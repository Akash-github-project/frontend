import React from "react"
import { Menu, MenuItem } from "@mui/material"
import { Link } from "react-router-dom"

function UserMenu({ showInSmall = "false" }) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClick(e) {
    if (anchorEl !== e.target) {
      setAnchorEl(() => e.target)
    }
    console.log(e.target)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <div>
      <button
        className={`w-8 h-8 user bg-pink-primary    ml-[0.9rem]  mt-[6px] small-margin  scale-small small-btn  ${
          showInSmall === true ? "show-in-small" : " "
        }`}
        onClick={handleClick}
        onMouseOver={handleClick}>
        <i
          className="fas fa-user text-white pointer-events-none inline-block"
          area-hidden="true"></i>
      </button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        // anchorOrigin={{
        // 	vertical: "bottom",
        // 	horizontal: "right",
        // }}
        // transformOrigin={{
        // 	vertical: "top",
        // 	horizontal: "right",
        // }}
        sx={{
          "& ul li": {
            backgroundColor: "white",
            maxHeight: "2rem",
            fontSize: "14px",
          },
          "& ul li:hover": {
            backgroundColor: "#f5317c",
            color: "white",
          },
          "& ul li:focus": {
            backgroundColor: "deeppink",
            color: "white",
          },
        }}>
        <Link to="#" className="w-full m-0 ">
          <MenuItem onClick={handleClose}>Hi user</MenuItem>
        </Link>
        <Link to="/profile" className="w-full m-0 ">
          <MenuItem onClick={handleClose}>My Profile</MenuItem>
        </Link>
        <Link to="/addBalance" className="w-full m-0 ">
          <MenuItem onClick={handleClose}>My Wallet</MenuItem>
        </Link>
        <Link to="/offers" className="w-full m-0 ">
          <MenuItem onClick={handleClose}>Offers</MenuItem>
        </Link>
        <Link to="/offers" className="w-full m-0">
          <MenuItem onClick={handleClose}>Refer &amp; Earn</MenuItem>
        </Link>
        <Link to="/suggestions" className="w-full m-0 ">
          <MenuItem onClick={handleClose}>Write Issue/Complain</MenuItem>
        </Link>
        <Link to="/confirm" className="w-full m-0 ">
          <MenuItem onClick={handleClose}>Confirm Page</MenuItem>
        </Link>
        <Link to="/feedback" className="w-full m-0 ">
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default UserMenu
