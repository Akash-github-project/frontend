import React from "react"

import "../css/notificationBar.css"
const marquee = ({ children }) => {
  return (
    <div>
      <p className="text-current">{children}</p>
    </div>
  )
}

export default marquee
