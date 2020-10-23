import React from "react";
import { Col, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="h-100" fluid>
      <h1 className="mt-3 ml-4">Home</h1>
      <Col className="d-flex justify-content-center align-items-center">
        <p>Experimental playgrounds for React app features.</p>
      </Col>
    </Container>
  );
};

export default Home;
