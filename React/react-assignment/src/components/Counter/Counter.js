import styled from "styled-components";
import { useEffect, useState } from "react";

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: lightgrey;
  padding: 10px;
  width: 200px;
  height: 300px;
  font-size: 30px;
  border: black solid 2px;
  border-radius: 20px;
  text-align: center;
`;

const StyledButton = styled.button`
  padding: 5px 10px;
  margin: 5px;
  display: inline;
`;

// Counter with +/- buttons
export const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <CounterContainer>
      <h4>Counter</h4>
      <p>{count}</p>
      <StyledButton onClick={() => setCount(count + 1)}>Add</StyledButton>
      <StyledButton onClick={() => setCount(count - 1)}>Subtract</StyledButton>
    </CounterContainer>
  );
};

// Toggle true/not true StyledButton
export const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <CounterContainer>
      <h4>On / Off Toggle</h4>
      <p>{toggle ? "true" : "not true"}</p>
      <StyledButton onClick={() => setToggle(!toggle)}>Toggle</StyledButton>
    </CounterContainer>
  );
};

// Auto counter
export const AutoCounter = () => {
  const [countNum, setCountNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCountNum(countNum + 1);
    }, 1000);
    return function cleanup() {
      console.log("Exited the component/app");
    };
  }, [countNum]);

  return (
    <CounterContainer>
      <h4>Auto Counter</h4>
      <div className="CounterContainer">
        <p>{countNum}</p>
      </div>
    </CounterContainer>
  );
};
