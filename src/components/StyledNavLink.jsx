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

	${(props) =>
		props.$cta &&
		css`
			background-color: #e78b90;
			border-radius: 0.3em;
			color: #fff;
		`}
	${(props) =>
		props.$cta && props.$footer &&
		css`
			margin-top: 1em;
		`}
	${(props) =>
		props.$brand &&
		css`
			/* font-family: "Whisper", cursive; */
			font-family: "Arizonia", cursive;
		`}
	${(props) =>
		props.$footer &&
		css`
			color: #fff;
		`}
`;

export default StyledNavLink;
