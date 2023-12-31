import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Appointments from "./pages/Appointments";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import BookAppointment from "./pages/BookAppointment";
import LayoutPage from "./pages/LayoutPage";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AuthLayout from "./pages/AuthLayout";
import About from "./pages/About";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Homepage />} />
				<Route element={<LayoutPage />}>
					<Route path="about-us" element={<About />} />
					<Route path="services" element={<Services />} />
					<Route path="my-appointments" element={<Appointments />} />
					<Route  element={<AuthLayout />}>
						<Route path="sign-in" element={<Signin />} />
						<Route path="signup" element={<Register />} />
					</Route>
					<Route path="appointments" element={<BookAppointment />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
