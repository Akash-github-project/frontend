import React, { useState } from "react";
import ConfirmDetails from "./confirmDetails";
import Button from "../button";
import { Input } from "../input";
import Checkbox from "react-custom-checkbox";
import {NumberInput} from "../numberInput"
import postpaidConfirm from "./specialJsons/postpaidConfirm.json"

const PostpaidMobile = () => {
	const [phoneNo, setPhoneNo] = useState("");
	const [openCoupon, setCouponState] = useState(false);
	const [couponState, toggleCouponState] = useState(true);

	const handleApplyCoupon = () => {
		toggleCouponState(!couponState);
	};
	return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-2 xl:gap-3 w-full mx-auto">
        <NumberInput
          iType="tel"
          val={phoneNo}
          onleft="+91-"
          id="phoneNo"
          holder="Mobile Number"
          // change={value => dispatch(storePhoneNo(value))}
          change={(value) => setPhoneNo(value)}
          extraClasses=" text-sm focus:text-gray-primary"
          fieldClasses="border-pink-600 focus:outline-none focus-within:border-blue-400 flex-1 h-[34px] "
        />

        <select
          name=""
          id=""
          className="border border-pink-600 h-[34px] text-gray-primary rounded text-sm"
        >
          <option value="" className="text-gray-primary">
            Select your Operator
          </option>
          <option value="" className="text-gray-primary">
            Select your Operator
          </option>
        </select>

        <select
          name=""
          id=""
          className="border border-pink-600 h-[34px] text-gray-primary rounded text-sm"
        >
          <option value="">Select Circle(State)</option>
        </select>

        <button
          className="p-3 lg:p-1 bg-pink-primary active:bg-pink-800 text-white rounded text-[15px] lg:text-[13px] leading-[13px] font-medium lg:ml-4 text-sm ml-4"
          // onClick={handleRechargeRequest}
        >
          Fetch Bill
        </button>
      </div>

	  {/* bill display section */}

      <div className="grid items-center justify-center">
        <div
          className={`grid grid-cols-2 w-full lg:w-[348px] border mx-auto mt-4`}
        >
          {/* card details section start*/}
          <ConfirmDetails dataPlan={postpaidConfirm}/>
          {/* card details section end*/}

          {/* ammount showing section start */}
          <div className="p-1 bg-gray-200 font-semibold text-black text-left px-6 py-2">
            Total Amount:
          </div>
          <div className="p-1 bg-gray-200 font-semibold text-black text-right px-6 py-2">
            Rs 1000
          </div>
          {/* ammount showing section end*/}

          {/* Apply coupon section start*/}
          <div className="capitalize col-span-full text-xs mt-1">
            <span
              className="inline-block w-full text-center cursor-pointer hover:text-black text-sm"
              onClick={() => setCouponState(!openCoupon)}
            >
              Apply Coupon code
              <i
                className={`fas fa-chevron-${
                  openCoupon ? "up" : "down"
                } text-xs mx-1 hover:text-black`}
              ></i>
            </span>
            {/* Apply coupon input start */}

            <span
              className={` ${
                openCoupon ? "" : "hidden"
              } flex w-full gap-2 justify-center scale-90`}
            >
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
            } col-span-full text-xs mt-1 text-green-600 text-center`}
          >
            some demo message
          </div>

          <div className="col-span-full flex mt-1">
            {/* wallet balance section start */}
            <div className="flex ml-6 items-center">
              <Checkbox
                borderColor="#f5317c"
                icon={<i class="fa-solid fa-square-check text-pink-600"></i>}
              />
              <span className="ml-1 text-gray-primary text-sm">
                Wallet Balance
              </span>
            </div>
            <span className="ml-auto mr-6 text-gray-800 font-semibold">
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
  );
};

export default PostpaidMobile;
