import axios from "axios"
import React from "react"
import { useSelector } from "react-redux"
import { BASE_ROUTE } from "../routes"

export const useRequestWithAuth = () => {
  let response = ""
  const authHeader = useSelector((state) => state.loginManager.jwtAndAuth.Token)
  //used to perform get requset with defalut request header
  const getRequsetWithAuth = async (
    route,
    params = null,
    extraHeaders = {}
  ) => {
    console.log(" ")
    response = axios
      .get(`${BASE_ROUTE}/${route}${params == null ? "" : params}`, {
        headers: {
          Authorization: `Bearer ${authHeader}`,
          ...extraHeaders,
        },
      })
      .then((res) => res.data)
      .catch((error) => error.response)
    return response
  }

  const postRequsetWithAuth = async (
    route,
    params = null,
    extraHeaders = {},
    body = {}
  ) => {
    response = axios
      .post(`${BASE_ROUTE}/${route}${params == null ? "" : params}`, {
        ...body,
        headers: {
          Authorization: `Bearer ${authHeader}`,
          ...extraHeaders,
        },
      })
      .then((res) => res.data)
      .catch((error) => error.response)
    return response
  }
  return {
    getRequsetWithAuth: getRequsetWithAuth,
    postRequsetWithAuth: postRequsetWithAuth,
  }
}
