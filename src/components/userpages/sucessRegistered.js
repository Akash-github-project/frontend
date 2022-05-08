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
          <div className="flex-1 w-full">
            <img
              src="images/animatedTick.png"
              alt="SuccessMark"
              className="w-9 h-9 inline-block "
            />
          </div>
        </div>
        <div className="mt-2 text-black text-center col-span-full text-sm py-2">
          You have succesfully Registered Now go to &nbsp;
          <Button click={() => goto("login")} text="Login" />
        </div>
      </div>
    </>
  )
}

export default SuccessFulRegistered
