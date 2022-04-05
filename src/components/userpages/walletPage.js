import React from "react"
import Wrapper from "../wrapper"
import { Button } from "@mui/material";

export const WalletPage = () =>{
    let walletBalance = 100;
    return (
        <Wrapper>
			<div className="w-full">
				<div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
					<h1 className="text-white text-[18px] py-[10px] px-1">Add Wallet</h1>
				</div>
                <div className="w-full grid grid-cols-2 relative">
                    <div className="flex">
                        <img src="images/wallet.svg" alt="" className="w-5"/>                
                        <span className="inline-block font-bold text-gray-primary">RecgergeAXN Wallet Balance </span>       
                        <img src="images/rupee.svg" alt="" className="w-2 text-pink-primary"/>
                        <strong>
                            {walletBalance}
                        </strong>
                    </div>
                    <div className="flex">
                        <img src="images/wallet.svg" alt="" className="w-5"/>                
                        <span className="inline-block font-bold text-gray-primary">Total Cashback Won</span>       
                        <img src="images/rupee.svg" alt="" className="w-2 text-pink-primary"/>
                        <strong>
                            {walletBalance}
                        </strong>
                    </div>
                    <span className="inline-block absolute top-0 right-2">
                        <Button variant="contained" color="primary">View</Button>
                    </span>
                </div>
            </div>
        </Wrapper>
    )
}