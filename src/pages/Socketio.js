import socketIOClient from "socket.io-client";
import React, { Component } from "react";

import { Row, Container } from "react-bootstrap";
import GameArea from "../components/socket_io/GameArea";
import RoomsSpace from "../components/socket_io/RoomsSpace";

class SocketIo extends Component {
  state = { data: null };

  componentDidMount() {
    const io = socketIOClient("http://localhost:5000/real-time-game-concept", {
      transports: ["websocket", { upgrade: false }],
    });

    io.on("event", (data) => {
      this.setState({ data });
    });
  }

  onChange = () => {};

  onPressBack = () => {};

  onPressForward = () => {};

  render() {
    return (
      <Container className="py-3 h-100 d-flex flex-column">
        <h1>Real-Time Game Concept</h1>
        <Row className="d-flex flex-row flex-grow-1">
          <RoomsSpace onChange={this.onChange} />
          <GameArea
            onPressBack={this.onPressBack}
            onPressForward={this.onPressForward}
          />
        </Row>
      </Container>
    );
  }
}

export default SocketIo;
