import { observable, action, makeObservable } from "mobx";

import { teekoValidMoves } from "../util/teeko_game_constants";

export default class TeekoStore {
  isBlackTurn = true;
  redPlayerIndicator = "#bd172a";
  blackPlayerIndicator = "#3b3233";

  @observable selectedPiece;
  @observable.ref redPositions = [];
  @observable.ref blackPositions = [];

  constructor() {
    makeObservable(this);
  }

  @action
  circleClicked = (position) => {
    const isRedReserved = this.redPositions.includes(position);
    const isBlackReserved = this.blackPositions.includes(position);

    const isAllRedPiecesOnBoard = this.redPositions.length === 4;
    const isAllBlackPiecesOnBoard = this.blackPositions.length === 4;

    if (isRedReserved || isBlackReserved) {
      if (this.isBlackTurn) {
        if (isAllBlackPiecesOnBoard && !isRedReserved) {
          this.selectedPiece = position;
        } else {
          alert(`You need to select a "BLACK" piece.`);
        }
      } else {
        if (isAllRedPiecesOnBoard && !isBlackReserved) {
          this.selectedPiece = position;
        } else {
          alert(`You need to select a "RED" piece.`);
        }
      }
      console.log("Selected Piece", this.selectedPiece);
      return;
    }

    if (this.isBlackTurn) {
      if (isAllBlackPiecesOnBoard && !this.selectedPiece) {
        alert(`Please select a "BLACK" piece to move.`);
        return;
      }
      if (
        isAllBlackPiecesOnBoard &&
        !teekoValidMoves[this.selectedPiece].includes(position)
      ) {
        alert(`Invalid Move!`);
        return;
      }
      if (isAllBlackPiecesOnBoard) {
        const index = this.blackPositions.indexOf(this.selectedPiece);
        this.blackPositions.splice(index, 1);
      }
      this.blackPositions = [...this.blackPositions, position];
    } else {
      if (isAllRedPiecesOnBoard && !this.selectedPiece) {
        alert(`Please select a "RED" piece to move.`);
        return;
      }
      if (
        isAllRedPiecesOnBoard &&
        !teekoValidMoves[this.selectedPiece].includes(position)
      ) {
        alert(`Invalid Move!`);
        return;
      }
      if (isAllRedPiecesOnBoard) {
        const index = this.redPositions.indexOf(this.selectedPiece);
        this.redPositions.splice(index, 1);
      }
      this.redPositions = [...this.redPositions, position];
    }
    this.selectedPiece = null;
    this.isBlackTurn = !this.isBlackTurn;
  };
}
