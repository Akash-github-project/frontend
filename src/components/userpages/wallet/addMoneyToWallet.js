import React, { useState } from "react"
import { NumberInput } from "../../numberInput"
import Button from "../../button"
import WithTextInput from "../../withTextInput"

const AddMoneyToWallet = () => {
  const [otp, setOtp] = useState(false)
  const [promo, setPromo] = useState(" ")
  const [have, setHave] = useState(false)

  const setCls = () => {
    let x = " "
    setPromo(x)
    setOtp(false)
  }
  return (
    <div className="p-2 text-pink-primary  shadow-default text-center grid gap-2 items-center col-span-full">
      {/* image and heading section */}
      <div className="w-full mx-auto  p-2">
        <div className="w-full text-pink-primary">
          <img
            src="/walletImage.png"
            className="w-24 h-24 text-pink-primary mx-auto"
          />
        </div>
        <div className="flex flex-1 flex-row w-full col-span-full gap-1 mb-1 mt-2 justify-center">
          <span className="inline-block font-bold text-gray-primary">
            Available Balance
          </span>
          <img
            src="images/rupee.svg"
            alt=""
            className="w-3 h-7 text-pink-primary"
          />
          <span className="text-lg">100</span>
        </div>
        {/* input section  */}
        <div className="grid grid-cols-12 gap-2 xl:gap-1 mt-2">
          <div className="mx-auto flex flex-1 lg:flex-row items-center justify-center gap-2 col-span-full lg:col-span-full md:max-w-[500px]">
            <span className="text-sm xl:text-md xl:mr-4 w-max">
              Enter Amount
            </span>
            <div className="flex gap-2 w-full  lg:max-w-[218px] h-[36px] lg:self-auto flex-1">
              <NumberInput
                extraClasses="h-full rounded-r rounded-l-none w-full"
                fieldClasses="border border-pink-primary w-full"
                holder="Amount"
                onleft="₹"
                color="pink"
              />
            </div>
          </div>
          {/* button */}
          <div className="flex col-span-full w-full mt-3 justify-center">
            <Button text="Add Money" exClasses="w-[500px] text-center" />
          </div>
          <div className="flex col-span-full w-full text-xs justify-center text-pink-primary text-right self-center">
            <div className="mx-auto flex items-center">
              <span
                className="text-inherit min-w-fit ml-auto m-1 cursor-pointer w-full"
                onClick={() => setHave(!have)}>
                Have a promocode?
              </span>
            </div>
          </div>
          <div className="flex col-span-full w-full text-xs justify-center text-right self-center">
            <div className="mx-auto flex items-center">
              {have ? (
                <>
                  <WithTextInput
                    change={(e) => setPromo(e.target.value)}
                    val={promo}
                    disable={otp ? true : false}
                    text={otp ? <i className="fa-solid fa-trash-can"></i> : " "}
                    textClick={setCls}
                  />
                  {otp ? null : (
                    <Button click={() => setOtp(true)} text="Apply" />
                  )}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddMoneyToWallet

/**
 * 
          <div className="flex flex-1 lg:flex-row  w-full items-center gap-1 col-span-full lg:col-span-6">
            <span className="text-sm xl:block mr-0 xl:mr-4">Promocode</span>
            <div className="flex gap-2 h-[36px] w-full ml-3 lg:ml-0  lg:max-w-[218px] flex-1">
              <NumberInput
                extraClasses="h-full rounded-r rounded-l-none w-full"
                fieldClasses="border border-pink-primary w-full"
                holder="Promocode"
                iType="text"
                color="pink"
              />
            </div>
            <Button text="Apply" exClasses="lg:w-fit" />
          </div>
 */
