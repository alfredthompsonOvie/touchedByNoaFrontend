import {
	Form,
	Input,
	Select,
	TextArea,
	FormGroup,
} from "../components/ui/FormElements";

import { Heading } from "../components/ui/Heading";
import { Button } from "../components/ui/Button";
import styled from "styled-components";

const StyledBookAppointment = styled.section`
	max-width: 900px;
	margin: 5em auto;
	

	p {
		max-width: 350px;
	}

	@media (min-width: 800px) {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		grid-template-rows: auto;
		gap: 2em;

		header {
			text-align: right;
		}
	}
`;

function BookAppointment() {
	return (
		<StyledBookAppointment>
			<header>
				<Heading>MAKE AN APPOINTMENT</Heading>
				<p>
					Book an Appointment. We guarantee to get back to you within 24 hours.
				</p>
			</header>
			<Form $form>
				<FormGroup $bookAppointmentName>
					<label htmlFor="name"></label>
					<Input type="text" name="name" placeholder="Name" />
				</FormGroup>

				<FormGroup $bookAppointmentPhone>
					<label htmlFor="tel"></label>
					<Input type="tel" name="tel" placeholder="Phone" />
				</FormGroup>

				<FormGroup>
					<label htmlFor="services"></label>
					<Select name="services" id="services">
						<option value="">Service</option>
						<option value="hairStyles">Hair name</option>
						<option value="hairStyles">Hair name</option>
						<option value="hairStyles">Hair name</option>
						<option value="hairStyles">Hair name</option>
						<option value="hairStyles">Hair name</option>
					</Select>
				</FormGroup>
				<FormGroup>
					<label htmlFor="appointment-time"></label>
					<Input
						type="datetime-local"
						id="appointment-time"
						name="appointment-time"
						value="2023-06-12T19:30"
						min="2023-06-07T00:00"
						max="2024-06-14T00:00"
					/>
				</FormGroup>
				<FormGroup $textArea>
					<label htmlFor="message"></label>
					<TextArea placeholder="Message" />
				</FormGroup>

				<Button $bookAppointment>Make an Appointment</Button>
			</Form>
		</StyledBookAppointment>
	);
}

export default BookAppointment;
