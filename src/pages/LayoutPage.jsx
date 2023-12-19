/* eslint-disable react/prop-types */
import MainNav from "../components/MainNav";

function LayoutPage({ children }) {
	return (
		<>
			<MainNav />
			<main className="grid">
				<section className="gridContent">{children}</section>
			</main>
		</>
	);
}

export default LayoutPage;
