import React, { useEffect } from "react"
import Wrapper from "./wrapper"
import "../css/terms.css"
import axios from "axios"
import { useQuery } from "react-query"
import { BASE_ROUTE } from "./routes"

const Terms = () => {
  const { isLoading, error, data, refetch } = useQuery(
    "terms",
    () =>
      axios.get(`${BASE_ROUTE}/footer/name/tnc`).then((res) => {
        return res.data
      }),
    {
      staleTime: Infinity,
    }
  )
  useEffect(() => {
    refetch()
  }, [])
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
            Terms & Conditions
          </h1>
        </div>
        <div
          data-content
          dangerouslySetInnerHTML={{ __html: data.tnc }}
          className="mt-4  terms"></div>
      </div>
    </Wrapper>
  )
}

export default Terms
