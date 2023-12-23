// import MainNav from "../components/MainNav"

import { FaGoogle, FaLock, FaUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

function Register() {
  return (
    <section>
			<h1>sign up</h1>

			<form>
				<section className="formGroup">
					<label htmlFor="email"></label>
					<input type="email" name="email" id="" placeholder="Email" />
					<FaUserCircle />
				</section>
				<section className="formGroup">
					<label htmlFor="password"></label>
					<input type="password" name="password" id="" placeholder="Password" />
					<FaLock />
				</section>
				<section className="formGroup">
					<label htmlFor="confirmPassword"></label>
					<input type="password" name="confirmPassword" id="" placeholder="Confirm Password" />
					<FaLock />
				</section>
				<section>
					<Link to="">Forgot Password?</Link>
					<button type="submit">Login</button>
				</section>
			</form>
			<section>
				<p>Or Sign Up with: </p>
				<button>
					<FaGoogle />
					<span>Google</span>
				</button>
			</section>
		</section>
  )
}

export default Register
