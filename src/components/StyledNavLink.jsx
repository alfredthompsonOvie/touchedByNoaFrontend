/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNavLink = styled(NavLink)`
	color: #434547;
	text-transform: uppercase;
	opacity: 0.85;
	padding: 1em 1.5em;
	padding: 10px 20px;
	text-align: left;
	font-size: 12px;

	&.active {
		color: #000;
		font-weight: 600;
	}
	&:hover {
		color: #000;
		font-weight: 600;
	}
	/* font-size: ${(props) => props.$footer || "12px"} */

	${(props) =>
		props.$cta &&
		css`
			background-color: #e78b90;
			border-radius: 0.3em;
			color: #fff;
			margin-top: ${(props) => props.$footer};
			&:hover {
				color: #fff;
				/* letter-spacing: 1px; */
			}
		`}

	${(props) =>
		props.$brand &&
		css`
			/* font-family: "Whisper", cursive; */
			font-family: "Arizonia", cursive;
			font-size: 1.5rem;
		`}
	${(props) =>
		props.$footer &&
		css`
			color: #fff;

			&.active {
				color: ${(props) => props.$footercolor || "#e78b90"};
				font-weight: 400;
			}
			&:hover {
				color: ${(props) => props.$footercolor || "#e78b90"};
			}
		`}
`;

export default StyledNavLink;
