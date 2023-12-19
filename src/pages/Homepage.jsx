import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";

import { FiMonitor } from "react-icons/fi";

import Slider from "../components/Slider";
import { FaClipboardList, FaUserGroup } from "react-icons/fa6";
import Footer from "../components/Footer";

function Homepage() {
	return (
		<>
			<MainNav />
			<main className="mainHome">
				<section className="hero">
					<section className="heroImgContainer">
						<img src="heroImg.jpg" alt="" />
						<div className="overlay"></div>
					</section>
					<section className="heroContent">
						<h1 className="title titleHero">
							<span className="titleBookNow">Book Now</span>
							<span className="titleBrand">TouchedByNoa</span>
						</h1>
						<p className="brandDescription">
							Enjoy top quality experiences everytime you visit!
						</p>
						<div className="lineSeparator">♦</div>
						<Link to="/appointments" className="cta">
							Book Appointment
						</Link>
					</section>
				</section>

				<section className="services">
					<section className="titleServiceContent">
						<h1 className="title titleServices">Our Services</h1>
						<div className="lineSeparator lineSeparatorDanger">✻</div>
					</section>
					<p className="servicesDescription">
						We promise you a new look and more importantly, a new attitude.
					</p>
					<section className="ourServices">
						<Link to="/hairstyles" className="card">
							<section className="cardImg">
								<FaUserGroup className="cardIcon" />
							</section>
							<section className="cardContent">
								<h1 className="cardHeading">Hairstyles</h1>
								<p className="cardDescription">
									We offer a range of up to date and classy styles that turn
									heads!
								</p>
							</section>
							<div className="cardBoard leftBoarder"></div>
							<div className="cardBoard topBoarder"></div>
							<div className="cardBoard rightBoarder"></div>
							<div className="cardBoard bottomBoarder"></div>
						</Link>
						<Link to="/appointments" className="card">
							<section className="cardImg">
								<FaClipboardList className="cardIcon" />
							</section>
							<section className="cardContent">
								<h1 className="cardHeading">Book Appointments</h1>
								<p className="cardDescription">
									We allow you to book appointments straight from our site.
									Giving you a seamless booking experience.
								</p>
							</section>
							<div className="cardBoard leftBoarder"></div>
							<div className="cardBoard topBoarder"></div>
							<div className="cardBoard rightBoarder"></div>
							<div className="cardBoard bottomBoarder"></div>
						</Link>
						<Link to="/my-appointments" className="card">
							<section className="cardImg">
								<FiMonitor className="cardIcon" />
							</section>
							<section className="cardContent">
								<h1 className="cardHeading">Your Appointments</h1>
								<p className="cardDescription">
									You can view your Booking Details one our beautifully designed
									dashboard.
								</p>
							</section>
							<div className="cardBoard leftBoarder"></div>
							<div className="cardBoard topBoarder"></div>
							<div className="cardBoard rightBoarder"></div>
							<div className="cardBoard bottomBoarder"></div>
						</Link>
					</section>
				</section>
				<section className="testimonials">
					<section className="titleServiceContent">
						<h1 className="title titleTestimonial">
							<span className="testimonialSubTitle">Here are some</span>
							<span className="testimonialTitleMain">Clients Testimonials</span>
						</h1>
						<div className="lineSeparator lineSeparatorDanger">✻</div>

						{/* image slider */}
						<section className="slider">
							<Slider />
						</section>
					</section>
				</section>
				<section className="contact">
					<section className="contactContent">

					<p>Wanna look stylish?</p>
					<Link to="/appointments" className="cta">Contact Us</Link>
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Homepage;
