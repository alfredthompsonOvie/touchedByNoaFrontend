// import MainNav from "../components/MainNav"

import { FaUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { Button } from "../components/ui/Button";
import { FormGroup, Input } from "../components/ui/FormElements";
import { Heading } from "../components/ui/Heading";
import GoogleAuth from "../components/ui/GoogleAuth";
import { SectionSubmit } from "../components/ui/SectionSubmit";



function Signin() {
	return (
		<section>
			<Heading $signin>sign in</Heading>

			<form>
				<FormGroup $signin>
					<label htmlFor="email"></label>
					<Input type="email" name="email" id="" placeholder="Email" $signin />
					<FaUserCircle  />
				</FormGroup>
				<FormGroup $signin>
					<label htmlFor="password"></label>
					<Input
						type="password"
						name="password"
						id=""
						placeholder="Password"
						$signin
					/>
					<FaLock/>
				</FormGroup>
				<SectionSubmit>
					<Link to="">Forgot Password?</Link>
					<Button type="submit" $login>Login</Button>
				</SectionSubmit>
			</form>
			<GoogleAuth />
		</section>
	);
}

export default Signin;
