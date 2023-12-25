import styled, { css } from "styled-components";


const variations = {
	menu: "",
}

export const Heading = styled.h1`
	font-size: 32px;
	line-height: 42px;
	font-weight: 900;
	text-transform: uppercase;
	font-family: var(--ff-signature);
	color: #fbbaa1;
	letter-spacing: 2px;

	${(props) =>
		props.$signin &&
		css`
			text-align: center;
			text-transform: uppercase;
			margin: 0.5em 0 1em;
		`}
	${(props) =>
		props.$about &&
		css`
			color: #fbbaa1;
			font-size: clamp(0.5rem, 6vw, 2rem);
		`}
	${(props) =>
		props.$profileHeading &&
		css`
			color: #fbbaa1;
			font-size: clamp(0.5rem, 6vw, 2rem);
			text-align: center;
			/* line-height: 2; */
			margin: 1em 0;
			position: relative;
			z-index: 4;
			font-family: var(--ff-signature);
			letter-spacing: 20px;
			/* 
			&::before {
				content: "About us";
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				color: #777;
				letter-spacing: 5px;
				z-index: -1;
				font-family: "Whisper", cursive;
				opacity: 0.3
			} */

			@media (min-width: 800px) {
				margin: 0;
			text-align: left;

			}
		`}

		${(props) =>
		props.$variation &&
		css`
			color: #fbbaa1;
			font-size: clamp(0.5rem, 6vw, 2rem);
			text-align: center;
			margin: 1em 0;
			position: relative;
			z-index: 4;
		`}


		${props=>props.$gallery && css`
			text-align: center;
			
		`}
`;
