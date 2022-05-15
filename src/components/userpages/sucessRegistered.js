import React from "react"
import Button from "../button"

export const SuccessFulRegistered = ({
  goto = () => console.log("sucessful"),
}) => {
  return (
    <>
      <div className="grid grid-cols-6 gap-2 items-center p-0 md:p-3 lg:p-4">
        {/* additional sign up prompt  */}
        <div className="col-span-full flex flex-col">
          <div className="flex flex-1 w-full items-center  ">
            <img
              src="images/animatedTick.png"
              alt="SuccessMark"
              className="w-24 h-24 inline-block  mx-auto"
            />
          </div>
        </div>
        <div className="mt-2 text-black text-center col-span-full text-sm py-2 w-full flex justify-center items-center flex-col">
          <span>You have succesfully Registered</span>
          <Button
            click={() => goto("login")}
            text="Please go to login"
            exClasses="w-full"
          />
        </div>
      </div>
    </>
  )
}

export default SuccessFulRegistered
