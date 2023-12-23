// import MainNav from "../components/MainNav"

import { FaUserCircle } from "react-icons/fa";
import { FaGoogle, FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "../styles/FormIcons.module.css"
import { Button } from "../components/ui/Button";

const Heading = styled.h1`
  font-size: 2rem;
	text-align: center;
	text-transform: uppercase;
	margin: 1em 0;
`


const Input = styled.input`
  padding: 1em 1em 1em 3em;
  width: 100%;
	border-radius: 8px;
	border: 1px solid #777;
`
const FormGroup = styled.section`
	position: relative;
	& + & {
		margin-top: 1em;
	}
`
const SectionSubmit = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
margin: 1em 0;
`

function Signin() {
	return (
		<section>
			<Heading>sign in</Heading>

			<form>
				<FormGroup>
					<label htmlFor="email"></label>
					<Input type="email" name="email" id="" placeholder="Email" />
					<FaUserCircle className={styles.icon}/>
				</FormGroup>
				<FormGroup>
					<label htmlFor="password"></label>
					<Input type="password" name="password" id="" placeholder="Password" />
					<FaLock className={styles.icon} />
				</FormGroup>
				<SectionSubmit>
					<Link to="">Forgot Password?</Link>
					<Button type="submit">Login</Button>
				</SectionSubmit>
			</form>
			<section>
				<p>Or Login with: </p>
				<Button>
					<FaGoogle className={styles.google}/>
					<span>Google</span>
				</Button>
			</section>
		</section>
	);
}

export default Signin;
