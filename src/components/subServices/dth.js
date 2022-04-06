import ConfirmDetails from "./confirmDetails";
import Button from "../button";
import { Input } from "../input";
import Checkbox from "react-custom-checkbox";
import {NumberInput} from "../numberInput"
import { useState } from "react";
import Wrapper from "../wrapper";
//to change
import dthConfirm from "./specialJsons/dthConfirm.json"

const Dth = () => {
	const [phoneNo, setPhoneNo] = useState("");
	const [openCoupon, setCouponState] = useState(false);
	const [couponState, toggleCouponState] = useState(true);

	const handleApplyCoupon = () => {
		toggleCouponState(!couponState);
	};
	return (
        <Wrapper>
            <div className="w-full">
            <div className="w-full py-2">
                DTH Recharge
            </div>
    <div className="w-full grid grid-cols-1 lg:grid-cols-7 gap-6 ">
        <div className="col-span-2">
      <div className="grid grid-cols-1 gap-4 w-full mx-auto">
            {/* select operator*/}
        <select
          name=""
          id="dthOperator"
          className="border border-pink-600 h-[34px] text-gray-primary rounded text-sm"
        >
          <option value="" className="text-gray-primary">
            Select your Operator
          </option>
          <option value="" className="text-gray-primary">
            Select your Operator
          </option>
        </select>
            {/*  select operator ends*/}
        <div className="flex flex-col w-full">
             <Input extraClasses="h-[34px] rounded-r rounded-l-none" override={{maxWidth:"100%",flex:1}} holder="Registered Mobile No"/>
             <span className="text-green-600 text-xs">
                (Subscriber ID starts with 1 and is 10 digits long. To locate it, press the home button on remote.)
             </span>
        </div>

        {/* work */}
        <div className="flex gap-2 w-full">
            <span className="bg-pink-primary text-white text-semibold p-1 px-[6px] rounded-l ">Rs.</span>
             <Input extraClasses="h-[34px] rounded-r rounded-l-none w-full" override={{maxWidth:"100%",flex:1}} holder="Ammount"/>
        </div>
        <button
          className="lg:p-1 h-[34px] w-full bg-pink-primary active:bg-pink-800 text-white rounded-r text-[15px] lg:text-[13px] leading-[13px] font-medium text-sm" placeholder="Ammount"
          // onClick={handleRechargeRequest}
        >
          Fetch Bill
        </button>
      </div>
</div>

<div className="hidden md:block lg:col-span-1"></div>
	  {/* bill display section */}

      <div className="grid md:col-span-4 ">
        <div
          className={`grid grid-cols-2 w-full lg:w-[348px] border mx-auto mt-4 md:mt-0`}
        >
          {/* card details section start*/}
          <ConfirmDetails dataPlan={dthConfirm}/>
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
                id="payFromWallet"
              />
              <label htmlFor="payFromWallet" className="ml-1 text-gray-primary text-sm">
                Wallet Balance
              </label>
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
            </div>
</Wrapper>
  );
};

export default Dth;
