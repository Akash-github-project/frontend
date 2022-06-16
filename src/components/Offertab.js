import React, { useEffect, useState } from "react"
import classNames from "classnames"
import "../css/offer.css"
import Offercard from "./offercard"
import { Tabs, useTabState, Panel } from "@bumaga/tabs"

const cn = (...args) => args.filter(Boolean).join(" ")

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button className={cn("tab", isActive && "active")} onClick={onClick}>
      {children}
    </button>
  )
}

export default ({ data }) => {
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(0)
  }, [])

  const returnIntArray = (stringArray) => {
    let baseArray = stringArray.substring(
      stringArray.indexOf("[") + 1,
      stringArray.indexOf("]")
    )
    console.log(baseArray)
    let intArray = baseArray.split(",")
    console.log(intArray)
    let finalArray = intArray.map((ele) => Number(ele))
    return [...finalArray]
  }

  const giveCashback = (dataItem) => {
    //let dataItem = JSON.parse(dataItem)
    let message = ""
    let finalData = ""
    if (
      dataItem.percentCashbackAppMode != undefined ||
      dataItem.percentCashbackWebMode !== undefined
    ) {
      //type = "percent"

      if (dataItem.percentCashbackAppMode !== undefined) {
        finalData = `Upto ${dataItem.percentCashbackAppMode}% (App)`
      }
      if (dataItem.percentCashbackWebMode !== undefined) {
        finalData = `Upto ${dataItem.percentCashbackWebMode}% (Website)`
      }

      if (
        dataItem.percentCashbackAppMode !== undefined &&
        dataItem.percentCashbackWebMode !== undefined
      ) {
        finalData = `Upto ${dataItem.percentCashbackWebMode}% (Website)  or Upto ${dataItem.percentCashbackAppMode}% (App)`
      }
      message = finalData
    }

    //type = "recurring"
    else if (
      dataItem.recurringCashbackAppMode !== undefined ||
      dataItem.recurringCashbackWebMode !== undefined
    ) {
      let appCashback = returnIntArray(dataItem.recurringCashbackAppMode)
      let appValue = appCashback.reduce((total, number) => total + number)
      let webCashback = returnIntArray(dataItem.recurringCashbackWebMode)
      let webValue = webCashback.reduce((total, number) => total + number)

      if (dataItem.recurringCashbackAppMode !== undefined) {
        finalData = `Rs ${appValue} (App)`
      }

      if (dataItem.recurringCashbackWebMode !== undefined) {
        finalData = `Rs ${webValue} (Website)`
      }

      if (
        dataItem.recurringCashbackAppMode !== undefined &&
        dataItem.recurringCashbackWebMode !== undefined
      ) {
        finalData = `Rs ${webValue} (Website) or Rs ${appValue} (App) `
      }
      message = finalData
    }
    //instant
    else if (
      dataItem.instantCashbackAppMode !== undefined &&
      dataItem.instantCashbackWebMode !== undefined
    ) {
      if (dataItem.instantCashbackAppMode !== undefined) {
        finalData = `Rs ${dataItem.instantCashbackAppMode} (App)`
      }
      if (dataItem.instantCashbackWebMode !== undefined) {
        finalData = `Rs ${dataItem.instantCashbackWebMode} (Website)`
      }

      if (
        dataItem.instantCashbackAppMode !== undefined &&
        dataItem.instantCashbackWebMode !== undefined
      ) {
        finalData = `Rs ${dataItem.instantCashbackWebMode} (Website) or Rs ${dataItem.instantCashbackAppMode} (App)`
      }
      message = finalData
    }
    return message
  }

  const giveUseTime = (usetime) => {
    let frequency = ""
    if (usetime == 1) {
      frequency = "once per account"
    } else if (usetime == 2) {
      frequency = "twice per account"
    } else if (usetime == 3) {
      frequency = "thrice per account"
    } else {
      frequency = `${usetime} times per account`
    }
    return frequency
  }

  return (
    <Tabs state={[state, setState]}>
      <div className="tabs">
        <div className="tab-list flex gap-1 md:gap-2 p-[10px]">
          {Object.keys(data).map((ele) => (
            <Tab>{ele}</Tab>
          ))}
        </div>
        {/* className="max-w-[33rem] 2xl:ml-4"  */}
        <div className="tab-progress h-2" />
        {/* <Panel> */}
        {Object.keys(data).map((element) => (
          <Panel>
            <div className="offerArea">
              {data[`${element}`].length !== 0 ? (
                data[`${element}`].map((dat) => (
                  <p
                    className={classNames({
                      "max-w-[33rem]": true,
                      "2xl:ml-4": true,
                      "self-center": data[`${element}`].length === 1,
                    })}>
                    <Offercard
                      promocode={dat.code}
                      title={dat.description}
                      cashback={giveCashback(dat)}
                      frequency={giveUseTime(dat.usetime)}
                      details={dat.tnc}
                      validTill={dat.endDate}
                    />
                  </p>
                ))
              ) : (
                <div className="w-full p-2 text-pink-primary text-center h-36 flex items-center justify-center shadow-default">
                  No offer available. Please check again tomorrow.
                </div>
              )}
            </div>
          </Panel>
        ))}
      </div>
    </Tabs>
  )
}
