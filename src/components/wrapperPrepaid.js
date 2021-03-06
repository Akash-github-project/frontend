import React, { useState, useEffect } from "react"
import SimpleModal from "../components/userpages/simpleModal"
import Wrapper from "./wrapper"
import { Crosel } from "./Crosel"
// import Services from "./Services";
import Prepaid from "./prepaid"
import PrepaidMobile from "./subServices/prepaidMobile"
import PlansList from "./subServices/plansList"
// import Overlay from "../components/overlay";
import SecondOverlay from "./secondOverlay"
import { useSelector } from "react-redux"
import MobileView from "./subServices/mobileView"

const WrapperPrepaid = () => {
  const renderType = useSelector((state) => state.prepaidPlan.renderType)
  const showPlan = useSelector((state) => state.prepaidPlan.showPlan)
  const [openModal, setOpenModal] = useState(true)

  return (
    <>
      <Wrapper>
        <Prepaid>
          <PrepaidMobile open={() => setOpenModal(true)} />
        </Prepaid>
      </Wrapper>
      <Wrapper>
        {showPlan === true ? (
          renderType === "desktop" ? (
            <PlansList />
          ) : (
            <SimpleModal
              exClasses="p-1"
              open={openModal}
              closeModal={() => setOpenModal(false)}>
              <MobileView close={() => setOpenModal(false)} />
            </SimpleModal>
          )
        ) : null}
        {}
      </Wrapper>
    </>
  )
}

export default WrapperPrepaid
