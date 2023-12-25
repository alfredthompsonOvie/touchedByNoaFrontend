import styled, { css } from "styled-components";

export const FormControl = styled.section`
  
  margin-top: 1em;

  @media (min-width: 800px){
    ${props=>props.$date && css`
    margin-top: 0;
    `}
  }

`