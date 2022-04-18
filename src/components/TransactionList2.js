import React, { useEffect, useRef } from "react"
import transaction from "../otherData/transactionUser.json"
import "../css/transaction.css"
const TransactionListUser = ({ userId = 1 }) => {
  let headers = ["Sr No", "Date", "Activity", "Amount"]

  let dataRef = useRef()
  useEffect(() => {
    if (userId !== -1) dataRef.current = ""
  }, [])

  return (
    <div className="tableGrid2 overflow-x-auto mt-1 ">
      {/* mapping over all header items */}
      {headers.map((header) => (
        <div className="text-gray-800 flex items-center justify-center text-sm lg:text-base bg-gray-400/30 sticky top-0">
          <span className="text-gray-primary font-bold text-sm">{header}</span>
        </div>
      ))}

      {userId === -1 ? (
        // displays no transtaction found when user isn't logged in or there is no transaction
        <div className="col-span-full text-xl font-medium text-center shadow-lg flex justify-center items-center border-2">
          <div>No transaction found</div>
        </div>
      ) : (
        <>
          {/* mapping transtaction list from row 2  */}
          {Object.keys(transaction).map((key) =>
            transaction[`${key}`].map((each) => (
              <>
                <div className="text-gray-800 flex items-center justify-center text-sm lg:text-base ">
                  <span className="text-gray-primary text-xs lg:text-sm">
                    {each.sno}
                  </span>
                </div>

                <div className="text-gray-800 flex items-center justify-center text-sm lg:text-base ">
                  <span className="text-gray-primary text-xs lg:text-sm">
                    {each.date}
                  </span>
                </div>
                <div className="text-gray-800 flex mx-4 items-center justify-left text-sm lg:text-base ">
                  <span className="text-gray-primary  w-full text-xs lg:text-sm">
                    {each.activity}
                  </span>
                </div>
                <div className="text-gray-800 flex items-center justify-center text-sm lg:text-base ">
                  <span className="text-gray-primary text-xs lg:text-sm">
                    {each.Amount}
                  </span>
                </div>
              </>
            ))
          )}
        </>
      )}
    </div>
  )
}

export default TransactionListUser
