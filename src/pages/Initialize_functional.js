import React from "react";
import { inject, observer } from "mobx-react";
import { Col, Container } from "react-bootstrap";

import Home from "./Home";

var Initialize = inject("rootStore")(
  observer(({ rootStore: { weatherStore } }) => {
    if (weatherStore.weatherData) return <Home />;
    return (
      <Container className="h-100">
        <Col className="h-100 d-flex justify-content-center align-items-center">
          <p>Loading…</p>
        </Col>
      </Container>
    );
  })
);

export default Initialize;
