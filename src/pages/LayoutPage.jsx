/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";
import styled from "styled-components";

const Main = styled.main`
	display: grid;
	grid-template-columns: 0.5fr 11fr 0.5fr;

	grid-template-rows: auto;
`;

const MainContent = styled.section`
	grid-column: 2;
	grid-row: 1;
`;

function LayoutPage() {
	return (
		<>
			<MainNav />
			<Main>
				<MainContent>
					<Outlet />
				</MainContent>
			</Main>
			<Footer />
		</>
	);
}

export default LayoutPage;
