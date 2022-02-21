import "../App.css";
import React from "react";

export const Header = () => {
  return (
    <header className="">
      <div className="top-[3px] width mx-auto flex items-center small-margin">
        <div className="menu">
          <button className="btn flex px-1  ">
            <i className="fa fa-bars items-center " aria-hidden="true"></i>
          </button>

          <div className="items-box flex-col items-center justify-center">
            <div className="item bg-white px-2 py-1 border">Rewards</div>
            <div className="item bg-white px-2 py-1 border">Offers</div>
            <div className="item bg-white px-2 py-1 border" >Suggestions</div>
          </div>
        </div>

        <div className="logo mr-auto relative -top-[0.3rem] small-left"></div>
        <div className="nav flex  gap-[0.83em] items-start flat-menu ">
          <div className="rewards">Rewards</div>
          <div className="offers">Offers</div>
          <div className="suggestion">Suggestions</div>
          <button className="flex border-box h-[32px] rounded bg-primary font-normal  items-center px-2 py-1 relative -top-[0.4rem]">
            <span className="text-tertiary">Login / Sign In</span>
          </button>
        </div>
          <button className="flex border-box h-[32px] rounded bg-primary font-normal  items-center px-2 py-1 relative -top-[0.4rem] show-small">
            <span className="text-tertiary">Login / Sign In</span>
          </button>
      </div>
    </header>
  );
};
