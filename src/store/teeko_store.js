const { observable, action, makeObservable } = require("mobx");

export default class TeekoStore {
  @observable blocks;
  @observable redMoves = [];
  @observable blackMoves = [];

  constructor() {
    makeObservable(this);
  }

  @action
  setupBlocks = () => {
    for (var i = 0; i++; i < 25) {
      if (this.blocks == null) this.blocks = [];
      this.blocks.push(i);
    }
  };

  @action
  clickedRed = () => {};

  @action
  clickedBlack = () => {};
}
