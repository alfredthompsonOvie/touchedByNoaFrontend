import styled from "styled-components";

export const FormGroup = styled.section`
  display: grid;
  gap: 1em;
  
  @media (min-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
	}

  &:last-of-type {
    margin-top: 1em;
  }
`