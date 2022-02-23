import React from "react";

export const Footer = () => {
  return (
    <footer className="border w-full">
      <div className="flex items-center justify-center bg-primary text-white  px-2 py-1 w-full">
          <ul className="flex flex-wrap justify-center  list-none w-full">
            <li className="inline-block py-1 px-2 text-[10px] text-tertiary ">About Us</li>
            <li className="inline-block py-1 px-2 text-[10px] text-tertiary ">Contact Us</li>
            <li className="inline-block py-1 px-2 text-[10px] text-tertiary "> Terms & Conditions</li>
            <li className="inline-block py-1 px-2 text-[10px] text-tertiary ">Privacy Policy</li>
            <li className="inline-block py-1 px-2 text-[10px] text-tertiary ">Refund Policy</li>
          </ul>
      </div>
    </footer>
  );
};
