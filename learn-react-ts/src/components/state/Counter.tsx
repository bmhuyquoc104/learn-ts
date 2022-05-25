import React, { useReducer } from "react";

type CounterType = {
  count: number;
};

type UpdateType = {
  type: "decrement" | "increment";
  payload: number;
};

type ResetType = {
  type: "reset";
};

function Counter() {
  const initialValue = {
    count: 0,
  };
  const reducer = (state: CounterType, action: UpdateType | ResetType) => {
    switch (action.type) {
      case "increment": {
        return { count: state.count + action.payload };
      }
      case "decrement": {
        return { count: state.count - action.payload };
      }
      case "reset": {
        return initialValue;
      }
      default:
        return state;
    }
  };

  const [countState, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increase
      </button>
      <h3>Count: {countState.count}</h3>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrease
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
