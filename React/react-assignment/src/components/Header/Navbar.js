import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  background: whitesmoke;
  padding: 10px;
  border-bottom: 3px black solid;
  border-top: 3px black solid;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0;
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  color: Blue;
  text-decoration: none;
  background: whitesmoke;
  font-size: 30px;
  font-weight: bold;
  &:hover {
    background: lightgray;
  }
`;

export default function Navbar() {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLink to="/Home">Home</StyledLink>
        <StyledLink to="/Counter">Counter</StyledLink>
        <StyledLink to="/Props">Props</StyledLink>
        <StyledLink to="/API">API</StyledLink>
      </StyledUl>
    </StyledNav>
  );
}
