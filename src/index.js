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
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
