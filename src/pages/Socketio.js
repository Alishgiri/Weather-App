import socketIOClient from "socket.io-client";
import React, { useState, useEffect } from "react";

import { Row, Container } from "react-bootstrap";
import GameArea from "../components/socket_io/GameArea";
import RoomsSpace from "../components/socket_io/RoomsSpace";

const SocketIo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const io = socketIOClient("http://localhost:5000/real-time-game-concept", {
      transports: ["websocket", { upgrade: false }],
    });

    io.on("event", (data) => {
      setData(data);
    });
  }, []);

  const onChange = () => {};

  const onPressBack = () => {};

  const onPressForward = () => {};

  return (
    <Container className="py-3 h-100 d-flex flex-column">
      <h1>Real-Time Game Concept</h1>
      <Row className="d-flex flex-row flex-grow-1">
        <RoomsSpace onChange={onChange} />
        <GameArea onPressBack={onPressBack} onPressForward={onPressForward} />
      </Row>
    </Container>
  );
};

export default SocketIo;
