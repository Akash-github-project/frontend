import "../App.css";
import React from "react";

export const Header = () => {
  return (
    <header className=" flex  gap-2 m-header mt-2 items-start">
      <div className="logo mr-auto "></div>

      <div className="nav flex  gap-[0.83em] items-start ">
        <div className="rewards">Rewards</div>
        <div className="offers">Offers</div>
        <div className="suggestion">Suggestions</div>
        <button className="flex border-box h-[32px] rounded bg-primary font-normal  items-center px-2 py-1 relative -top-1">
          <span className="text-tertiary">Login / Sign In</span>
        </button>
      </div>
    </header>
  );
};
