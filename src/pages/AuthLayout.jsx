import { NavLink, Outlet } from "react-router-dom";
import { SectionContainer } from "../components/ui/Container";
import styled from "styled-components";

const StyledAuth = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto;
	/* border: 1px solid; */
	margin: 2em auto 4em;
	// icon FFBBA1
	/* background-color: #ffbba1; */
	// text 737373
	max-width: 400px;
	/* margin: 0 auto; */
	@media (min-width: 800px) {
		max-width: 800px;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		gap: 0em;
		box-shadow: 1px 1px 10px rgb(0, 0, 0);
    border-radius: 20px;
    overflow: hidden;
	}
`;

const StyledAside = styled.aside`
	grid-column: 1;
	grid-row: 1;
	display: flex;
	align-items: center;
	@media (min-width: 800px) {
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		grid-column: 1;
		grid-row: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
    align-items: flex-end;
		/* background-image: url("/img4.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
		/* border-radius: 20px; */
		/* padding: 5em; */
		background-color: red;
	}
`;

const StyledMain = styled.section`
	grid-column: 1;
	grid-row: 2;
	padding: 1em 1em 3em;
	/* border-radius: 8px; */
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	box-shadow: 1px 1px 10px rgb(0, 0, 0);
	background-color: #fff;
	@media (min-width: 800px) {
		grid-column: 2;
		grid-row: 1;
		/* border-bottom-left-radius: 0px;
		border-bottom-right-radius: 8px;
		border-top-right-radius: 8px; */
    border-radius: 0;
    box-shadow: 0px 0px 0px rgb(0, 0, 0)
	}
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
		box-shadow: 1px 1px 10px rgb(0, 0, 0);
		opacity: 1;
		color: #fbbaa1;

		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}

	@media (min-width: 800px) {
		display: inline;
		width: initial;
		position: relative;
    
		&.active {
      background-color: #fff;
			/* 
		opacity: 1;
		color: #fbbaa1; */

			padding: 1em 2.5em;
      box-shadow: 0px 0px 0px rgb(0, 0, 0);

			border-top-right-radius: 0px;
			border-top-left-radius: 8px;
			border-bottom-left-radius: 8px;
		}
	}
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
