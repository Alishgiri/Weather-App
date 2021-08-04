import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";

class SocketIo extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="mx-4 my-3 align-items-center">
          <h1>Socket.io</h1>
        </Row>
      </Container>
    );
  }
}

export default SocketIo;
