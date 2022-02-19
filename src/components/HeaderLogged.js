import '../App.css'
import React from 'react'
//header for logged user
export const HeaderLogged = () => {
  return (
      <header  className=' max-w-screen-[1170px] w-full flex gap-4 m-header mt-2 items-start'>
          <div className="logo mr-auto relative -top-[0.5rem]"></div>

          <div className="nav flex gap-2 items-start ">
            <div className="rewards">Rewards</div>
            <div className="offers">Offers</div>
            <div className="suggestion">Suggestions</div>
            <i class=" fa-regular fa-bell text-xl"></i>
          </div>
      </header>
  )
}


