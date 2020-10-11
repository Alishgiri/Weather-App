import React from "react";
import { Col, Container } from "react-bootstrap";

const LoadingPlaceholder = () => (
  <Container className="h-100">
    <Col className="h-100 d-flex justify-content-center align-items-center">
      <p>Loading…</p>
    </Col>
  </Container>
);

export default LoadingPlaceholder;
