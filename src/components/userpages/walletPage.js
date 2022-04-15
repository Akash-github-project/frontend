import React, { useState } from "react"
import Wrapper from "../wrapper"
import Button from "../button"
import { NumberInput } from "../numberInput"
import TransactionModal from "./transtactionModal"

export const WalletPage = () => {
  let walletBalance = 100
  const [isOpen, setIsOpen] = useState(false)

  const closeModalOf = () => {
    setIsOpen(false)
  }

  return (
    <Wrapper>
      <div className="w-full">
        <div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
          <h1 className="text-white text-[18px] py-[10px] px-1">Add Wallet</h1>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 relative py-1 ">
          <div className="flex flex-col gap-1 mb-4 sm:mt-8 md:mt-1 lg:w-[340px]">
            <div className="flex flex-1 w-full gap-1 mb-2">
              <img src="images/wallet.svg" alt="" className="w-8 h-7" />
              <span className="inline-block font-bold text-gray-primary">
                RecgergeAXN Wallet Balance
              </span>
              <img
                src="images/rupee.svg"
                alt=""
                className="w-3 h-7 text-pink-primary"
              />
              <strong className="text-lg">{walletBalance}</strong>
            </div>

            <div className="text-xl font-bold py-2 w-full">
              Add Money To Wallet
            </div>

            <div className="flex gap-1 w-full">
              <span className="text-lg font-medium">Amount</span>
              <span className="w-full">
                <NumberInput
                  extraClasses="h-full rounded w-full"
                  fieldClasses="border border-pink-primary w-full"
                  holder="Amount"
                  onleft="₹"
                  color="pink"
                />
              </span>
            </div>

            <div className="w-full">
              <Button text="Add Money" exClasses="w-full" />
            </div>
          </div>
          {/* wallet addintno */}

          <div className="flex flex-col gap-1 md:my-4 md:mt-1 lg:w-[340px]">
            <div className="flex flex-1 w-full gap-1 mb-2">
              <img src="images/wallet.svg" alt="" className="w-8 h-7" />
              <span className="inline-block font-bold text-gray-primary">
                Total Cashback Won
              </span>
              <img
                src="images/rupee.svg"
                alt=""
                className="w-3 h-7 text-pink-primary"
              />
              <strong className="text-lg">{walletBalance}</strong>
            </div>

            <div className="text-xl font-bold py-2 w-full">Enter Promocode</div>

            <div className="flex gap-1 w-full">
              <span className="text-lg font-medium">Promocode</span>
              <span className="w-full">
                <NumberInput
                  extraClasses="h-full rounded w-full"
                  fieldClasses="border border-pink-primary w-full"
                  holder="Promocode"
                  color="pink"
                />
              </span>
            </div>

            <div className="w-full">
              <Button text="Apply Promocode" exClasses="w-full" />
            </div>
          </div>
          <span className="inline-block absolute top-0 right-2">
            <Button
              text="View"
              exClasses="px-4 py-1 my-1"
              click={() => setIsOpen(true)}
            />
          </span>
          <TransactionModal open={isOpen} closeModal={() => setIsOpen(false)}>
            <div className="w-full flex items-center bg-gray-200">
              <span className="p-3 flex-1 text-black">id</span>
              <span className="p-3 flex-1 text-black">Nmae</span>
              <span className="p-3 flex-1 text-black">Value</span>
            </div>

            <div className="w-full flex items-center bg-gray-200">
              <span className="p-3 flex-1 text-black">id</span>
              <span className="p-3 flex-1 text-black">Nmae</span>
              <span className="p-3 flex-1 text-black">Value</span>
            </div>
            <div className="w-full flex items-center bg-gray-200">
              <span className="p-3 flex-1 text-black">id</span>
              <span className="p-3 flex-1 text-black">Nmae</span>
              <span className="p-3 flex-1 text-black">Value</span>
            </div>
            <div className="w-full flex items-center bg-gray-200">
              <span className="p-3 flex-1 text-black">id</span>
              <span className="p-3 flex-1 text-black">Nmae</span>
              <span className="p-3 flex-1 text-black">Value</span>
            </div>
            <div className="w-full flex items-center bg-gray-200">
              <span className="p-3 flex-1 text-black">id</span>
              <span className="p-3 flex-1 text-black">Nmae</span>
              <span className="p-3 flex-1 text-black">Value</span>
            </div>
            <div className="w-full flex items-center bg-gray-200">
              <span className="p-3 flex-1 text-black">id</span>
              <span className="p-3 flex-1 text-black">Nmae</span>
              <span className="p-3 flex-1 text-black">Value</span>
            </div>
            <div className="w-full flex items-center bg-gray-200">
              <span className="p-3 flex-1 text-black">id</span>
              <span className="p-3 flex-1 text-black">Nmae</span>
              <span className="p-3 flex-1 text-black">Value</span>
            </div>

            <div className="w-full flex items-center bg-gray-200">
              <span className="p-3 flex-1 text-black">id</span>
              <span className="p-3 flex-1 text-black">Nmae</span>
              <span className="p-3 flex-1 text-black">Value</span>
            </div>

            <div className="w-full flex items-center bg-gray-200">
              <span className="p-3 flex-1 text-black">id</span>
              <span className="p-3 flex-1 text-black">Nmae</span>
              <span className="p-3 flex-1 text-black">Value</span>
            </div>

            <div className="w-full flex items-center bg-gray-200">
              <span className="p-3 flex-1 text-black">id</span>
              <span className="p-3 flex-1 text-black">Nmae</span>
              <span className="p-3 flex-1 text-black">Value</span>
            </div>
          </TransactionModal>
        </div>
      </div>
    </Wrapper>
  )
}
