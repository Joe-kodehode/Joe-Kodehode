import { createStore } from "redux";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Actions
function plus(input) {
  return {
    type: "PLUS",
    payload: input,
  };
}

function minus(input) {
  return {
    type: "MINUS",
    payload: input,
  };
}

// Reducer

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "PLUS":
      console.log(state);
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "MINUS":
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
}

// Store
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(plus(10));

function App() {
  return (
    <div className="calcContainer">
      <title>React-Redux Calculator</title>
      <div className="outputContainer">
        <p className="output">OUTPUT</p>
      </div>
      <div className="keypad">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>del</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button>/</button>
        <button>x</button>
        <button>reset</button>
        <button>=</button>
      </div>
    </div>
  );
}
export default App;
