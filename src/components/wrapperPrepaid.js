import React from "react"
import Wrapper from "./wrapper"
import { Crosel } from "./Crosel"
// import Services from "./Services";
import Prepaid from "./prepaid"
import PrepaidMobile from "./subServices/prepaidMobile"
import PlansList from "./subServices/plansList"
// import Overlay from "../components/overlay";
import SecondOverlay from "./secondOverlay"
import { useSelector } from "react-redux"
// import { storeRenderType } from "../app/features/prepaidPlansSlice";
// // import {
// // 	addElement,
// // 	toggleOverlay,
// // 	clearDetails,
// // } from "../app/features/overlaySlice";
// import MobileView from "./subServices/mobileView";
// import LoginOverlay from "./loginOverlay";

const WrapperPrepaid = () => {
  const renderType = useSelector((state) => state.prepaidPlan.renderType)
  const showPlan = useSelector((state) => state.prepaidPlan.showPlan)
  return (
    <>
      <Wrapper>
        <Prepaid>
          <PrepaidMobile />
        </Prepaid>
      </Wrapper>
      <Wrapper>
        {showPlan === true ? (
          renderType === "desktop" ? (
            <PlansList />
          ) : (
            <SecondOverlay
              toUse="element"
              side="left"
              icon="fa-solid fa-arrow-left"
            />
          )
        ) : null}
        {}
      </Wrapper>
    </>
  )
}

export default WrapperPrepaid
