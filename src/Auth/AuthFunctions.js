import axios from "axios"
import { BASE_ROUTE, IP_API } from "../components/routes"

export const AuthFunctions = async (auth, isRefreshTokenRequired) => {
  let returnValue = axios
    .get(`${BASE_ROUTE}/refreshtoken`, {
      headers: {
        Authorization: `Bearer ${auth}`,
        isRefreshToken: isRefreshTokenRequired,
      },
    })
    .then((res) => res.data)
    .catch((error) => error.response)

  return returnValue
}

export const makeUserSpecificRequest = async (
  requestFunction = async () => {}
) => {
  let response = await requestFunction()
  if (response.data.status !== 200 && response.data.status !== 403) {
  }
}

export const getClientIpAddress = async () => {
  let response = axios
    .get(IP_API)
    .then((res) => {
      if (res.data != undefined && res.data.ip != undefined) return res.data.ip
    })
    .catch((error) => error.response)
  return response
}
