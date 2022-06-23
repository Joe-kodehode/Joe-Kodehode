import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  border: solid black 2px;
  box-shadow: 8px 8px 8px darkgrey;
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
