import React from "react";
import { inject, observer } from "mobx-react";
import { Col, Container } from "react-bootstrap";

import WeatherForecast from "./WeatherForecast";

// REFERENCE ON HOW TO INJECT STORE ON A FUNCTIONAL COMPONENT

var Initialize = inject("rootStore")(
  observer(({ rootStore: { weatherStore } }) => {
    if (weatherStore.weatherData) return <WeatherForecast />;
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
