// import MainNav from "../components/MainNav"

import {  FaLock, FaUserCircle } from "react-icons/fa"
import { Heading } from "../components/ui/Heading"
import { FormGroup, Input } from "../components/ui/FormElements"
import GoogleAuth from "../components/ui/GoogleAuth"
import { SectionSubmit } from "../components/ui/SectionSubmit"
import { Button } from "../components/ui/Button"

function Register() {
  return (
    <section>
			<Heading $signin>sign up</Heading>

			<form>
				<FormGroup $signin>
					<label htmlFor="email"></label>
					<Input type="email" name="email" id="" placeholder="Email" $signin/>
					<FaUserCircle />
				</FormGroup>
				<FormGroup $signin>
					<label htmlFor="password"></label>
					<Input type="password" name="password" id="" placeholder="Password" $signin/>
					<FaLock />
				</FormGroup>
				<FormGroup $signin>
					<label htmlFor="confirmPassword"></label>
					<Input type="password" name="confirmPassword" id="" placeholder="Confirm Password" $signin/>
					<FaLock />
				</FormGroup>
				<SectionSubmit>
					<Button type="submit" $login>sign up</Button>
				</SectionSubmit>
			</form>
			<GoogleAuth />
		</section>
  )
}

export default Register
