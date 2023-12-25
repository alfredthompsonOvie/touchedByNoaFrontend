// import MainNav from "../components/MainNav"

import { FaUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { Button } from "../components/ui/Button";
import { FormGroup, Input } from "../components/ui/FormElements";
import { Heading } from "../components/ui/Heading";
import GoogleAuth from "../components/ui/GoogleAuth";
import { SectionSubmit } from "../components/ui/SectionSubmit";
import { FormControl } from "../components/ui/FormControl";



function Signin() {
	return (
		<section>
			<Heading $signin>sign in</Heading>

			<form>
				<FormControl $signin>
					<label htmlFor="email"></label>
					<Input type="email" name="email" id="" placeholder="Email" $signin />
					<FaUserCircle  />
				</FormControl>
				<FormControl $signin>
					<label htmlFor="password"></label>
					<Input
						type="password"
						name="password"
						id=""
						placeholder="Password"
						$signin
					/>
					<FaLock/>
				</FormControl>
				<SectionSubmit>
					<Link to="">Forgot Password?</Link>
					<Button type="submit" $login>Login</Button>
				</SectionSubmit>
			</form>
			<GoogleAuth text="Login"/>
		</section>
	);
}

export default Signin;
