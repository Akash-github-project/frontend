import React, { useState } from "react"
import ConfirmDetails from "./confirmDetails"
import { renderProvider } from "../../otherData/inputWithImage"
import SelectSearch, { fuzzySearch } from "react-select-search"
import Button from "../button"
import { Input } from "../input"
import Checkbox from "react-custom-checkbox"
import { NumberInput } from "../numberInput"
import circle from "../../otherData/circle.json"
import operator from "../../otherData/postpaidOperator.json"
import postpaidConfirm from "./specialJsons/postpaidConfirm.json"
import "../../css/grids.css"

let operatorList = operator.list.map((item) => ({
  name: item.op_name,
  value: item.op_key,
  photo: item.image,
  code: item.op_code,
}))

let circleList = circle.list.map((item) => ({
  name: item.name,
  value: JSON.stringify({ code: item.code, name: item.name }),
}))

const PostpaidMobile = () => {
  const [phoneNo, setPhoneNo] = useState("")
  const [outputOperator, setOperator] = useState(operatorList)
  const [outputCircle, setCircle] = useState(circleList)
  const [openCoupon, setCouponState] = useState(false)
  const [couponState, toggleCouponState] = useState(true)

  const handleApplyCoupon = () => {
    toggleCouponState(!couponState)
  }
  const handleOperatorChange = (value) => {
    console.log(value)

    let filterCircle = circleList.filter((element) => {
      let toCompare = JSON.parse(element.value)

      if ("MM" === value) {
        return toCompare.code === "MU"
      } else if ("MD" === value) {
        return toCompare.code === "DL"
      } else if ("BS" === value) {
        return !(toCompare.code === "DL" || toCompare.code === "MU")
      } else return true
    })

    let currentOperator = operatorList.filter((operator) => {
      return operator.value === value
    })

    console.log(currentOperator)
    setCircle([...filterCircle])
  }
  const handleCircleChange = (value) => {
    console.log(value)
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:gap-2 xl:gap-3 w-full mx-auto input-width-grid">
        <NumberInput
          iType="tel"
          val={phoneNo}
          onleft="+91-"
          id="phoneNo"
          holder="Mobile Number"
          // change={value => dispatch(storePhoneNo(value))}
          change={(value) => setPhoneNo(value)}
          extraClasses=" text-sm focus:text-gray-primary"
          fieldClasses="border-pink-600 focus:outline-none focus-within:border-blue-400 flex-1 h-[36px] "
        />

        <SelectSearch
          className="select-search "
          options={outputOperator}
          renderOption={renderProvider}
          search
          filterOptions={fuzzySearch}
          placeholder="Search Operator"
          onChange={(value) => handleOperatorChange(value)}
        />

        <SelectSearch
          options={outputCircle}
          value="sv"
          name="circle"
          placeholder="Circle"
          onChange={(value) => handleCircleChange(value)}
        />
        <button
          className="p-3 lg:p-1 bg-pink-primary active:bg-pink-800 text-white rounded text-[15px] lg:text-[13px] leading-[13px] font-medium lg:ml-4 text-sm"
          // onClick={handleRechargeRequest}
        >
          Fetch Bill
        </button>
      </div>

      {/* bill display section */}

      <div className="grid items-center justify-center">
        <div
          className={`grid grid-cols-2 w-full lg:w-[348px] border mx-auto mt-4`}>
          {/* card details section start*/}
          <ConfirmDetails dataPlan={postpaidConfirm} />
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
                icon={<i class="fa-solid fa-square-check text-pink-600"></i>}
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
          <div className=" col-span-full px-2 py-2">
            <Button
              text="Pay Rs 1000 "
              exClasses="w-full"
              fClasses="text-[15px]"
            />
          </div>
          {/* pay ammount button section end*/}
        </div>

        {/* confirm details section end*/}
      </div>
    </div>
  )
}

export default PostpaidMobile
