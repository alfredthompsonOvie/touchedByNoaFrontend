/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";

function LayoutPage({ children }) {
	return (
		<>
			<MainNav />
			<main className="grid">
				<section className="gridContent">{children}</section>
			</main>
			<Footer />
		</>
	);
}

export default LayoutPage;
