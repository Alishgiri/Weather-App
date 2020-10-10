import { useObserver } from "mobx-react";
import React, { useContext } from "react";
import { Col, Container } from "react-bootstrap";

import { storeContext } from "..";
import Home from "./Home";

const Initialize = () => {
  const store = useContext(storeContext);
  return useObserver(() => {
    if (store.weatherData) return <Home />;
    return (
      <Container className="h-100">
        <Col className="h-100 d-flex justify-content-center align-items-center">
          <p>Loading…</p>
        </Col>
      </Container>
    );
  });
};

export default Initialize;
