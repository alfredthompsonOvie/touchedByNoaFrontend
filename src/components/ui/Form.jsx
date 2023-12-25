import styled, { css } from "styled-components";

export const Form = styled.form`
  
  margin: 1px 0;

  ${props=>props.$appointment && css`
  
    display: grid;
    grid-template-columns: 1fr;
    

  `}
`