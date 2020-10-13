import { observable, action, makeObservable } from "mobx";

import {
  teekoValidMoves,
  teekoWinningStreaks,
} from "../util/teeko_game_constants";

export default class TeekoStore {
  isBlackTurn = true;
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
          let msg;
          if (!isAllBlackPiecesOnBoard)
            msg = `Please place "BLACK" in an empty area.`;
          else if (this.selectedPiece) msg = "Please find an empty slot.";
          else msg = `You need to select a "BLACK" piece.`;
          alert(msg);
        }
      } else {
        if (isAllRedPiecesOnBoard && !isBlackReserved) {
          this.selectedPiece = position;
        } else {
          let msg;
          if (!isAllBlackPiecesOnBoard)
            msg = `Please place "RED" in an empty area.`;
          else if (this.selectedPiece) msg = "Please find an empty slot.";
          else msg = `You need to select a "RED" piece.`;
          alert(msg);
        }
      }
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
    let redMatched = false;
    let blackMatched = false;

    teekoWinningStreaks.forEach((streak) => {
      redMatched = this.evaluater(this.redPositions, streak);
      blackMatched = this.evaluater(this.blackPositions, streak);
    });

    if (redMatched || blackMatched) {
      const player = redMatched ? "RED" : "BLACK";
      alert(`CONGRATULATIONS! "${player} PLAYER" WINS!!`);
      this.redPositions = [];
      this.isBlackTurn = true;
      this.blackPositions = [];
    } else {
      this.isBlackTurn = !this.isBlackTurn;
    }
    this.selectedPiece = null;
  };

  evaluater = (playerPositions, streak) => {
    if (playerPositions.length <= 3) return false;
    return playerPositions.every((s) => streak.includes(s));
  };
}
