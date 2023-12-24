import styled, { css } from "styled-components";

export const Heading = styled.h1`
	font-size: 32px;
	line-height: 42px;
	font-weight: 900;
	text-transform: uppercase;

	${(props) =>
		props.$signin &&
		css`
			text-align: center;
			text-transform: uppercase;
			margin: 0.5em 0 1em;
      color: #fbbaa1;
		`}
`;
