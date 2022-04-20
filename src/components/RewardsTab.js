import React, { useEffect, useState } from "react"
import "../css/tablist.css"
import { Tabs, useTabState, Panel } from "@bumaga/tabs"
import PointsCounter from "./rewardPoints/pointsCounter"
import TransactionList from "./TransactionList"
import EarnPoints from "./EarnPoints"
import Redeem from "./Redeem"

const cn = (...args) => args.filter(Boolean).join(" ")
const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <li
      className={cn("rewardsTab list-none", isActive && "active")}
      onClick={onClick}>
      {children}
    </li>
  )
}

export default ({ data }) => {
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(0)
  }, [])

  return (
    <Tabs state={[state, setState]}>
      <div className="hello">
        <ul className="rewards-tab-list flex lg:justify-center md:gap-2 overflow-x-auto">
          <Tab>Rewards Points</Tab>
          <Tab>Earn Rewards Points</Tab>
          <Tab>Redeem Rewards Points</Tab>
        </ul>
        <div className="tab-progress h-2" />
        {/* tabs 1 */}
        <Panel>
          <div className="">
            <PointsCounter points={88882} />
            <TransactionList />
          </div>
        </Panel>

        {/* tab 2 */}
        <Panel>
          <div className="">
            <EarnPoints />
          </div>
        </Panel>

        {/* tab 3 */}
        <Panel>
          <div className="w-full">
            <Redeem />
          </div>
        </Panel>
      </div>
    </Tabs>
  )
}
