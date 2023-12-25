// import MainNav from "../components/MainNav"

import {  FaLock, FaUserCircle } from "react-icons/fa"
import { Heading } from "../components/ui/Heading"
import { Input } from "../components/ui/FormElements"
import GoogleAuth from "../components/ui/GoogleAuth"
import { SectionSubmit } from "../components/ui/SectionSubmit"
import { Button } from "../components/ui/Button"
import { FormControl } from "../components/ui/FormControl"

function Register() {
  return (
    <section>
			<Heading $signin>sign up</Heading>

			<form>
				<FormControl $signin>
					<label htmlFor="email"></label>
					<Input type="email" name="email" id="" placeholder="Email" $signin/>
					<FaUserCircle />
				</FormControl>
				<FormControl $signin>
					<label htmlFor="password"></label>
					<Input type="password" name="password" id="" placeholder="Password" $signin/>
					<FaLock />
				</FormControl>
				<FormControl $signin>
					<label htmlFor="confirmPassword"></label>
					<Input type="password" name="confirmPassword" id="" placeholder="Confirm Password" $signin/>
					<FaLock />
				</FormControl>
				<SectionSubmit>
					<Button type="submit" $signup>sign up</Button>
				</SectionSubmit>
			</form>
			<GoogleAuth text="Signup"/>
		</section>
  )
}

export default Register
