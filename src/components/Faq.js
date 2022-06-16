import React, { useEffect } from "react"
import Wrapper from "./wrapper"
import Arrowdown from "./Arrowdown"
import Faq from "react-faq-component"
import "../css/Faq.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { BASE_ROUTE } from "./routes"
import { useQuery } from "react-query"

function process(x) {
  let title = Object.keys(x)
  let m = Object.keys(x).map((value) => x[`${value}`])
  // value of each query
  let eachValue = Object.values(m.map((ele) => Object.values(ele)))
  //question of each query
  let eachQuestion = Object.values(m.map((ele) => Object.keys(ele)))

  let objectItem = {}
  let list = []

  for (let i = 0; i < eachQuestion.length; i++) {
    objectItem = { title: "", rows: [] }
    let question = eachQuestion[i]
    let answer = eachValue[i]

    objectItem.title = title[i]

    for (let k = 0; k < question.length; k++) {
      objectItem.rows.push({
        title: (
          <div className="hover:text-blue-500 text-gray-primary">
            {question[k]}
          </div>
        ),

        content: <p>{answer[k]}</p>,
      })
    }
    list.push(objectItem)
  }
  return [...list]
}

const styles = {
  bgColor: "white",
  titleTextColor: "#f5317c",
  rowTitleColor: "black",
  rowTitleTextSize: "16px",
  titleTextSize: "21px",
  rowContentColor: "#535b61",
  rowContentTextSize: "14px",
}

const config = {
  animate: true,
  arrowIcon: <Arrowdown clickHandler={() => console.log("clicked arrow")} />,
}

function FaqSection() {
  const { isLoading, error, data, refetch } = useQuery(
    "faq",
    () =>
      axios.get(`${BASE_ROUTE}/faq`).then((res) => {
        return process(res.data)
      }),
    {
      staleTime: Infinity,
    }
  )

  useEffect(() => {
    refetch()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Sorry some error happened</div>
  }

  return (
    <Wrapper>
      <div className="w-full">
        <div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
          <h1 className="text-white text-[18px] py-[10px] px-1">FAQ</h1>
        </div>
        <div className="p-4 divide-x-[1px]">
          <div id="heading  ">
            <h2 className="text-[1.5rem] font-medium px-1">
              Get answers to your queries
            </h2>
          </div>
        </div>
        {/* content inside it */}
        <div className="p-5 ">
          {/* {data.map((element) => (
            <Faq data={element} styles={styles} config={config} />
          ))} */}

          {data.map((element) => (
            <Faq data={element} styles={styles} config={config} />
          ))}
        </div>

        <div className="flex flex-col justify-center my-12 mt-11">
          <p className="flex-1 text-center mb-4 text-gray-primary">
            Can't find what you're looking for? Our customer care team are here
            to help
          </p>
          <Link to="/contactus" className="mx-auto ">
            <button className="bg-pink-primary text-white p-[11px] text-[13px] leading-[13px] rounded btn-primary box-border">
              Contact Customer Care
            </button>
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default FaqSection
