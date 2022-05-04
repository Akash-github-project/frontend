import React, { useState } from "react"
import ConfirmDetails from "./subServices/confirmDetails"
import WithTextInput from "./withTextInput"
import Checkbox from "react-custom-checkbox"
import Button from "./button"

const Card = ({ cardConfirmList, otp, setOtp, applied, msgCoupon = "" }) => {
  const [have, setHave] = useState(false)
  const [promo, setPromo] = useState(" ")
  const [allowed, isAllowed] = useState(true)

  const setCls = () => {
    let x = " "
    setPromo(x)
    setOtp(false)
  }

  return (
    <div
      className={`grid grid-cols-2 w-full lg:w-[348px] border mx-auto mt-4 md:mt-0 `}>
      {/* card details section start*/}
      <ConfirmDetails dataPlan={cardConfirmList} />
      {/* card details section end*/}

      {/* ammount showing section start */}
      <div className="p-1 bg-gray-200 font-medium text-black text-left px-1 py-2">
        Total Amount:
      </div>
      <div className="p-1 bg-gray-200 font-medium text-black text-right px-1 py-2">
        Rs 1000
      </div>
      {/* ammount showing section end*/}

      {/* Apply coupon section start*/}
      <div className="capitalize col-span-full text-xs mt-1">
        <span
          className="inline-block w-full text-center cursor-pointer hover:text-black text-sm"
          onClick={() => setHave(!have)}>
          Apply Coupon code
          <i
            className={`fas fa-chevron-down text-xs mx-1 hover:text-black`}></i>
        </span>
        {/* Apply coupon input start */}

        <div className="mx-auto flex items-center scale-90 w-3/5">
          {have ? (
            <>
              <WithTextInput
                change={(e) => setPromo(e.target.value)}
                val={promo}
                disable={otp === true || allowed === false ? true : false}
                text={otp ? <i className="fa-solid fa-trash-can"></i> : " "}
                textClick={setCls}
                exClasses={`${otp ? "" : " mx-auto "} `}
              />
              {otp ? null : (
                <Button
                  click={() => setOtp(true)}
                  dis={!allowed}
                  text="Apply"
                />
              )}
            </>
          ) : null}
        </div>
        {/* Apply coupon input end*/}
      </div>
      {/* Apply coupon section end*/}
      <div
        className={`${
          applied ? "" : "hidden"
        } col-span-full text-xs mt-1 text-green-600 text-center`}>
        {msgCoupon}
      </div>

      <div className="col-span-full flex mt-1">
        {/* wallet balance section start */}
        <div className="flex ml-1 items-center">
          <Checkbox
            borderColor="#f5317c"
            icon={<i className="fa-solid fa-square-check text-pink-600"></i>}
            id="payFromWallet"
            onChange={(value) => isAllowed(!value)}
          />
          <label
            htmlFor="payFromWallet"
            className="ml-1 text-gray-primary text-sm">
            Wallet Balance
          </label>
        </div>
        <span className="ml-auto mr-1 text-gray-800 font-semibold">{3343}</span>
      </div>
      {/* wallet balance section start */}

      {/* pay ammount button section start */}
      <div className=" col-span-full py-2">
        <Button
          text="Pay Rs "
          exClasses="w-full "
          fClasses="text-[13px] leading-[13px]"
          click={() => console.log("hello")}
        />
      </div>
      {/* pay ammount button section end*/}
    </div>
  )
}

export default Card
