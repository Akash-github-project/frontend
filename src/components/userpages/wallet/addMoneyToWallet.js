import React, { useState } from "react"
import { NumberInput } from "../../numberInput"
import Button from "../../button"

const AddMoneyToWallet = () => {
  const [walletBalance, setWalletBalance] = useState(100)
  return (
    <div className="w-full p-2 text-pink-primary text-center grid gap-1 items-center shadow-default col-span-full">
      {/* image and heading section */}
      <div className="w-full lg:w-8/12 mx-auto">
        <div className="flex flex-1 flex-row w-full col-span-full gap-1 mb-3 justify-center">
          <img src="images/wallet.svg" alt="" className="w-8 h-7" />
          <span className="inline-block font-bold text-gray-primary">
            Available Balance
          </span>
          <img
            src="images/rupee.svg"
            alt=""
            className="w-3 h-7 text-pink-primary"
          />
          <span className="text-lg">{walletBalance}</span>
        </div>
        {/* input section  */}
        <div className="grid grid-cols-12 gap-2 xl:gap-1">
          <div className="flex flex-1 lg:flex-row items-center gap-1 col-span-full lg:col-span-6">
            <span className="text-sm xl:text-md xl:mr-4 w-max">
              Enter Amount
            </span>
            <div className="flex gap-2 w-full  lg:max-w-[218px] h-[36px] self-start lg:self-auto flex-1">
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

          <div className="col-span-full w-full mt-8">
            <Button text="Add Money" exClasses="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddMoneyToWallet
