import ConfirmDetails from "./confirmDetails"
import Button from "../button"
import { Input } from "../input"
import Checkbox from "react-custom-checkbox"
import React, { useState } from "react"
import Wrapper from "../wrapper"
//to change
import fastagConfirm from "./specialJsons/fastagConfirm.json"
import recents from "./specialJsons/recents.json"
import "../../css/grids.css"

const Fastag = () => {
  const [openCoupon, setCouponState] = useState(false)
  const [couponState, toggleCouponState] = useState(true)

  const handleApplyCoupon = () => {
    toggleCouponState(!couponState)
  }

  return (
    <Wrapper>
      <div className="w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 justify-center">
          <div className="col-span-1 md:col-span-4 ">
            <div className="grid grid-cols-1 gap-4 w-full mx-auto justiry-center">
              <div className="w-full col-span-full font-medium leading-[19px]">
                Pay for Fastag
              </div>
              {/* select fastag service type*/}
              <div className="col-span-full grid input-width-grid3 lg:justify-center gap-4 lg:gap-8">
                <div className="flex w-full h-[36px]">
                  <Input
                    iType="tel"
                    holder="Vechile No"
                    extraClasses="text-gray-primary"
                    override={{ maxWidth: "100%", flex: 1 }}
                  />
                </div>

                <div className="flex w-full h-[36px]">
                  <Input
                    iType="tel"
                    holder="Amount of fastag"
                    extraClasses="text-gray-primary"
                    override={{ maxWidth: "100%", flex: 1 }}
                  />
                </div>
                <button
                  className="lg:p-1 h-[36px] w-full bg-pink-primary active:bg-pink-800 text-white rounded text-[15px] lg:text-[15px] leading-[15px] font-medium text-sm"
                  placeholder="Amount">
                  Bye FASTag
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* bill display section */}

          <div className="grid col-span-1 md:col-span-5 lg:mt-4 lg:mx-auto">
            <div
              className={`grid grid-cols-2 w-full lg:w-[348px] border mx-auto mt-4 md:mt-0 `}>
              {/* card details section start*/}
              <ConfirmDetails dataPlan={fastagConfirm} />
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

            {/* confirm details section end*/}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Fastag
