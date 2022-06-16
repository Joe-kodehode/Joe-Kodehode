import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  color: black;
  padding: 10px;
  margin: 0;
  font-size: 30px;
  background: lightgray;
  border-top: 1px black solid;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4.5rem;
`;

export const Footer = () => {
  return <StyledFooter className="footer">Footer goes here</StyledFooter>;
};
