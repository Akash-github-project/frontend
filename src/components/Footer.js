import React from "react";

export const Footer = () => {
  return (
    <footer className="container border ">
      <div className="flex items-center justify-center mx-auto px-6 py-1" ></div>
      <div className="flex items-center justify-center bg-primary text-white mx-auto p-1">
          <div className="flex flex-wrap">
            <span className="inline-block py-1 px-2 text-[10px] text-tertiary flex-1">About Us</span>
            <span className="inline-block py-1 px-2 text-[10px] text-tertiary flex-1">Contact Us</span>
            <span className="inline-block py-1 px-2 text-[10px] text-tertiary flex-1"> Terms & Conditions</span>
            <span className="inline-block py-1 px-2 text-[10px] text-tertiary flex-1">Privacy Policy</span>
            <span className="inline-block py-1 px-2 text-[10px] text-tertiary flex-1">Refund Policy</span>
          </div>
      </div>
    </footer>
  );
};
