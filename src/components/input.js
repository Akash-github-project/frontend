import React from 'react'

export const Input = ({Id =" ",extraClasses = " ",holder=" ",iType="text",change,val}) => {

  let defaultClasses = "flex-1  border rounded-md text-black focus:text-red-500 field"
  if(extraClasses !== " "){
      defaultClasses += `${defaultClasses}`
  }  

 function changeHandle(e){
    change(e.target.value);
  }
  return (
    <input type={iType} id={Id} placeholder={holder} value={val} onChange={changeHandle} className={defaultClasses} />
  )
}
