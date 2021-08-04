import socketIOClient from "socket.io-client";
import { action, makeObservable, observable } from "mobx";

export default class SocketIoStore {
  io = null;
  startMove = 20;
  shiftValue = 10;
  @observable roomName = null;
  @observable userColor = null;
  @observable.ref players = [];
  @observable.ref activities = [];

  constructor() {
    makeObservable(this);
  }

  initializeConnection = () => {
    this.io = socketIOClient("http://localhost:5000/", {
      transports: ["websocket", { upgrade: false }],
    });

    this.io.on("activities", (activity) => {
      const joinedString = " joined the room ";
      if (activity.includes(joinedString)) {
        const userColor = activity.split(joinedString)[0].replaceAll('"', "");
        if (!this.duplicateRegistry(userColor)) {
          const players = [
            ...this.players,
            { userColor, move: this.startMove },
          ];
          this.updatePlayers(players);
        }
      }
      this.updateActivities([...this.activities, activity]);
    });

    this.io.on("movement-forward", this.movement);

    this.io.on("movement-backward", this.movement);
  };

  @action
  onChangeRoomName = (e) => (this.roomName = e.target.value);

  @action
  updatePlayers = (updatedVal) => (this.players = updatedVal);

  @action
  onChangeYourColor = (e) => (this.userColor = e.target.value);

  @action
  updateActivities = (updatedVal) => (this.activities = updatedVal);

  duplicateRegistry = (playerColor) =>
    this.players.length > 0
      ? this.players.filter((p) => p.userColor === playerColor)[0]
      : null;

  movement = (playerMoves) => {
    const split = playerMoves.split(":");
    const playerColor = split[0];
    const playerMove = +split[1];
    let players;
    if (this.duplicateRegistry(playerColor)) {
      players = [
        ...this.players.map((p) => {
          if (p && p.userColor === playerColor) {
            return { userColor: playerColor, move: p.move + playerMove };
          }
          return p;
        }),
      ];
    } else {
      players = this.players.concat({
        move: playerMove,
        userColor: playerColor,
      });
    }
    this.updatePlayers(players);
  };

  closeConnection = () => {
    this.io.disconnect();
    this.io.close();
  };

  onPressJoinRoom = () => {
    if (!this.userColor && !this.roomName) return;
    this.io.emit("game-room.join", {
      room: this.roomName,
      userColor: this.userColor,
    });
  };

  onPressUpward = () => {
    if (!this.userColor && !this.roomName) return;
    this.io.emit("movement-backward", {
      room: this.roomName,
      move: `${this.userColor}:${this.shiftValue}`,
    });
    const players = [
      ...this.players.map((p) => {
        if (p.id === "me") p.move += this.shiftValue;
        return p;
      }),
    ];
    this.updatePlayers(players);
  };

  onPressDownward = () => {
    if (!this.userColor && !this.roomName) return;
    this.io.emit("movement-forward", {
      room: this.roomName,
      move: `${this.userColor}:-${this.shiftValue}`,
    });
    const players = [
      ...this.players.map((p) => {
        if (p.id === "me") p.move -= this.shiftValue;
        return p;
      }),
    ];
    this.updatePlayers(players);
  };

  onPressDone = () => {
    if (!this.userColor) return;
    let updatedList;
    const alreadyRegistered =
      this.players.length > 0
        ? this.players.filter((p) => p.id === "me")
        : null;
    if (alreadyRegistered && alreadyRegistered[0]) {
      updatedList = this.players.map((p) => {
        if (p.id === "me") {
          return { id: p.id, userColor: this.userColor, move: p.move };
        }
        return p;
      });
    } else {
      updatedList = [{ id: "me", userColor: this.userColor, move: 20 }];
    }
    this.updatePlayers(updatedList);
  };
}
