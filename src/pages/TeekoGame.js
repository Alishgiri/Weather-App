import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Col, Container } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";

import Block from "../components/teeko_game/Block";
import { teekoBlocks } from "../util/teeko_game_constants";

const styles = (theme) => ({
  board: {
    width: 340,
    height: 340,
    marginTop: 20,
    display: "flex",
    borderWidth: 15,
    borderStyle: "solid",
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "3px 3px 15px grey",
  },
  board_inner: {
    width: 300,
    height: 300,
    paddingTop: 5,
    borderWidth: 6,
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: 5,
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "black",
    position: "relative",
    justifyContent: "center",
  },
  emblishment1: {
    top: 30,
    left: 30,
    right: 30,
    bottom: 30,
    zPosition: 0,
    borderWidth: 4,
    borderColor: "grey",
    borderStyle: "solid",
    position: "absolute",
  },
  emblishment2: {
    top: 85,
    left: 85,
    right: 85,
    bottom: 85,
    zPosition: 0,
    borderWidth: 4,
    borderColor: "grey",
    borderStyle: "solid",
    position: "absolute",
  },
});

@inject("teekoStore")
@observer
class TeekoGame extends Component {
  render() {
    const {
      classes,
      teekoStore: {
        redPositions,
        circleClicked,
        selectedPiece,
        blackPositions,
        redPlayerIndicator,
        blackPlayerIndicator,
      },
    } = this.props;
    return (
      <Container className="h-100" fluid>
        <h1 className="mt-3">Teeko Game</h1>
        <Col className="d-flex justify-content-center align-items-center">
          <div className={classes.board}>
            <div className={classes.board_inner}>
              <div className={classes.emblishment1} />
              <div className={classes.emblishment2} />
              {teekoBlocks.map((v) => {
                var colorIndicator;
                if (redPositions.includes(v))
                  colorIndicator = redPlayerIndicator;
                else if (blackPositions.includes(v))
                  colorIndicator = blackPlayerIndicator;
                return (
                  <Block
                    key={v}
                    color={colorIndicator}
                    onClick={() => circleClicked(v)}
                    selectedAreaColor={
                      selectedPiece === v ? "#52cbff" : "white"
                    }
                  />
                );
              })}
            </div>
          </div>
        </Col>
      </Container>
    );
  }
}

export default withStyles(styles)(TeekoGame);
