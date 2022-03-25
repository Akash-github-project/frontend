import React, { useEffect } from "react";
import Wrapper from "./wrapper";
import { Crosel } from "./Crosel";
import Services from "./Services";
import Prepaid from "./prepaid";
import PrepaidMobile from "./subServices/prepaidMobile";
import PlansList from "./subServices/plansList";
// import Overlay from "../components/overlay";
import SecondOverlay from "./secondOverlay";
import { useDispatch, useSelector } from "react-redux";
import { storeRenderType } from "../app/features/prepaidPlansSlice";
import {
	addElement,
	toggleOverlay,
	clearDetails,
} from "../app/features/overlaySlice";
import MobileView from "./subServices/mobileView";

const WrapperPrepaid = () => {
	const showPlan = useSelector(state => state.prepaidPlan.showPlan);
	const renderType = useSelector(state => state.prepaidPlan.renderType);

	return (
		<>
			<Wrapper>
				<Crosel />
			</Wrapper>

			<Wrapper>
				<Services />
			</Wrapper>
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
				) : (
					<div></div>
				)}
			</Wrapper>
		</>
	);
};

export default WrapperPrepaid;
