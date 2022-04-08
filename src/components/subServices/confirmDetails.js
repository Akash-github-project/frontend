import React from "react"
const data = {
  heading: "Confirm Recharge",
  dataColumns: [
    {
      type: "n",
      bold: false,
      title: "Mobile No",
      value: 1234567890,
    },
    {
      type: "n",
      bold: false,
      title: "Operator",
      value: "MTNL Mumbai",
    },
    {
      type: "n",
      bold: false,
      title: "Circle",
      value: "Uttar Pradesh (West) & Uttarakhand",
    },
    {
      type: "p",
      bold: false,
      title: "Plan Description",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, illum quas, consequuntur dicta tempore ad tenetur maiores voluptas et ipsum obcaecati iste ratione! Minus, fugit quaerat vero magnam aut repudiandae?",
    },
  ],
}

const ConfirmDetails = ({ dataPlan = data }) => {
  return (
    <>
      {
        <>
          <div className="col-span-full w-full py-2 px-1 bg-gray-100 text-pink-primary font-medium capitalize leading-[19px]">
            {dataPlan.heading}
          </div>

          {dataPlan.dataColumns.map((el) => (
            <>
              {/* title of data attribute */}
              <div
                className={
                  el.bold === true
                    ? "bg-gray-100 "
                    : " text-gray-primary " +
                      " text-gray-primary font-semibold text-[13px] leading-[14px] px-1 py-2 "
                }>
                {el.title}
              </div>
              {/* if it is a paragraph style its value differently */}
              {el.type === "p" ? (
                <p
                  className={
                    el.bold === true
                      ? "bg-gray-100 "
                      : " text-gray-primary " +
                        "  px-1 py-2  text-gray-primary leading-[15px] col-span-full text-left text-xs"
                  }>
                  {el.value}
                </p>
              ) : (
                <div
                  className={
                    el.bold === true
                      ? "bg-gray-100 "
                      : " text-gray-primary " +
                        "  px-1 py-2 font-semibold text-gray-primary text-right text-[13px] leading-[14px]"
                  }>
                  {el.value}
                </div>
              )}
            </>
          ))}
        </>
      }
    </>
  )
}

export default ConfirmDetails
