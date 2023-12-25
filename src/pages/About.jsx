import { Heading } from "../components/ui/Heading";
import styled from "styled-components";
import StyledNavLink from "../components/StyledNavLink";
import AppointmentForm from "../components/AppointmentForm";
import Gallery from "../components/Gallery";

const StyledAboutHeader = styled.section`
	background-image: url("/about8.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	min-height: calc(100vh - 5em);

	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	padding: 1em;

`;
const HeaderContent = styled.section`
	display: inline-block;
	color: #fff;
	padding: 2em;
	border-radius: 8px;
	text-align: center;

	background: rgba(255, 255, 255, 0.2);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);
	border-radius: 10px;

	p {
		margin: 1em 0;
	}
`;

const StyledSpan = styled.span`
	color: #fbbaa1;
	font-weight: bold;
	letter-spacing: 3px;
	font-size: 2rem;
	font-family: var(--ff-signature);
`;

const Profile = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, auto);
	position: relative;
	padding: 2em 0 4em;

	&::before {
		content: "";
		width: 50%;
		height: 38em;
		/* background-color: #C8B9A0; */
		background-color: #ede9e3;

		position: absolute;
		z-index: -1;
	}

	@media (min-width: 800px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;

		&::before {
			width: 15em;
		}
	}
`;
const ProfileImg = styled.section`
	grid-column: 1;
	grid-row: 1;
	max-width: 300px;
	width: 100%;
	margin-inline: auto;
	margin-top: 3em;

	@media (min-width: 800px) {
		grid-column: 1;
		grid-row: 1;
	}
`;
const ProfileDetail = styled.section`
	grid-column: 1;
	grid-row: 2;

	text-align: center;

	p {
		max-width: 500px;
		margin-inline: auto;
		margin: 1em auto;
		line-height: 2;
	}

	@media (min-width: 800px) {
		grid-column: 2;
		grid-row: 1;
		align-self: center;
		text-align: left;
	}
`;
// #C8B9A0;
const Menu = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, auto);
	position: relative;
	padding: 2em 0 4em;

	text-align: center;

	@media (min-width: 800px) {
		grid-template-columns: 0.8fr 1.2fr;
		grid-template-rows: auto;
		gap: 2em;
	}
	@media (min-width: 992px) {
		gap: 4em;
	}
`;
const SalonImg = styled.section`
	max-width: 800px;
	width: 100%;

	margin-inline: auto;

	img {
		height: 100%;
	}

	@media (min-width: 800px) {
		grid-column: 2;
		grid-row: 1;
	}
`;
const MenuDetails = styled.section`
	@media (min-width: 800px) {
		grid-column: 1;
		grid-row: 1;
		align-self: center;
		justify-self: end;
		text-align: right;
	}
`;

const MenuList = styled.ul`
	max-width: 300px;
	width: 100%;
	margin-inline: auto;
	margin-bottom: 2em;

	@media (min-width: 800px) {
		grid-column: 1;
		grid-row: 1;
		align-self: center;
		text-align: right;
	}
`;

const MenuItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2em;
`;



function About() {
	return (
		<div>
			<StyledAboutHeader>
				<HeaderContent>
					<Heading $about>@touchedByNoa</Heading>
					<p>
						More than Just <StyledSpan>Beauty </StyledSpan>{" "}
					</p>
					<StyledNavLink to="/appointments" $ctaAbout>
						Book Appointment
					</StyledNavLink>
				</HeaderContent>
			</StyledAboutHeader>

			<Profile>
				<ProfileImg>
					<img src="profile.jpg" alt="" />
				</ProfileImg>
				<ProfileDetail>
					<Heading $profileHeading>About Us</Heading>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						assumenda reprehenderit tenetur eaque velit obcaecati repellat
						asperiores natus alias, commodi dolore iusto nesciunt cum deleniti?
						Nemo reprehenderit earum quas minus!
					</p>

					<StyledNavLink to="/appointments" $ctaAbout>
						Book Appointment
					</StyledNavLink>
				</ProfileDetail>
			</Profile>

			<Menu>
				<SalonImg>
					<img src="salon.jpg" alt="" />
				</SalonImg>
				<MenuDetails>
					<Heading $variation>Opening Hours</Heading>
					<MenuList>
						<MenuItem>
							<span>Monday-Friday</span>
							<span>7AM - 10PM</span>
						</MenuItem>
						<MenuItem>
							<span>Saturday</span>
							<span>9AM - 10PM</span>
						</MenuItem>
						<MenuItem>
							<span>Sunday</span>
							<span>2PM - 10PM</span>
						</MenuItem>
					</MenuList>
					<StyledNavLink to="/appointments" $ctaAbout>
						Book Appointment
					</StyledNavLink>
				</MenuDetails>
			</Menu>

			{/* Gallery */}
			<Gallery />

			{/* Book an Appointment */}
			<AppointmentForm />
		</div>
	);
}

export default About;
