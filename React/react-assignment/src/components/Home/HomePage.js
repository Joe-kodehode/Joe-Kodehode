import styled from "styled-components";
import { Section1, Section2 } from "./Sections";
import planet from "../images/planet.jpg";

const StyledImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border-radius: 10px;
`;

export default function Home() {
  return (
    <div>
      <StyledImg src={planet} alt="a planet" className="heroImg" />
      <Section1 />
      <Section2 />
    </div>
  );
}
