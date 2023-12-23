// import MainNav from "../components/MainNav"

import { SectionContainer } from "../components/ui/Container";
import { FormGroup } from "../components/ui/FormGroup";
import { Heading } from "../components/ui/Heading";
import { Input } from "../components/ui/Input";

function BookAppointment() {
	return (
			<SectionContainer>
				<Heading>MAKE AN APPOINTMENT</Heading>
			<p>
				Book an Appointment. We guarantee to get back to you 
				within 24 hours.
      </p>
      <form>
				<FormGroup>
					<label htmlFor="name"></label>
					<Input type="text" name="name" placeholder="Name" />
				</FormGroup>
				<FormGroup>
					<label htmlFor="tel"></label>
					<Input type="tel" name="tel" placeholder="Phone" />
					
				</FormGroup>
				<FormGroup>
					<label htmlFor="services"></label>
					<select name="services" id="services">
						<option value="hairStyles">Hair name</option>
						<option value="hairStyles">Hair name</option>
						<option value="hairStyles">Hair name</option>
						<option value="hairStyles">Hair name</option>
						<option value="hairStyles">Hair name</option>
						<option value="hairStyles">Hair name</option>
					</select>
				</FormGroup>
				<FormGroup>
					<label htmlFor="appointment-time"></label>
					<Input
						type="datetime-local"
						id="appointment-time"
						name="appointment-time"
						value="2018-06-12T19:30"
						min="2018-06-07T00:00"
						max="2018-06-14T00:00" 
					/>
				</FormGroup>
      </form>
			</SectionContainer>
	);
}

export default BookAppointment;
