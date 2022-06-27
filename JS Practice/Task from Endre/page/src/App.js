import { useState } from "react";
import "./App.css";

function App() {
  let [output, setOutput] = useState("Result goes here");
  let [input, setInput] = useState("4698");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  function calculate() {
    setOutput([...input].reduce((p, a) => +a + p, 0));
  }

  return (
    <>
      <input onChange={handleInput} type="number" />
      <button onClick={calculate}>Calculate sum</button>
      <p>{output}</p>
    </>
  );
}

export default App;

// Create a page with the following content:

// A number input field.
// A submit button.
// A blank text field.

// When user enters a number and clicks ‘Submit’, the text field should show the following:
// The sum of the digits in the number the user entered.

// Examples:

// User enters 1342 and press submit ->
// The text field should show “10” because 1 + 3 + 4 + 2 = 10

// User enters 100 and press submit ->
// The text field should show “1” because 1 + 0 + 0 = 1

// User enters 999 and press submit ->
// The text field should show “27” because 9 + 9 + 9 = 27

// 2 prizes will be awarded:

// 1 prize for the first submitted WORKING solution
// 1 prize for the coolest styled WORKING solution

// It is allowed to ask for help, but you must code the page yourself!

// The assignment is not considered delivered until a link to the github pages hosted page is linked to Change on Discord.

// Have fun!
