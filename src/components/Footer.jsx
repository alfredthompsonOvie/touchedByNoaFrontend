import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import StyledNavLink from "./StyledNavLink";
import styled from "styled-components";

const StyledFooter = styled.footer`
	grid-column: 1/-1;

	display: grid;
	grid-template-columns: 0.5fr 11fr 0.5fr;
	grid-template-rows: auto auto;
	background-color: #2c2c2c;
	color: #eeedec;

	a {
		font-size: 1rem;
	}
`;

const NavItem = styled.li`
	& + & {
		margin-top: 0.5em;
	}

	&:last-child {
		margin-top: 1em;
	}
`;

const SocialList = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2em;
	margin-top: 2em;

	@media (min-width: 700px) {
		margin-top: 0em;
		margin-left: auto;
	}
`;

const FooterContent = styled.section`
	background-color: #2c2c2c;
	grid-column: 2;
	grid-row: 1;
	padding: 4em 0;
	display: flex;
	flex-direction: column;
	gap: 1em;
	align-items: center;
	justify-content: center;

	@media (min-width: 700px) {
		flex-direction: row;
		align-items: start;
		justify-content: flex-start;

		.socialList {
			margin-top: 0em;
			margin-left: auto;
		}
	}
`;
const Copyright = styled.section`
	background-color: #373737;
	text-align: center;
	grid-column: 1/-1;
	grid-row: 2;
	padding: 1em;
`;

// icon FFBBA1
// text 737373

function Footer() {
	return (
		<StyledFooter className="footer">
			<FooterContent className="footerContent">
				<StyledNavLink to="/" $brand $footer="2rem">
					@touchByNoa
				</StyledNavLink>
				<ul>
					<NavItem className="navItem">
						<StyledNavLink to="/hairstyles" $footer>
							Hairstyles
						</StyledNavLink>
					</NavItem>
					<NavItem className="navItem">
						<StyledNavLink to="/my-appointments" $footer>
							My Appointments
						</StyledNavLink>
					</NavItem>
					<NavItem className="navItem">
						<StyledNavLink to="/sign-in" $footer>
							Signin
						</StyledNavLink>
					</NavItem>

					<NavItem className="navItem navItemCta">
						<StyledNavLink
							to="/appointments"
							$cta
							$footer="1em"
							$footercolor="#000"
						>
							Book Appointments
						</StyledNavLink>
					</NavItem>
				</ul>

				<SocialList>
					<li>
						<a href="https://facebook.com" target="_blank" rel="noreferrer">
							<FaSquareFacebook className="footerIcon" />
						</a>
					</li>
					<li>
						<a href="https://twitter.com" target="_blank" rel="noreferrer">
							<FaXTwitter className="footerIcon" />
						</a>
					</li>
					<li>
						<a href="https://instagram.com" target="_blank" rel="noreferrer">
							<FaInstagramSquare className="footerIcon" />
						</a>
					</li>
				</SocialList>
			</FooterContent>
			<Copyright>
				<p>Copyright © 2023. All Rights Reserved.</p>
			</Copyright>
		</StyledFooter>
	);
}

export default Footer;
