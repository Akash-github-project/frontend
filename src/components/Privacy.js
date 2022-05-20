import React from "react"
import Wrapper from "./wrapper"
import "../css/terms.css"
import "../css/privacy.css"
import { BASE_ROUTE } from "./routes"
import { useQuery } from "react-query"
import axios from "axios"

const Privacy = () => {
  const { isLoading, error, data } = useQuery("privacyPolicy", () =>
    axios.get(`${BASE_ROUTE}/footer/name/privpolicy`).then((res) => {
      return res.data
    })
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
            Privacy Policy
          </h1>
        </div>
        <div
          data-content
          dangerouslySetInnerHTML={{ __html: data.privpolicy }}
          className="mt-4  terms privacy"></div>
      </div>
    </Wrapper>
  )
}

export default Privacy
