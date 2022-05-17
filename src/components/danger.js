import React from "react"

const Danger = ({ exClasses = " ", content = " ", style = {} }) => {
  return (
    <div
      data-cms
      dangerouslySetInnerHTML={{ __html: content }}
      className={`lex flex-col justify-left py-1 h-96 overflow-y-auto text-gray-primary show ${exClasses}`}
      style={style}></div>
  )
}

export default Danger
