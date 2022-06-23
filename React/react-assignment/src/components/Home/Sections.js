import styled from "styled-components";
const StyledSection = styled.section`
  margin: 10px;
  padding: 30px 10px;
  text-align: center;
  border: black 1px solid;
  border-radius: 5px;
  font-size: 20px;
  box-shadow: 10px 10px 10px grey;
  background-color: lightpink;
`;

export const Section1 = () => {
  return (
    <StyledSection className="section">
      <h2>This is a section</h2>
    </StyledSection>
  );
};

export const Section2 = () => {
  return (
    <StyledSection className="section">
      <h2>This is another section</h2>
    </StyledSection>
  );
};
