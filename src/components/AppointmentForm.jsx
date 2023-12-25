import styled from "styled-components";
import { Heading } from "./ui/Heading";
import { Form } from "./ui/Form";
import { FormGroup } from "./ui/FormGroup";
import { Input } from "./ui/Input";
import { TextArea } from "./ui/TextArea";
import { Button } from "./ui/Button";
import { FormControl } from "./ui/FormControl";

const StyledAppointmentForm = styled.section`
  max-width: 900px;
	margin: 5em auto;

	p {
		max-width: 350px;
    margin: 1em auto 2em;
	}
  header {
			text-align: center;
      /* margin-bottom: 2em; */
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

// ----------------------------------------------------



function AppointmentForm() {
	return (
		<StyledAppointmentForm>
				<header>
					<Heading>Make an Appointment</Heading>
					<p>Book an Appointment. We guarantee to get back to you within 24 hours.</p>
				</header>
				<Form $appointment>
					<FormGroup>
						<FormControl $date>
							<label htmlFor="date">Date</label>
							<Input type="date" name="date" />
						</FormControl>
						<FormControl $date>
							<label htmlFor="time">Time</label>
							<Input type="time" name="time" />
						</FormControl>
					</FormGroup>

					<FormControl>
						<label htmlFor="name">Name</label>
						<Input type="text" name="name" placeholder="Name" />
					</FormControl>

					<FormGroup>
						<FormControl>
							<label htmlFor="email">Email</label>
							<Input type="email" name="email" placeholder="Email" />
						</FormControl>
						<FormControl>
							<label htmlFor="tel">Tel</label>
							<Input type="tel" name="tel" />
						</FormControl>
          </FormGroup>
          
					<FormControl>
						<label htmlFor="message">Message</label>
						<TextArea
							name="message"
							cols="30"
							rows="10"
							placeholder="Message"
						></TextArea>
          </FormControl>
          
					<FormGroup>
						<Button $appointment>Submit</Button>
					</FormGroup>
				</Form>

		</StyledAppointmentForm>
	);
}

export default AppointmentForm;
