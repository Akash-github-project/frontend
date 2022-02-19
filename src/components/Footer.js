import React from "react";

export const Footer = () => {
  return (
    <footer className="container border ">
      <div className="flex items-center mx-auto px-6 py-1" ></div>
      <div className="flex items-center justify-center bg-primary text-white mx-auto p-1">
          <div className="flex flex-wrap">
            <span className="inline-block py-1 px-2 text-[10px] text-tertiary">About Us</span>
            <span className="inline-block py-1 px-2 text-[10px] text-tertiary">Contact Us</span>
            <span className="inline-block py-1 px-2 text-[10px] text-tertiary"> Terms & Conditions</span>
            <span className="inline-block py-1 px-2 text-[10px] text-tertiary">Privacy Policy</span>
            <span className="inline-block py-1 px-2 text-[10px] text-tertiary">Refund Policy</span>
          </div>
      </div>
    </footer>
  );
};
