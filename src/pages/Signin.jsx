// import MainNav from "../components/MainNav"

import { FaUserCircle } from "react-icons/fa";
import { FaGoogle, FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Heading = styled.h1`
  
`


const Input = styled.input`
  padding: 1em;
  width: 100%;
`


function Signin() {
	return (
		<section>
			<Heading>sign in</Heading>

			<form>
				<section className="formGroup">
					<label htmlFor="email"></label>
					<Input type="email" name="email" id="" placeholder="Email" />
					<FaUserCircle />
				</section>
				<section className="formGroup">
					<label htmlFor="password"></label>
					<input type="password" name="password" id="" placeholder="Password" />
					<FaLock />
				</section>
				<section>
					<Link to="">Forgot Password?</Link>
					<button type="submit">Login</button>
				</section>
			</form>
			<section>
				<p>Or Login with: </p>
				<button>
					<FaGoogle />
					<span>Google</span>
				</button>
			</section>
		</section>
	);
}

export default Signin;
