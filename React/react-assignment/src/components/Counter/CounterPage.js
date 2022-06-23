import styled from "styled-components";
import { Count, Toggle, AutoCounter } from "./Counter";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 1000px;
  margin: 0 auto;
`;

export default function Counter() {
  return (
    <Container>
      <Count />
      <Toggle />
      <AutoCounter />
    </Container>
  );
}
