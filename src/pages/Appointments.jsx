import styled from "styled-components";
import { Heading } from "../components/ui/Heading";

// import MainNav from "../components/MainNav"
const StyledAppointments = styled.section`
	max-width: 800px;
	margin-inline: auto;
`;

function Appointments() {
	return (
		<StyledAppointments>
			
			<Heading>YOUR APPOINTMENTS</Heading>

		</StyledAppointments>
	);
}

export default Appointments;
