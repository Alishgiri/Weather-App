import React, { Component } from "react";
import { Col, Container } from "react-bootstrap";

class ImageCrop extends Component {
  render() {
    return (
      <Container className="h-100" fluid>
        <h1 className="mt-3">Image Crop Tool</h1>
        <Col className="d-flex justify-content-center align-items-center"></Col>
      </Container>
    );
  }
}

export default ImageCrop;
