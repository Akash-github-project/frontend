import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import App from "./App";
import Home from "./components/home";
import { store } from "./app/store";
import { Provider } from "react-redux";
import AboutUs from "./components/AboutUs";
import FaqSection from "./components/Faq";
import ContactUs from "./components/ContactUs";
import Terms from "./components/terms";
import Privacy from "./components/Privacy";
import Refund from "./components/Refund";
import Offers from "./components/Offers";
import Rewards from "./components/Rewards";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<App />}
						// element={<Navigate to="/home" />}
					>
						<Route path="home" element={<Home />} />
						<Route path="aboutus" element={<AboutUs />} />
						<Route path="faq" element={<FaqSection />} />
						<Route path="contactus" element={<ContactUs />} />
						<Route path="terms" element={<Terms />} />
						<Route path="privacypolicy" element={<Privacy />} />
						<Route path="refundpolicy" element={<Refund />} />
						<Route path="offers" element={<Offers />} />
						<Route path="rewards" element={<Rewards />} />
					</Route>
				</Routes>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
