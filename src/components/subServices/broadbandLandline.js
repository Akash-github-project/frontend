import ConfirmDetails from "./confirmDetails"
import Button from "../button"
import { Input } from "../input"
import WithTextInput from "../withTextInput"
import Checkbox from "react-custom-checkbox"
import React, { useState } from "react"
import Wrapper from "../wrapper"
//to change
import SelectSearch from "react-select-search"
import broadbandConfirm from "./specialJsons/broadbandConfirm.json"
import landlineProvider from "../../otherData/broadbandLandlineProvider.json"
import recents from "./specialJsons/recents.json"
import { NumberInput } from "../numberInput"

const BroadbandLandline = () => {
  const [openCoupon, setCouponState] = useState(false)
  const [couponState, toggleCouponState] = useState(true)
  const [currentProvider, setCurrentProvider] = useState([])

  const [otp, setOtp] = useState(false)
  const [promo, setPromo] = useState(" ")
  const [have, setHave] = useState(false)

  const setCls = () => {
    let x = " "
    setPromo(x)
    setOtp(false)
  }
  const handleApplyCoupon = () => {
    toggleCouponState(!couponState)
  }

  const handleServiceChange = (e) => {
    console.log(e.target.value)
    let service
    //work req
    if (e.target.value == "broadband")
      service = [...landlineProvider.broadbandList]
    else if (e.target.value == "landline")
      service = [...landlineProvider.landlineList]
    else {
      service = []
    }

    setCurrentProvider(service)
  }
  return (
    <Wrapper>
      <div className="w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 justify-center">
          <div className="col-span-1 md:col-span-6">
            <div className="grid grid-cols-1 gap-4 w-full mx-auto lg:ml-auto lg:mr-4 lg:max-w-[335px] lg:mt-3">
              <div className="w-full col-span-full font-medium leading-[19px]">
                Broadband / Landline
              </div>
              {/* select operator*/}

              <select
                name=""
                id=""
                onChange={handleServiceChange}
                className="lg:w-full h-[36px] border border-pink-600 rounded text-gray-primary bg-white">
                {["Select A Provider", "broadband", "landline"].map(
                  (optionType) => (
                    <option
                      value={optionType}
                      className="lg:max-w-[218px] text-inherit capitalize">
                      {optionType}
                    </option>
                  )
                )}
              </select>
              {/*  select operator ends*/}

              {currentProvider.length === 0 ? null : (
                <SelectSearch
                  options={currentProvider}
                  value="sv"
                  name="circle"
                  placeholder="Select A Provider"
                  onChange={(value) => console.log(value)}
                />
              )}

              <div className="flex gap-2 w-full h-[36px]">
                <NumberInput
                  extraClasses="h-full rounded-r rounded-l-none w-full"
                  fieldClasses="border border-pink-primary w-full"
                  holder="Amount"
                  onleft="₹"
                  color="pink"
                />
              </div>
              <Button text="Get Bill Details" />
            </div>

            <div className="w-full lg:max-w-[335px]  rounded bg-blue-200 text-xs leading-3 text-blue-800 p-2 mx-auto mt-2 lg:mr-4 lg:ml-auto">
              Your service provider will take two working days to consider bill
              paid in their accounts.
            </div>
          </div>

          {/* <div className="hidden md:block lg:col-span-1"></div> */}
          {/* bill display section */}

          <div className="grid col-span-1 md:col-span-5 ">
            <div
              className={`grid grid-cols-2 w-full lg:w-[348px] border mx-auto lg:ml-0 mt-4 md:mt-0 `}>
              {/* card details section start*/}
              <ConfirmDetails dataPlan={broadbandConfirm} />
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
                    className={`fas fa-chevron-${
                      openCoupon ? "up" : "down"
                    } text-xs mx-1 hover:text-black`}></i>
                </span>
                {/* Apply coupon input start */}

                <div className="mx-auto flex items-center scale-90 w-3/5">
                  {have ? (
                    <>
                      <WithTextInput
                        change={(e) => setPromo(e.target.value)}
                        val={promo}
                        disable={otp ? true : false}
                        text={
                          otp ? <i className="fa-solid fa-trash-can"></i> : " "
                        }
                        textClick={setCls}
                        exClasses={`${otp ? "" : " mx-auto "} `}
                      />
                      {otp ? null : (
                        <Button click={() => setOtp(true)} text="Apply" />
                      )}
                    </>
                  ) : null}
                </div>
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
                  fClasses="text-[13px] leading-[13px]"
                />
              </div>
              {/* pay ammount button section end*/}
            </div>

            {/* confirm details section end*/}
          </div>
        </div>

        <div className="bg-white border mt-4 grid grid-cols-1 lg:grid-cols-5 lg:p-2">
          <div className=" hidden lg:block lg:col-span-2"></div>
          <div className="col-span-full lg:col-span-3 grid gap-1 border   bg-white p-1">
            <div className="w-full col-span-full">Recents</div>
            <div className="shadow-default grid gap-1 p-2">
              {recents.list.map((item) => (
                <div className="flex w-full h-[36px]">
                  <span className="p-2 flex-1 text-xs md:text-sm lg:text-md text-gray-primary">
                    {item.heading}
                  </span>
                  <span className="p-2 flex-1 text-xs md:text-sm lg:text-md text-gray-primary">
                    {item.number}
                  </span>

                  <button
                    className=" border border-pink-primary w-[75px] hover:bg-pink-primary hover:text-white rounded text-inherit  "
                    data-val={item.id}>
                    <span
                      className="mx-auto text-inherit hover:text-white"
                      data-val={item.id}>
                      Pay Bill
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default BroadbandLandline

// <select
//   name=""
//   id=""
//   className="lg:w-full text-[13px] h-[36px] border border-pink-600 rounded text-gray-primary bg-white">
//   {currentProvider.map((boards) => (
//     <option
//       value={boards.name}
//       className="lg:max-w-[218px] text-inherit">
//       {boards.value}
//     </option>
//   ))}
// </select>
