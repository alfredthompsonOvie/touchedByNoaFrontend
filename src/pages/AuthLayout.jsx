import { NavLink, Outlet } from "react-router-dom";
import { SectionContainer } from "../components/ui/Container";
import styled from "styled-components";

const StyledAuth = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto;
  /* border: 1px solid; */
  margin: 2em 0 4em;
`;

const StyledAside = styled.aside`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
`

const StyledMain = styled.section`
grid-column: 1;
grid-row: 2;
padding: 1em;
/* background-color: red; */
/* border-radius: 8px; */
border: 1px solid;
`

const StyledLink = styled(NavLink)`
  padding: 1em;
  display: block;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  &.active {
    border: 1px solid;
    border-bottom: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`

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
