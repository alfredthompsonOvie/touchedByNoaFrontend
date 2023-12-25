import styled, { css } from "styled-components";

export const FormControl = styled.section`
  
  margin-top: 1em;

  @media (min-width: 800px){
    ${props=>props.$date && css`
    margin-top: 0;
    `}
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
`