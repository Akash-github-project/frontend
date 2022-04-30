import React from "react"

const Danger = ({ exClasses = " ", content = " " }) => {
  return (
    <div
      data-cms
      dangerouslySetInnerHTML={{ __html: content }}
      className={`lex flex-col justify-left py-1 h-96 overflow-y-auto text-gray-primary show ${exClasses}`}></div>
  )
}

export default Danger
