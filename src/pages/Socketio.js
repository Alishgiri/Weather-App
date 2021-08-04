import socketIOClient from "socket.io-client";
import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Col, Row, Container, Button } from "react-bootstrap";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const SocketIo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const io = socketIOClient("http://localhost:5000");
    io.on("event", (data) => {
      setData(data);
    });
  }, []);

  const onPressBack = () => {};

  const onPressForward = () => {};

  return (
    <Container className="py-3 h-100 d-flex flex-column">
      <h1>Real-Time Game Concept</h1>
      <Row className="d-flex flex-row flex-grow-1">
        <Col>
          <h5>Select or Create a room</h5>
          <div className="input-group">
            {/* <Row className="mb-3 align-items-center justify-content-center"> */}
            <input
              type="text"
              className="form-control"
              placeholder="Create new room…"
            />
            <Button class="my-2 btn btn-outline-primary">Create</Button>
            {/* </Row> */}
          </div>
        </Col>
        <Col className="d-flex flex-column">
          <div className="bg-dark m-4 rounded d-flex flex-grow-1"></div>
          <Row className="mx-5 align-items-center justify-content-between">
            <Button className="mr-3" onClick={onPressBack}>
              <ArrowBackIcon />
            </Button>
            <h5>Players: 0</h5>
            <Button className="ml-3" onClick={onPressForward}>
              <ArrowForwardIcon />
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SocketIo;
