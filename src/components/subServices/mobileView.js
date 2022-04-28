import React, { useState, useEffect } from "react"
import { Tabs, useTabState, Panel } from "@bumaga/tabs"
import apires from "../../otherData/api_finder_response.json"
import "../../css/planList.css"
import { toggleOverlay } from "../../app/features/overlaySlice"
import { useSelector, useDispatch } from "react-redux"
import { storetPlansInfo } from "../../app/features/prepaidPlansSlice"
import axios from "axios"
import opr from "../../otherData/operator.json"
import { useQuery } from "react-query"

// import circleList from "../../otherData/circle.json";

const cn = (...args) => args.filter(Boolean).join(" ")
const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button
      className={cn(
        "tab text-left border-b-2 border-white font-medium plansTab",
        isActive && "activePlan"
      )}
      onClick={onClick}>
      {children}
    </button>
  )
}

// let res = apires.categories;
// let planTypes = res.map(category => category.name);
// let plansList = res.map(category => category.plans);

const MobileView = () => {
  const [planTypes, setPlanType] = useState([])
  const [plansList, setList] = useState([])
  // const [circleVal, setCircleVal] = useState(""),;
  const opList = opr.list3
  const [state, setState] = useState(0)
  const circleItem = useSelector((state) => state.prepaidPlan.circle)
  const operator = useSelector((state) => state.prepaidPlan.operator)
  const dispatch = useDispatch()

  const { isLoading, error, data } = useQuery("repoData", () =>
    axios
      .get(
        `http://localhost:3001/?token=${"zJcgbVlZCbMfglmsPCv3cxxfzCDtnY2t"}&operator=${
          opList[`${operator}`]
        }&circle=${JSON.parse(circleItem).code}`
      )
      .then((res) => {
        let response = res.data
        console.log(res)
        let x = response.categories.map((category) => category.name)
        setPlanType(x)
        let y = response.categories.map((category) => category.plans)
        setList(y)
        return res.data
      })
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
      dispatch(toggleOverlay())
    }
  }
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>error happened</div>
  if (data.status === "OK") {
    return (
      <Tabs state={[state, setState]}>
        <div className="grid grid-cols-12 w-full gap-2 mt-2">
          <h2 className=" stickey top-6 col-span-full font-medium leading-5 capitalize text-center">
            Recharge Plans of {operator.name} -{" "}
            {circleItem.length > 1 ? JSON.parse(circleItem).name : ""}
          </h2>
          <div className="col-span-full mx-auto w-11/12">
            {
              <div className="flex w-full lg:bg-gray-100 bg-white overflow-x-auto mx-auto justify-start md:justify-center">
                {planTypes.map((planType) => (
                  <Tab>{planType}</Tab>
                ))}
              </div>
            }
          </div>
          <div className="col-span-12">
            <hr className="mt-4" />

            <div className="flex flex-col h-screen overflow-auto text-sm text-gray-primary ">
              {plansList.map((plan) => (
                <Panel>
                  <div
                    className="grid items-center text-gray-primary pb-36 lg:p-1 lg:h-[28rem] overflow-scroll"
                    onClick={handlePlanChoose}>
                    <>
                      {plan.map((eachPlan) => (
                        <div className="text-gray-primay overfolw-y-scroll flex col-span-full w-full border-b items-left justify-between text-inherit">
                          <div className="flex flex-col justify-left">
                            <div className="p-1 text-gray-900 font-medium">
                              Data: {eachPlan.data ? eachPlan.data : "N/A"}
                            </div>
                            <div className="p-1 pr-4 py-1 text-gray-primary text-[13px] leading-[13px]">
                              {eachPlan.benefit}
                            </div>
                            <div className=" w-full p-1 text-xs text-gray-500 text-left leading-3">
                              Validity: {eachPlan.validity}
                            </div>
                          </div>
                          <div className="p-1  text-pink-primary flex  flex-col justify-center  items-center">
                            <button
                              className=" mx-auto border border-pink-primary w-[75px] hover:bg-pink-primary hover:text-white rounded text-inherit p-1"
                              data-val={eachPlan.id}>
                              <span
                                className="mx-auto text-inherit hover:text-white"
                                data-val={eachPlan.id}>
                                Rs {eachPlan.amount}
                              </span>
                            </button>
                            <span className="text-center text-green-info text-xs">
                              Rs {eachPlan.dailyCost}/day
                            </span>
                          </div>
                        </div>
                      ))}
                      <div className="text-gray-primay flex h-8 col-span-full "></div>
                    </>
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

export default MobileView
