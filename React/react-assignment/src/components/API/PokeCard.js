import styled from "styled-components";
import PokeDescription from "./PokeDescription";
import PokeImg from "./PokeImg";

const StyledSection = styled.section`
  border: solid black 2px;
  box-shadow: 8px 8px 8px darkgrey;
  display: flex;
  flex-direction: column;
  font-family: "Press Start 2P", cursive;
  image-rendering: pixelated;
  justify-content: center;
  margin: 0 auto;
  padding: 32px;
  text-align: center;
  width: 320px;
`;

const PokeCard = ({ pokemon }) => {
  return (
    <StyledSection>
      <h3>{pokemon && `${pokemon.name}`.toUpperCase()}</h3>
      <h3>No.{pokemon && `${pokemon.id}`.padStart(3, "0")}</h3>
      <PokeImg sprites={pokemon.sprites} />
      <PokeDescription desc={pokemon.flavor_text_entries} />
    </StyledSection>
  );
};

export default PokeCard;
