import { FaGoogle } from "react-icons/fa";
import { Button } from "./Button";
import styled from "styled-components";

const P = styled.p`
	text-align: center;
	margin: 1em 0;
	position: relative;
	text-transform: uppercase;
	span:first-child {
		display: block;
		width: 50%;
		height: 1px;
		background-color: #000;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%);
		opacity: .2;
	}
	span:last-child {
		background-color: #fff;
		display: inline-block;
		position: relative;
		padding: 0 .5em;
	}
`;

function GoogleAuth() {
	return (
		<section>
			<P>
				<span></span> <span>Or</span>
			</P>
			<Button $google>
				<FaGoogle />
				<span>Google</span>
			</Button>
		</section>
	);
}

export default GoogleAuth;
