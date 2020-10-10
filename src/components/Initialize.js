import { useObserver } from "mobx-react";
import React, { useContext } from "react";
import { Col, Container } from "react-bootstrap";

import Home from "./Home";
import { StoreContext } from "..";

const Initialize = () => {
  const { weatherStore } = useContext(StoreContext);
  return useObserver(() => {
    if (weatherStore.weatherData) return <Home />;
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
