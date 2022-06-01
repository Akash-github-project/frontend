import React from "react"
import Button from "../button"

export const SuccessFulRegistered = ({
  goto = () => console.log("sucessful"),
  message = "",
  hideBtn = false,
}) => {
  return (
    <>
      <div className="grid grid-cols-6 gap-2 items-center p-0 md:p-3 lg:p-4 w-full">
        {/* additional sign up prompt  */}
        <div className="col-span-full flex flex-col">
          <div className="flex flex-1 w-full items-center  ">
            <svg
              className="svg-icon w-24 h-24 mx-auto inline-block"
              fill="green"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M511.322571 63.620993c-246.971881 0-447.189925 200.206788-447.189925 447.184809s200.218044 447.184809 447.189925 447.184809c246.978021 0 447.189925-200.206788 447.189925-447.184809S758.300592 63.620993 511.322571 63.620993L511.322571 63.620993zM767.82041 394.804834 478.605426 684.031075l-0.011256 0.016373c-13.331633 13.331633-33.667797 15.410991-49.185212 6.249331-2.87856-1.699712-5.584182-3.790326-8.055466-6.249331-0.005117-0.005117-0.005117-0.005117-0.005117-0.005117L254.825756 517.519714c-15.796778-15.808034-15.796778-41.432645 0-57.245795 15.808034-15.808034 41.437761-15.808034 57.245795 0l137.90279 137.90279 260.611529-260.611529c15.802918-15.802918 41.437761-15.802918 57.240679 0C783.628444 353.378329 783.628444 379.001917 767.82041 394.804834L767.82041 394.804834zM767.82041 394.804834" />
            </svg>
          </div>
        </div>
        <div className="mt-2 text-black text-center col-span-full text-sm py-2 w-full flex justify-center items-center flex-col">
          <span>{message}</span>
          {hideBtn ? null : (
            <Button
              click={() => goto("login")}
              text="Please go to login"
              exClasses="w-36"
            />
          )}
        </div>
      </div>
    </>
  )
}

export default SuccessFulRegistered
