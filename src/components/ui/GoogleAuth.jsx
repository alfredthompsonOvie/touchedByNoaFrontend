/* eslint-disable react/prop-types */
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
		opacity: 0.2;
	}
	span:last-child {
		background-color: #fff;
		display: inline-block;
		position: relative;
		padding: 0 0.5em;
	}
`;
const StyledAuth = styled.section`
	
	display: flex;
	align-items: center;
	justify-content: start;
	/* gap: 2em; */
`

function GoogleAuth({text}) {
	return (
		<section>
			<P>
				<span></span> <span>Or</span>
			</P>
			<StyledAuth>
				<p>{text} with: </p>
				<Button $google>
					<FaGoogle />
					<span>Google</span>
				</Button>
			</StyledAuth>
		</section>
	);
}

export default GoogleAuth;
