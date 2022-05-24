import React, { useEffect, useState } from "react"
import axios from "axios"
import opr from "../../otherData/operator.json"
import { useQuery } from "react-query"
import { Tabs, useTabState, Panel } from "@bumaga/tabs"
import "../../css/planList.css"
import operator from "../../otherData/operator.json"
import { useDispatch, useSelector } from "react-redux"
import { storetPlansInfo } from "../../app/features/prepaidPlansSlice"
import {
  storeCircle,
  storeOperator,
  storeShowPlan,
  storeRenderType,
  showConfirmBill,
  toggleCouponState,
} from "../../app/features/prepaidPlansSlice"
import { BASE_ROUTE } from "../routes"
//operator list
let operatorList = operator.list.map((item) => ({
  name: item.op_name,
  value: item.op_key,
  photo: item.image,
  code: item.op_code,
}))

const Tab = ({ children }) => {
  const cn = (...args) => args.filter(Boolean).join(" ")
  const { isActive, onClick } = useTabState()

  return (
    <button
      className={cn(
        "tab text-left border-b-2 lg:border-0",
        isActive && "activePlan"
      )}
      onClick={onClick}>
      {children}
    </button>
  )
}

const PlansList = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState(0)
  const circle = useSelector((state) => state.prepaidPlan.circle)
  const operator = useSelector((state) => state.prepaidPlan.operator)
  const [planTypes, setPlanType] = useState([])
  const [plansList, setList] = useState([])
  const opList = opr.list3

  useEffect(() => {
    setState(0)
  }, [])

  const filterOperator = () => {
    let returnValue = operatorList.filter(
      (element) => element.value == operator
    )
    let operatorName = returnValue[0].name
    return operatorName
  }

  const { isLoading, error, data } = useQuery(
    "repoData",
    () =>
      axios
        .get(
          `${BASE_ROUTE}/api/mplansparam/${opList[`${operator}`]}/${
            JSON.parse(circle).code
          }`
        )
        .then((res) => {
          let response = res.data
          console.log(res)
          let x = response.categories.map((category) => category.name)
          setPlanType(x)
          let y = response.categories.map((category) => category.plans)
          setList(y)
          return res.data
        }),
    {
      staleTime: Infinity,
    }
  )

  const handlePlanChoose = (e) => {
    let flatList
    let plan
    let receivedId = e.target.getAttribute("data-val")
    console.log(receivedId)
    if (receivedId) {
      flatList = plansList.flat(2)
      console.log(flatList)
      plan = flatList.filter((plan) => plan.id == receivedId)
      dispatch(storetPlansInfo({ ...plan[0] }))
    }
  }

  if (isLoading)
    return <div className="w-full h-full bg-green-400">Loading...</div>
  if (error) return <div>error happened</div>
  if (data.status === "OK") {
    return (
      <Tabs state={[state, setState]}>
        <div className="hidden lg:grid grid-cols-12 w-full gap-1 mt-2 ">
          <div className="lg:hidden w-full font-medium leading-5 capitalize col-span-full text-center">
            Recharge Plans of {filterOperator()} - {JSON.parse(circle).name}
          </div>
          {/* <div className="flex flex-col col-span-full w-full lg:col-span-2 lg:max-w-40 xl:w-48 mr-auto"> */}
          <div className="flex flex-col w-full col-span-2 mr-auto">
            {
              <div className="flex justify-center lg:justify-start lg:flex-col border-b lg:border w-full lg:mx-0 bg-white lg:bg-gray-100">
                {planTypes.map((planType) => (
                  <Tab>{planType}</Tab>
                ))}
              </div>
            }
          </div>
          <div className=" col-span-full lg:col-span-10 pl-8 xl:pl-4">
            <h2 className="hidden lg:block w-full font-medium leading-5 capitalize">
              Recharge Plans of {filterOperator()} - {JSON.parse(circle).name}
            </h2>
            <hr className="mt-4" />

            <div className="flex flex-col h-96 overflow-auto relative text-sm text-gray-primary">
              <div className="hidden  w-full sticky top-0 lg:flex justify-around items-center bg-white">
                <div className="des  text-left">Description</div>
                <div className="oth  text-center ">Data</div>
                <div className="oth  text-center ">Validity</div>
                <div className="oth  text-center ">Amount</div>
              </div>
              {plansList.map((plan) => (
                <Panel>
                  <div
                    className="grid items-center text-gray-primary"
                    onClick={handlePlanChoose}>
                    {plan.map((eachPlan) => (
                      <div className="flex col-span-full w-full border-b border-gray-separator items-center justify-around text-inherit">
                        <div className="hidden lg:block p-1 text-gray-primary  text-inherit des">
                          {eachPlan.benefit}
                        </div>
                        <div className="hidden lg:block  p-1 text-gray-primary  text-inherit text-center oth">
                          {eachPlan.data}
                        </div>
                        <div className="hidden lg:block p-1 text-gray-primary  text-inherit text-center oth">
                          {eachPlan.validity === "na"
                            ? "N/A"
                            : eachPlan.validity}
                        </div>

                        <div className="p-1  text-pink-primary flex flex-col oth justify-center">
                          <button
                            className=" mx-auto border border-pink-primary w-[75px] hover:bg-pink-primary hover:text-white rounded text-inherit p-1"
                            data-val={eachPlan.id}>
                            <span
                              className="mx-auto text-inherit hover:text-white"
                              data-val={eachPlan.id}>
                              Rs {eachPlan.amount}
                            </span>
                          </button>
                          <small className="text-center text-green-info text-[11px]">
                            Rs {eachPlan.dailyCost}/day
                          </small>
                        </div>
                      </div>
                    ))}
                  </div>
                </Panel>
              ))}
            </div>
          </div>
        </div>
      </Tabs>
    )
  } else {
    return <div>Invlid data</div>
  }
}

export default PlansList
