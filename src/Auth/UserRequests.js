import axios from "axios"
import { BASE_ROUTE } from "../components/routes"

export const getUserInfo = (token) => {
  let response = axios
    .get(`${BASE_ROUTE}/userinfo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((error) => error.response)

  return response
}
