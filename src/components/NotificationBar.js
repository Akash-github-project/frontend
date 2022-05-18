import React from "react"
import "../css/notificationBar.css"
import Marquee from "react-fast-marquee"
import axios from "axios"
import { BASE_ROUTE } from "./routes"
import { useQuery } from "react-query"

const NotificationBar = () => {
  const { isLoading, error, data } = useQuery(
    "privacyPolicy",
    () =>
      axios.get(`${BASE_ROUTE}/footer/name/noticebar`).then((res) => {
        return res.data
      }),
    {
      // enabled: false,
      staleTime: Infinity,
    }
  )
  if (isLoading) {
    return (
      <div>
        <p className="text-current text-xs">{"Loading..."}</p>
      </div>
    )
  }
  if (error) {
    return (
      <div>
        <p className="text-current text-xs">{"Sorry some error happened"}</p>
      </div>
    )
  }

  return (
    <Marquee gradient={false} className="marqueeStyles">
      {data.Message}
    </Marquee>
  )
}

export default NotificationBar
