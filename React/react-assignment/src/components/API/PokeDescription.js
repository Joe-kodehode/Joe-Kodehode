import styled from "styled-components";

const StyledPre = styled.pre`
  font-family: "Press Start 2P", cursive;
  text-align: left;
`;

const PokeDescription = ({ desc }) => {
  return (
    <StyledPre>
      {desc &&
        desc
          .find(
            ({ language, version }) =>
              language.name === "en" && version.name === "red"
          )
          .flavor_text.replace("\u000c", "\n")}
    </StyledPre>
  );
};

export default PokeDescription;
