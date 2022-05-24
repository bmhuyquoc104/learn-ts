import React, { useReducer } from "react";

function Counter() {
  const initialValue = {
    count: 0,
  };
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "increment": {
        return { count: state.count + action.payload };
      }
      case "decrement": {
        return { count: state.count - action.payload };
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
    </div>
  );
}

export default Counter;
