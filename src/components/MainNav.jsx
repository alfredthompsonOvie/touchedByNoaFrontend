
import Hamburger from "./Hamburger";
import styles from "../styles/MainNav.module.css";
import { useEffect, useState } from "react";
import StyledNavLink from "./StyledNavLink";
import { Nav, NavContents } from "./Nav";

function MainNav() {
	const [isActive, setIsActive] = useState(false);
	function handleClick() {
		setIsActive(!isActive);
	}
	useEffect(() => {
		window.addEventListener("resize", () => {
			setIsActive(false);
		});

		return () => {
			window.removeEventListener("resize", () => {
				setIsActive(false);
			});
		};
	}, []);

	return (
		<Nav>
			<NavContents>
				<StyledNavLink to="/" $brand>
					@touchByNoa
				</StyledNavLink>

				<Hamburger isActive={isActive} onHandleClick={handleClick} />

				<ul className={`${styles.navList} ${isActive ? styles.active : ""}`}>
					{/* <li className={styles.navItem}>
						<StyledNavLink to="/">Home</StyledNavLink>
					</li> */}
					<li className={styles.navItem}>
						<StyledNavLink to="/hairstyles">Hairstyles</StyledNavLink>
					</li>
					<li className={styles.navItem}>
						<StyledNavLink to="/my-appointments">My Appointments</StyledNavLink>
					</li>
					<li className={styles.navItem}>
						<StyledNavLink to="/sign-in">Signin</StyledNavLink>
					</li>

					<li className={styles.navItem}>
						<StyledNavLink to="/appointments" $cta>
							Book Appointments
						</StyledNavLink>
					</li>
				</ul>
			</NavContents>
		</Nav>
	);
}

export default MainNav;
