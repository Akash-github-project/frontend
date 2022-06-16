import React, { useEffect } from "react"
import "../css/offer.css"
import Wrapper from "./wrapper"
import Tabbed from "./Offertab"
import Overlay from "./overlay"
import { useQuery } from "react-query"
import { BASE_ROUTE } from "./routes"
import axios from "axios"

const Offers = () => {
  const { isLoading, error, data, refetch } = useQuery(
    "offers",
    () =>
      axios
        .get(`${BASE_ROUTE}/offers`)
        .then((res) => res.data)
        .catch((error) => error.response),
    {
      staleTime: Infinity,
    }
  )

  useEffect(() => {
    refetch()
  }, [])

  const formatRespone = (response) => {
    let wallet = response.wallet
    let recharge = response.recharge
    let giftcard = response.giftcard
    let utility = response.utility

    let newRes = {
      Wallet: [...wallet],
      Recharge: [...recharge],
      Utility: [...utility],
      Giftcard: [...giftcard],
    }

    return { ...newRes }
  }

  return (
    <Wrapper>
      <Overlay title={"Terms & Conditions"} />
      <div className="w-full">
        <div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
          <h1 className="text-white text-[18px] py-[10px] px-1">Offers</h1>
        </div>
        <div className="relative -top-2">
          {isLoading ? (
            <div>wait</div>
          ) : error ? (
            <div>error</div>
          ) : (
            <Tabbed data={formatRespone(data)} />
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default Offers
