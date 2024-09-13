import { Route, Routes, RouterProvider } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Home from "./Page/Home";
import AboutUs from "./Page/AboutUs";
import ContactUs from "./Page/ContactUs";

function App() {
	return (
		<>
			<div className="min-h-full transition-all duration-1500">
				<Navbar />
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5">
					<Routes>
						<Route Component={Home} path="/" />
						<Route Component={AboutUs} path="/about-us" />
						<Route Component={ContactUs} path="/contact-us" />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
