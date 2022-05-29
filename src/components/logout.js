import axios from "axios"
import { BASE_ROUTE } from "./routes"

export const logout = async (userName) => {
  let response = ""
  response = axios
    .get(`${BASE_ROUTE}/byesite/${userName}`)
    .then((res) => res.data)
    .catch((error) => error.response)
  return response
}
