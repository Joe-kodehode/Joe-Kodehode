const redux = require("redux");

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
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "PLUS":
      console.log(state);
      return {
        count: state.count + action.payload,
      };
    case "MINUS":
      return {
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

store.dispatch(plus(5));
