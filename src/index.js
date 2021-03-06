import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import App from "./App"
import Home from "./components/home"
import { store } from "./app/store"
import { Provider } from "react-redux"
import AboutUs from "./components/AboutUs"
import FaqSection from "./components/Faq"
import ContactUs from "./components/ContactUs"

import Terms from "./components/terms"
import Privacy from "./components/Privacy"
import Refund from "./components/Refund"
import Offers from "./components/Offers"
import Rewards from "./components/Rewards"
import Suggestions from "./components/Suggestions"
import WrapperPrepaid from "./components/wrapperPrepaid"
import WrapperPostpaid from "./components/wrapperPostpaid"
import ConfirmPage from "./components/confirmPage"
import { WalletPage } from "./components/userpages/walletPage"
import Dth from "./components/subServices/dth"
import Electricity from "./components/subServices/Electricity"
import GasLpg from "./components/subServices/gasLpg"
import GiftCard from "./components/subServices/giftCard"
import Water from "./components/subServices/water"
import BroadbandLandline from "./components/subServices/broadbandLandline"
import Insurance from "./components/subServices/insurance"
import Fastag from "./components/subServices/fastag"
import UserProfile from "./components/userpages/userProfile"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Navigate replace to="/home/prepaid" />} />

            <Route path="home" element={<Home />}>
              <Route index element={<Navigate replace to="/home/prepaid" />} />
              <Route path="prepaid" element={<WrapperPrepaid />} />
              <Route path="postpaid" element={<WrapperPostpaid />} />
              <Route path="recharge_bill_dth" element={<Dth />} />
              <Route
                path="recharge_bill_electricity"
                element={<Electricity />}
              />
              <Route path="recharge_bill_gas" element={<GasLpg />} />
              <Route path="giftcard" element={<GiftCard />} />
              <Route path="water" element={<Water />} />
              <Route path="broadbandlandline" element={<BroadbandLandline />} />
              <Route path="insurance" element={<Insurance />} />
              <Route path="fastag" element={<Fastag />} />
            </Route>

            <Route path="aboutus" element={<AboutUs />} />
            <Route path="confirm" element={<ConfirmPage />} />
            <Route path="faq" element={<FaqSection />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacypolicy" element={<Privacy />} />
            <Route path="refundpolicy" element={<Refund />} />
            <Route path="offers" element={<Offers />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="suggestions" element={<Suggestions />} />
            <Route path="addBalance" element={<WalletPage />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
