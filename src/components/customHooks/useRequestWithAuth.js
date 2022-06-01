import axios from "axios"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { AuthFunctions } from "../../Auth/AuthFunctions"
import { BASE_ROUTE } from "../routes"
import { setOnlyJwt } from "../../app/features/loginManager"

export const useRequestWithAuth = () => {
  let response = ""
  const authHeader = useSelector(
    (state) => state.loginManager.jwtAndAuth?.Token
  )
  const dispatch = useDispatch()
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
    console.log(`Bearer ${authHeader}`)
    response = axios
      .post(
        `${BASE_ROUTE}/${route}${params == null ? "" : params}`,
        { ...body },
        {
          headers: {
            Authorization: `Bearer ${authHeader}`,
            ...extraHeaders,
          },
        }
      )
      .then((res) => res.data)
      .catch((error) => error.response)
      .then((eres) => {
        if (eres.status === 412) {
          AuthFunctions(authHeader, true).then((res) => {
            dispatch(setOnlyJwt(res.data))
            return postRequsetWithAuth(route, params, extraHeaders, body)
          })
        }
        return eres
      })

    return response
  }
  return {
    getRequsetWithAuth: getRequsetWithAuth,
    postRequsetWithAuth: postRequsetWithAuth,
  }
}
