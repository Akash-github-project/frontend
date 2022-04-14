import ConfirmDetails from "./confirmDetails"
import Button from "../button"
import { Input } from "../input"
import Checkbox from "react-custom-checkbox"
import SelectSearch from "react-select-search"
import provider from "../../otherData/insuranceProvider.json"
import { useState } from "react"
import Wrapper from "../wrapper"
//to change
import dthConfirm from "./specialJsons/insuranceConfirm.json"

const Insurance = () => {
  const [openCoupon, setCouponState] = useState(false)
  const [couponState, toggleCouponState] = useState(true)
  const [insuranceProvider, setinsuranceProvider] = useState(provider)
  const [currentMsg, setCurrentMsg] = useState("")
  const [inputType, setInputType] = useState("text")

  const handleApplyCoupon = () => {
    toggleCouponState(!couponState)
  }

  const handleProviderChange = (value) => {
    console.log(value)
  }
  return (
    <Wrapper>
      <div className="w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 justify-center ">
          <div className="col-span-1 md:col-span-6">
            <div className="grid grid-cols-1 gap-4 w-full mx-auto lg:ml-auto lg:mr-4 lg:max-w-[335px] lg:mt-3">
              <div className="w-full col-span-full font-medium leading-[19px]">
                Pay for insurance
              </div>
              {/* select operator*/}

              <SelectSearch
                options={insuranceProvider.insuranceList}
                value="sv"
                name="circle"
                placeholder="Select An Insurance Provider"
                onChange={(value) => console.log(value)}
              />

              <div className="flex flex-col w-full ">
                <Input
                  extraClasses="min-h-[36px] rounded-r rounded-l-none"
                  override={{ maxWidth: "100%", flex: 1 }}
                  holder="policy no"
                />
              </div>

              <div className="flex flex-col w-full ">
                <Input
                  extraClasses="min-h-[36px] rounded-r rounded-l-none"
                  override={{ maxWidth: "100%", flex: 1 }}
                  holder="Date Of Birth"
                  iType={inputType}
                  focusFunction={() => setInputType("date")}
                  blurFunction={() => setInputType("text")}
                />
              </div>
              {/*  select operator ends*/}
              <div className="flex flex-col w-full ">
                <Input
                  extraClasses="min-h-[36px] rounded-r rounded-l-none"
                  override={{ maxWidth: "100%", flex: 1 }}
                  holder="Mobile No"
                  iType="tel"
                />
                <span className="text-green-600 text-xs leading-3">
                  {currentMsg}
                </span>
              </div>

              <button
                className="lg:p-1 h-[36px] w-full bg-pink-primary active:bg-pink-800 text-white rounded text-[15px] lg:text-[15px] leading-[15px] font-medium text-sm"
                placeholder="Ammount"
                // onClick={handleRechargeRequest}
              >
                Get Premium Details
              </button>
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
              <ConfirmDetails dataPlan={dthConfirm} />
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

export default Insurance
