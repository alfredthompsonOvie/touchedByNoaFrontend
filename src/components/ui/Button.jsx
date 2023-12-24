import styled, { css } from "styled-components";

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1em;
	padding: 0.7em 1.2em;
	text-transform: uppercase;
	background-color: #fbbaa1;
	color: #eee;
	border: 0;
	border-radius: 8px;
	transition: all 0.3s linear;

	${(props) =>
		props.$bookAppointment &&
		css`
			border-radius: 0;
			padding: 1em 2em;
			margin-top: 1em;
			grid-column: 1/-1;

			&:hover {
				background-color: #000;
			}

			@media (min-width: 800px) {
				margin-top: 0;
			}
		`}

		${props=>props.$login && css`
			border-radius: 0;
			/* width: initial; */
			padding: .7em 2em;
			font-size: .95rem;
		
		`}
		${props => props.$google && css`
			font-size: 1rem;
			text-align: center;
			/* width: 100%; */
			padding: .7em 2em;
			/* border: 1px solid #fbbaa1; */
			/* background-color: transparent; */
			/* color: #000; */
			margin-inline: auto;

			svg {
				/* color: red; */
				
			}

		`}
`;
