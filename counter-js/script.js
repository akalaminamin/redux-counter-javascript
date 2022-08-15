// global declaration
const countEL = document.getElementById("count");
const incrementEL = document.getElementById("increment");
const decrementEL = document.getElementById("decrement");
const addCounterEl = document.getElementById("addCounter");
const resetEl = document.getElementById("reset");

// types
const INCRMENENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";
const ADD_COUNTER = "addCounter";

// initial state
const initialState = {
  value: 0,
};

// action creator
const increment = (value) => {
  return {
    type: INCRMENENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// counter reducers
const counterReducer = (state = initialState, { type, payload }) => {
  if (type === INCRMENENT) {
    return {
      ...state,
      value: state.value + payload,
    };
  } else if (type === DECREMENT) {
    return {
      ...state,
      value: state.value - payload,
    };
  } else {
    return state;
  }
};

// create store
const store = Redux.createStore(counterReducer);
const render = () => {
  const state = store.getState();
  countEL.innerText = state.value.toString();
};

render();
store.subscribe(render);

// click event listiners
incrementEL.addEventListener("click", () => {
  store.dispatch(increment(2));
});

decrementEL.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
