import React from "react"

const EachTransaction = ({
  icon,
  name,
  date,
  time,
  value,
  transactionId,
  status,
  userIdentifier,
}) => {
  return (
    <div className="bg-white border border-pink-primary p-1 shadow-default rounded">
      <div className="text-center text-xs h-3 text-gray-primary">
        {transactionId}
      </div>
      <div className="flex p-1">
        <span className="flex justify-center items-center p-1">
          <i className={`${icon} text-2xl`}></i>
        </span>
        <div className="flex flex-col flex-1 items-start px-1">
          <span>{name}</span>
          <span className="text-xs">{userIdentifier}</span>
        </div>
        <div className="px-1 roboto">₹ {value}</div>
      </div>
      <div className="flex justify-between">
        <span className="text-xs px-2 text-gray-primary ">{`${date}:${time}`}</span>
        {status === true ? (
          <span className="text-xs px-2 text-gray-primary">
            Your transaction succeded
          </span>
        ) : (
          <span className="text-xs px-2 text-gray-primary ">
            Your transaction falied
          </span>
        )}
      </div>
    </div>
  )
}

export default EachTransaction
