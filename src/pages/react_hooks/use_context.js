import { Container } from "react-bootstrap";
import React, { createContext, useContext, useState } from "react";

const CountContext = createContext();

const UseContextHook = () => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <Container className="h-100" fluid>
        <h1>useContext Hook</h1>
        <p>count: {count}</p>
        <Component2 />
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </Container>
    </CountContext.Provider>
  );
};

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const count = useContext(CountContext);

  return (
    <>
      <h2>Component 3</h2>
      <p>count = {count}</p>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h3>Component 4</h3>
      <Component5 />
    </>
  );
}

function Component5() {
  const count = useContext(CountContext);
  return (
    <>
      <h4>Component 5: {`count -> ${count}`}</h4>
    </>
  );
}

export default UseContextHook;
