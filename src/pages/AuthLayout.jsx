import { NavLink, Outlet } from "react-router-dom";
import { SectionContainer } from "../components/ui/Container";
import styled from "styled-components";

// icon FFBBA1
/* background-color: #ffbba1; */
// text 737373
const StyledAuth = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto;

	max-width: 400px;
	margin: 2em auto 4em;
	/* margin: 0 auto; */
	/* @media (min-width: 800px) {
		max-width: 800px;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		gap: 0em;
		box-shadow: 1px 1px 10px rgb(0, 0, 0);
    border-radius: 20px;
    overflow: hidden;
	} */
`;

const StyledAside = styled.aside`
	grid-column: 1;
	grid-row: 1;
	display: flex;
	align-items: center;
	/* @media (min-width: 800px) {
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		grid-column: 1;
		grid-row: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
    align-items: flex-end;
		background-image: url("/img4.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
		background-color: red;
	} */
`;

const StyledMain = styled.section`
	grid-column: 1;
	grid-row: 2;
	padding: 1em 1em 3em;
	/* border-radius: 8px; */
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	/* box-shadow: 1px 1px 10px rgb(0, 0, 0); */

	-webkit-box-shadow: 10px 10px 31px 0px rgba(0,0,0,0.32);
-moz-box-shadow: 10px 10px 31px 0px rgba(0,0,0,0.32);
box-shadow: 10px 10px 31px 0px rgba(0,0,0,0.32);
	background-color: #fff;
	/* @media (min-width: 800px) {
		grid-column: 2;
		grid-row: 1;
    border-radius: 0;
    box-shadow: 0px 0px 0px rgb(0, 0, 0)
	} */
`;

const StyledLink = styled(NavLink)`
	padding: 1em;
	display: block;
	width: 100%;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 2px;
	opacity: 0.5;
	&.active {
		/* box-shadow: 1px 1px 10px rgb(0, 0, 0); */
		opacity: 1;
		color: #fbbaa1;
		font-weight: bold;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;

		-webkit-box-shadow: 10px 10px 31px 0px rgba(0,0,0,0.32);
-moz-box-shadow: 10px 10px 31px 0px rgba(0,0,0,0.32);
box-shadow: 10px 10px 31px 0px rgba(0,0,0,0.32);
	}

	/* @media (min-width: 800px) {
		display: inline;
		width: initial;
		position: relative;
		z-index: 2;
    
		&.active {
      background-color: #fff;

			padding: 1em 2.5em;
      box-shadow: 0px 0px 0px rgb(0, 0, 0);

			border-top-right-radius: 0px;
			border-top-left-radius: 8px;
			border-bottom-left-radius: 8px;

			&::before, &::after {
				content: "";
				clip-path: polygon(54% 70%, 70% 53%, 81% 38%, 89% 25%, 96% 11%, 100% 0, 100% 100%, 0 100%, 17% 93%, 34% 84%);
				background-color: #fff;
				width: 1.9em;
				height: 50%;
				position: absolute;
				right: -1px;
				z-index: 0;
			}

			&::before {
				top: -50%;
			}
			&::after {
				bottom: -50%;
				transform: rotateX(180deg);
			}
		}
	} */
`;

function AuthLayout() {
	return (
		<SectionContainer>
			<StyledAuth>
				<StyledAside>
					<StyledLink to="/sign-in">signin</StyledLink>
					<StyledLink to="/signup">signup</StyledLink>
				</StyledAside>
				<StyledMain>
					<Outlet />
				</StyledMain>
			</StyledAuth>
		</SectionContainer>
	);
}

export default AuthLayout;
