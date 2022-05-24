import React from "react"
import Wrapper from "./wrapper"
import "../css/terms.css"
import axios from "axios"
import { useQuery } from "react-query"
import { BASE_ROUTE } from "./routes"

const Refund = () => {
  const { isLoading, error, data } = useQuery(
    "refundPolicy",
    () =>
      axios.get(`${BASE_ROUTE}/footer/name/refundpolicy`).then((res) => {
        return res.data
      }),
    {
      staleTime: Infinity,
    }
  )
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Sorry some error happened</div>
  }
  return (
    <Wrapper>
      <div className="w-full">
        <div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
          <h1 className="text-white text-[18px] py-[10px] px-1">
            Refund Policy
          </h1>
        </div>
        <div
          data-content
          dangerouslySetInnerHTML={{ __html: data.refundpolicy }}
          className="mt-4 terms privacy"></div>
      </div>
    </Wrapper>
  )
}

export default Refund
