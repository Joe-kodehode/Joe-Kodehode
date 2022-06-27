import styled from "styled-components";
import Business1 from "../images/Business1.jpg";
import Business2 from "../images/Business2.jpg";
import Business3 from "../images/Business3.jpg";
import Business4 from "../images/Business4.jpg";

const BusinessImg = styled.img`
  width: 300px;
  height: 300px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

function UserComponent({ userObj }) {
  return (
    <>
      <h1>Welcome, {userObj.name}</h1>
      <p>
        I see you are {userObj.age} and located in {userObj.location}
      </p>
    </>
  );
}

const users = [
  {
    name: "Joe",
    age: 34,
    location: "Stavanger",
  },
  {
    name: "Kevin",
    age: 67,
    location: "Bergen",
  },
];

export default function Images() {
  return (
    <>
      {users.map((e) => (
        <UserComponent userObj={e} />
      ))}

      <Container>
        <BusinessImg src={Business1} alt="people doing business" />
        <BusinessImg src={Business2} alt="people doing business" />
        <BusinessImg src={Business3} alt="people doing business" />
        <BusinessImg src={Business4} alt="people doing business" />
      </Container>
    </>
  );
}
