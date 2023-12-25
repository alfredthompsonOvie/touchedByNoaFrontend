import styled from "styled-components";

export const Nav = styled.nav`
	display: grid;
	grid-template-columns: 0.5fr 11fr 0.5fr;

	grid-template-rows: 6em;
	/* background-color: #000; */
  /* position: fixed; */
`;

export const NavContents = styled.section`
	grid-column: 2;
	grid-row: 1;
  max-width: 1440px;
  /* max-width: 900px; */
  width: 100%;
  margin-inline: auto;


  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  /* padding: 1em; */
  /* background-color: blue; */
  /* height: 5em; */
`;

// export default Nav;
