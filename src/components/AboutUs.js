import React from "react"
import Wrapper from "./wrapper"
import { useQuery } from "react-query"
import "../css/AboutUs.css"

import ThumbsUp from "./images/thumbsUp"
import Eye from "./images/eye"
import Plane from "./images/plane"
import axios from "axios"
import { BASE_ROUTE } from "./routes"

const AboutUs = () => {
  let iconList = []
  iconList[0] = <ThumbsUp />
  iconList[1] = <Plane />
  iconList[2] = <Eye />
  const { isLoading, error, data } = useQuery("repoData", () =>
    axios
      .get(`${BASE_ROUTE}/footer/name/aboutus`)
      .then((res) => res.data)
      .catch((errors) => console.log(errors))
  )

  let cmsData = {
    AboutUs: `
			<p>
			We are technology driven Instant Online recharging and Bill Payments solution company. Started RechargeAXN with a vision to grow and put our footprint in digital world of recharge and bill payment business.			</p>`,
    WhyUs: `<p>
		We know your requirement and to make your life better financially.
			</p>`,
    OurMission: `	<p>
		To provide best margin to our users and helps them to grow in market.
			</p>`,
    OutVision: `
			<p>
			To grow and reach to everyone mind.
			</p>`,
  }
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
          <h1 className="text-white text-[18px] py-[10px] px-1">About Us</h1>
        </div>
        <div className="p-4">
          <div id="heading">
            <h2 className="text-[1.5rem] font-medium">What is RechargeAXN?</h2>
          </div>
          <div
            data-content
            // dangerouslySetInnerHTML={{ __html: cmsData.AboutUs }}></div>
            dangerouslySetInnerHTML={{ __html: data.aboutus }}></div>

          <div
            className="grid mt-6 grid-cols-1 lg:grid-cols-3 mb-2 "
            id="AboutUs">
            <div className="relative px-[15px] pt-2">
              <div className="absolute top-0 left-0 w-[45px] h-[45px] flex justify-center items-center  ">
                <ThumbsUp />
              </div>
              <h3 className="text-[1.25rem] pl-[45px] ">Why Choose Us</h3>
              <div
                data-content
                // dangerouslySetInnerHTML={{ __html: cmsData.WhyUs }}></div>
                dangerouslySetInnerHTML={{
                  __html: `<p>${data.chooseus}</p>`,
                }}></div>
            </div>

            <div className="relative px-[15px]  pt-2">
              <div className="absolute top-0 left-0 w-[45px] h-[45px]  flex justify-center items-center  ">
                <Plane />
              </div>
              <h3 className="text-[1.25rem] pl-[45px] ">Our Mission</h3>
              <div
                data-content
                dangerouslySetInnerHTML={{
                  __html: `<p>${data.ourmission}</p>`,
                }}></div>
            </div>
            <div className="relative  px-[15px]  pt-2">
              <div className="absolute top-0 left-0 w-[45px] h-[45px]  flex justify-center items-center  ">
                <Eye />
              </div>
              <h3 className="text-[1.25rem] pl-[45px] ">Our Vision</h3>
              {/* pending no api route provided */}
              <div
                data-content
                dangerouslySetInnerHTML={{
                  __html: `<p>${data.ourvision}</p>`,
                }}></div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default AboutUs
