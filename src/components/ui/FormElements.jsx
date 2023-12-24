import styled, { css } from "styled-components";

export const Form = styled.form`
	margin: 3em 0;
	@media (min-width: 550px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(4, auto);
		gap: 1em;
	}
	${(props) =>
		props.$form &&
		css`
			@media (min-width: 800px) {
				margin: 0;
			}
		`}
`;

export const FormGroup = styled.section`
	& + & {
		margin-top: 1em;
	}
	@media (min-width: 550px) {
		& + & {
			margin-top: 0em;
		}
	}
	position: relative;
	svg {
		position: absolute;
		top: 50%;
		left: 10px;
		transform: translateY(-50%);
		font-size: 1.2rem;
		/* width: 2rem; */
		color: #fbbaa1;
	}

	${(props) =>
		props.$signin &&
		css`
			@media (min-width: 550px) {
				& + & {
					margin-top: 1em;
				}
			}
		`}
	${(props) =>
		props.$bookAppointmentName &&
		css`
			@media (min-width: 550px) {
				grid-column: 1;
			}
		`}
	${(props) =>
		props.$bookAppointmentPhone &&
		css`
			@media (min-width: 550px) {
				grid-column: 2;
			}
		`}

    ${(props) =>
		props.$bookAppointmentDate &&
		css`
			@media (min-width: 550px) {
				grid-column: 2;
				grid-row: 2;
			}
		`}

    ${(props) =>
		props.$textArea &&
		css`
			@media (min-width: 550px) {
				grid-column: 1/-1;
				grid-row: 3;
			}
		`}
`;

export const Input = styled.input`
	border-color: rgba(44, 44, 44, 0.15);
	color: #6a6a6a;
	padding: 1em;
	border-radius: 8px;
	width: 100%;

	${(props) =>
		props.$signin &&
		css`
			padding: 1em 1em 1em 3em;
			width: 100%;
		`}
`;

export const Select = styled.select`
	border-color: rgba(44, 44, 44, 0.15);
	color: #6a6a6a;
	width: 100%;
	padding: 1em;
	border-radius: 8px;

	${(props) =>
		props.$bookAppointmentSelect &&
		css`
			@media (min-width: 550px) {
				grid-column: 1;
				grid-row: 2;
			}
		`}
`;

export const TextArea = styled.textarea`
	border-color: rgba(44, 44, 44, 0.15);
	color: #6a6a6a;
	padding: 1em;
	width: 100%;
	border-radius: 8px;
`;
