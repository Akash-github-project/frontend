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
      .then((eres) => {
        if (eres.status === 412) {
          AuthFunctions(authHeader, true).then(async (res) => {
            dispatch(setOnlyJwt(res.RefreshToken))
            // getRequsetWithAuth(route, params, extraHeaders)
            try {
              const res_1 = await axios.get(
                `${BASE_ROUTE}/${route}${params == null ? "" : params}`,
                {
                  headers: {
                    Authorization: `Bearer ${res.RefreshToken}`,
                    ...extraHeaders,
                  },
                }
              )
              return res_1.data
            } catch (error) {
              return error.response
            }
          })
        }
        return eres
      })
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
          AuthFunctions(authHeader, true).then(async (res) => {
            dispatch(setOnlyJwt(res.RefreshToken))

            try {
              const res_1 = await axios.post(
                `${BASE_ROUTE}/${route}${params == null ? "" : params}`,
                { ...body },
                {
                  headers: {
                    Authorization: `Bearer ${res.RefreshToken}`,
                    ...extraHeaders,
                  },
                }
              )
              return res_1.data
            } catch (error) {
              return error.response
            }
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
