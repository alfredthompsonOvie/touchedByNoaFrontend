
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import StyledNavLink from "./StyledNavLink";
import styled from "styled-components";


const FooterContent = styled.section`
background-color: #2C2C2C;
`
const Copyright = styled.section`
background-color: #373737;
text-align: center;
`

// icon FFBBA1
// text 737373

function Footer() {
	return (
		<footer className="footer">
			<section className="footerContent">
				<StyledNavLink to="/" $brand $footer="2rem">
					@touchByNoa
				</StyledNavLink>
				<ul>
					<li className="navItem">
						<StyledNavLink to="/hairstyles" $footer>
							Hairstyles
						</StyledNavLink>
					</li>
					<li className="navItem">
						<StyledNavLink to="/my-appointments" $footer>
							My Appointments
						</StyledNavLink>
					</li>
					<li className="navItem">
						<StyledNavLink to="/sign-in" $footer>
							Signin
						</StyledNavLink>
					</li>

					<li className="navItem navItemCta">
						<StyledNavLink to="/appointments" $cta $footer="1em" $footercolor="#000">
							Book Appointments
						</StyledNavLink>
					</li>
				</ul>

				<ul className="socialList">
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
				</ul>
			</section>
			<Copyright>

			</Copyright>
		</footer>
	);
}

export default Footer;
