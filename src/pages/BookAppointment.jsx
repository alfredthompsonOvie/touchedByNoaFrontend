// import MainNav from "../components/MainNav"

import { SectionContainer } from "../components/ui/Container";

function BookAppointment() {
	return (
			<SectionContainer>
				<h1>book appointment</h1>
				<form>
					<section className="formGrop">
						<label htmlFor="date"></label>
					</section>
					<section className="formGrop">
						<label htmlFor="date"></label>
					</section>
					<section className="formGrop">
						<label htmlFor="email"></label>
					</section>
					<section className="formGrop">
						<label htmlFor="fullname"></label>
						<input type="text" name="fullname" id="" placeholder="full name"/>
					</section>
					<section className="formGrop">
						<label htmlFor="phoneNumber"></label>
						<input type="number" placeholder="phone number"/>
					</section>
				</form>
			</SectionContainer>
	);
}

export default BookAppointment;
