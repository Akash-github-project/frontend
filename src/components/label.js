import classNames from 'classnames'
import React from 'react'

export const Label = ({extraClasses = " ",forItem = " ", message}) => {
let defaultClasses = "block text-secondary w-24 text-sm"

  return (
     <label className={classNames({[`${defaultClasses}`]:true ,[`${extraClasses}`]:true})} htmlFor ={forItem} >{message}</label>
  )
}
