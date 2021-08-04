import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { Row, Container } from "react-bootstrap";
import GameArea from "../components/socket_io/GameArea";
import RoomsAndActivities from "../components/socket_io/RoomsAndActivities";

@inject("realTimeGameStore")
@observer
class SocketIo extends Component {
  componentDidMount() {
    this.props.realTimeGameStore.initializeConnection();
  }

  componentWillUnmount() {
    this.props.realTimeGameStore.closeConnection();
  }

  render() {
    const {
      realTimeGameStore: {
        players,
        activities,
        onPressDone,
        onPressDownward,
        onPressUpward,
        onPressJoinRoom,
        onChangeRoomName,
        onChangeYourColor,
      },
    } = this.props;
    return (
      <Container className="py-3 h-100 d-flex flex-column" fluid>
        <h1>Real-Time Game Concept</h1>
        <Row className="d-flex flex-row flex-grow-1">
          <GameArea
            players={players}
            onPressDownward={onPressDownward}
            onPressUpward={onPressUpward}
          />
          <RoomsAndActivities
            activities={activities}
            onPressDone={onPressDone}
            onPressJoin={onPressJoinRoom}
            onChangeRoomName={onChangeRoomName}
            onChangeYourColor={onChangeYourColor}
          />
        </Row>
      </Container>
    );
  }
}

export default SocketIo;
