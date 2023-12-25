/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNavLink = styled(NavLink)`
	color: #434547;
	text-transform: uppercase;
	opacity: 0.85;
	padding: 10px 20px;
	text-align: left;
	font-size: 12px;
	transition: all 0.4s linear;

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
			opacity: 1;

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
			font-size: clamp(1rem, 1vw, 1.5rem);
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

	${(props) =>
		props.$ctaAbout &&
		css`
			color: #fff;
			background-color: #e78b90;
			display: inline-block;
			text-align: center;
			/* margin-inline: auto; */
			margin-top: 1em;
			padding: 1em 2em;
			font-size: 1rem;
			/* letter-spacing: 2px; */
			opacity: 1;

			&:hover {
				background-color: #000;
				color: #fff;
			}
		`}
`;

export default StyledNavLink;
