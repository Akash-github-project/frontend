import React, { useEffect, useState } from "react"
import Wrapper from "../wrapper"
import dthConfirm from "../subServices/specialJsons/dthConfirm.json"
import Button from "../button"
import ConfirmDetails from "../subServices/confirmDetails"
import { Input } from "../input"
import Checkbox from "react-custom-checkbox"
import { NumberInput } from "../numberInput"
import TransactionModal from "./transtactionModal"
import { Tabs, useTabState, Panel } from "@bumaga/tabs"
import CashbackInfo from "./wallet/cashbackInfo"
import AddMoneyToWallet from "./wallet/addMoneyToWallet"

//defining tabs to use in this page
const cn = (...args) => args.filter(Boolean).join(" ")

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button
      className={cn("tab border-b border-white", isActive && "active")}
      onClick={onClick}>
      {children}
    </button>
  )
}

export const WalletPage = () => {
  //coupon state open
  const [openCoupon, setCouponState] = useState(false)
  const [couponState, toggleCouponState] = useState(true)
  //menu open close state
  const [isOpen, setIsOpen] = useState(false)

  //state for tab section don't change it unless  you now  what you are doing
  const [state, setState] = useState(1)
  useEffect(() => {
    setState(1)
  }, [])

  let walletBalance = 100

  const handleApplyCoupon = () => {
    toggleCouponState(!couponState)
  }

  const closeModalOf = () => {
    setIsOpen(false)
  }

  return (
    <Tabs state={[state, setState]}>
      <Wrapper>
        <div className="w-full">
          <div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
            <h1 className="text-white text-[18px] py-[10px] px-1">
              Add Wallet
            </h1>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-4 relative py-1 ">
            {/* tab defining section */}
            <div className="col-span-full grid grid-cols-4  md:px-16 lg:px-24 mt-2  mb-2">
              <div></div>
              <Tab>Wallet Balance</Tab>
              <Tab>Cashback Info</Tab>
              <div></div>
            </div>
            <Panel>
              <AddMoneyToWallet />
            </Panel>
            <Panel>
              <CashbackInfo />
            </Panel>
            {/* wallet addintno */}
          </div>
        </div>
      </Wrapper>
    </Tabs>
  )
}

/*

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
*/
