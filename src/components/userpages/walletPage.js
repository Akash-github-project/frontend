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
            <div className="col-span-full grid grid-cols-2  md:px-16 lg:px-24 mt-10 lg:mt-0">
              <Tab>Wallet Ballenct</Tab>
              <Tab>Total Cashback</Tab>
              <Tab>Proposed</Tab>
            </div>
            <Panel>
              <div className="hidden lg:block"></div>
              <div className="flex flex-col gap-1 mb-4 sm:mt-10 md:mt-1 lg:w-full col-span-full lg:col-span-2">
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
            </Panel>
            {/* wallet addintno */}

            <Panel>
              <div></div>
              <div className="flex flex-col gap-1 md:my-4 md:mt-1 lg:w-full col-span-full lg:col-span-2">
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

                <div className="text-xl font-bold py-2 w-full">
                  Enter Promocode
                </div>

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
            </Panel>
            <Panel>
              <div className="hidden lg:block"></div>
              <div
                className={`grid grid-cols-2 w-full lg:w-[348px] border lg:ml-10 mt-4 md:mt-0 `}>
                {/* card details section start*/}
                <ConfirmDetails dataPlan={dthConfirm} />
                {/* card details section end*/}

                {/* ammount showing section start */}
                <div className="p-1 bg-gray-200 font-medium text-black text-right px-1 py-2 col-span-full">
                  Rs 1000
                </div>
                {/* ammount showing section end*/}

                {/* Apply coupon section start*/}
                <div className="capitalize col-span-full text-xs mt-1">
                  <span
                    className="inline-block w-full text-center cursor-pointer hover:text-black text-sm"
                    onClick={() => setCouponState(!openCoupon)}>
                    Apply Coupon code
                    <i
                      className={`fas fa-chevron-${
                        openCoupon ? "up" : "down"
                      } text-xs mx-1 hover:text-black`}></i>
                  </span>
                  {/* Apply coupon input start */}

                  <span
                    className={` ${
                      openCoupon ? "" : "hidden"
                    } flex w-full gap-2 justify-center scale-90`}>
                    <Input
                      extraClasses="w-1/2 px-1 py-0 "
                      override={{ fontSize: "15px" }}
                      dis={!couponState}
                    />
                    <Button
                      text="Apply"
                      exClasses="w-1/3 "
                      click={handleApplyCoupon}
                      dis={!couponState}
                      disM="Remove"
                    />
                  </span>
                  {/* Apply coupon input end*/}
                </div>
                {/* Apply coupon section end*/}
                <div
                  className={`${
                    openCoupon ? "" : "hidden"
                  } col-span-full text-xs mt-1 text-green-600 text-center`}>
                  some demo message
                </div>

                <div className="col-span-full flex mt-1">
                  {/* wallet balance section start */}
                  <div className="flex ml-1 items-center">
                    <Checkbox
                      borderColor="#f5317c"
                      icon={
                        <i class="fa-solid fa-square-check text-pink-600"></i>
                      }
                      id="payFromWallet"
                    />
                    <label
                      htmlFor="payFromWallet"
                      className="ml-1 text-gray-primary text-sm">
                      Wallet Balance
                    </label>
                  </div>
                  <span className="ml-auto mr-1 text-gray-800 font-semibold">
                    {3343}
                  </span>
                </div>
                {/* wallet balance section start */}

                {/* pay ammount button section start */}
                <div className=" col-span-full py-2">
                  <Button
                    text="Pay Rs 1000 "
                    exClasses="w-full "
                    fClasses="text-[15px] leading-[15px]"
                  />
                </div>
                {/* pay ammount button section end*/}
              </div>
            </Panel>
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
    </Tabs>
  )
}
