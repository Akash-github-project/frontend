import React from "react"
import { Link } from "react-router-dom"
import "../css/services.css"

const listStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "0 10.5px",
}

const Services = () => {
  let data = {
    mobile: {
      icon: "fas fa-mobile-alt",
      heading: "Mobile",
      link: "/home/prepaid",
    },
    DTH: {
      icon: "fas fa-satellite-dish",
      heading: "DTH",
      link: "/home/recharge_bill_dth",
    },
    Electricity: {
      icon: "far fa-lightbulb",
      heading: "Electricity",
      link: "/home/recharge_bill_electricity",
    },
    BroadbandLandline: {
      icon: "fa fa-wifi",
      heading: "Broadband /Landline",
      link: "/home/broadbandLandline",
    },
    GasLpg: {
      icon: "fab fa-free-code-camp",
      heading: "Gas & LPG",
      link: "/home/recharge_bill_gas",
    },
    Water: {
      icon: "fas fa-tint",
      heading: "Water",
      link: "/home/water",
    },
    FASTag: {
      icon: "fas fa-tags",
      heading: "FASTag",
      link: "/home/fastag",
    },
    Insurance: {
      icon: "fas fa-file-medical",
      heading: "Insurance",
      link: "/home/insurance",
    },
    gifts: {
      icon: "fa fa-gift",
      heading: "GiftCard",
      link: "/home/giftcard",
    },
  }
  // let defalultBefore = "";
  return (
    <div className="min-h-[20px]">
      <ul className="service-grid">
        {Object.keys(data).map((value, i) => {
          return (
            <li
              key={i}
              className=" text-center flex flex-col justiy-center "
              title={data[`${value}`].heading}>
              <Link to={data[`${value}`].link} style={listStyle}>
                <div className="flex justify-center items-center border border-pink-600 rounded-md w-[40px] min-h-[40px]">
                  <i className={data[`${value}`].icon}></i>
                </div>
              </Link>
              <div className="break-words w-[64px] leading-[11px] mt-1 text-secondary text-[11px]">
                {data[`${value}`].heading}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Services
