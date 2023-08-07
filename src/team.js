export default class Team {
  constructor() {
    this.members = new Map();
  }

  add(player) {
    this.members.forEach((e) => {
      if (e.name === player.name) {
        throw new Error(`can not add already exist ${player.name}`);
      }
    });
    this.members.set(player.name, player);
  }

  addAll(...players) {
    players.forEach((e) => {
      if (!(this.members.has(e.name))) {
        this.members.set(e.name, e);
      }
    });
  }

  toArray() {
    return Array.from(this.members.values());
  }
}
