import "../App.css";
import React from "react";

export const Header = () => {
  return (
    <header className="">
      <div className=" width mx-auto flex items-center mt-[3px] pl-1 ">
        <div className="menu">
          <button className="btn flex px-1">
            <i className="fa fa-bars items-center " aria-hidden="true"></i>
          </button>

          <div className="items-box flex flex-col items-center justify-center w-[50vw]">
            <div className="item bg-white px-4 py-2 border">Rewards</div>
            <div className="item bg-white px-4 py-2 border">Offers</div>
            <div className="item bg-white px-4 py-2 border" >Suggestions</div>
          </div>
        </div>
{/*logo declaration   */}
        <div className="pl-[2px] pr-4 logo mr-auto relative  mt-[1px] ml-2  small-logo"></div>

        <div className="nav flex  gap-[0.9rem] items-center flat-menu ">
          <div className="rewards ">Rewards</div>
          <div className="offers ">Offers</div>
          <div className="suggestion ">Suggestions</div>
          <button className="flex border-box h-9 rounded bg-primary font-normal  p-[5px] items-center  relative  -top-[2px]">
            <span className="text-tertiary lh-14">Login / Sign In</span>
          </button>
        </div>
          <button className="flex border-box h-9 rounded bg-primary font-normal  items-center p-[5px] relative top-[2px] show-small">
            <span className="text-tertiary">Login / Sign In</span>
          </button>
      </div>
    </header>
  );
};
