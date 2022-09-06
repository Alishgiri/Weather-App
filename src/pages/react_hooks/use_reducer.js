import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: ++state.count,
      };
    case "toggleShowtext":
      return {
        ...state,
        showText: !state.showText,
      };
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  return (
    <div className="">
      <h1>useReducer hook</h1>
      <h1>Render Count: {state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowtext" });
        }}
      >
        Click me
      </button>
      {state.showText && <h5>Text Rendered</h5>}
    </div>
  );
};

export default UseReducerHook;
