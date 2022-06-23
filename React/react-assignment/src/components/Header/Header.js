import styled from "styled-components";

import Navbar from "./Navbar";

const StyledHeader = styled.header`
  margin-bottom: 20px;
  background: lightgray;
`;

const StyledH1 = styled.h1`
  margin: 0px;
  padding: 5px;
  text-align: center;
  color: black;
  border-radius: 5px;
  font-size: 50px;
  font-weight: bold;
`;

export default function Header() {
  return (
    <StyledHeader className="header">
      <StyledH1>Learning React</StyledH1>
      <Navbar />
    </StyledHeader>
  );
}
