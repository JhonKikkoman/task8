export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(player) {
    if (this.members.has(player)) {
      throw new Error(`can not add already exist ${player}`);
    }
    this.members.add(player);
  }

  addAll(...players) {
    players.forEach((e) => {
      this.members.add(e);
      for (const item of this.members) {
        if (item === e) {
          return;
        }
      }
    });
  }

  toArray() {
    return [...this.members];
  }
}

// const team = new Team();
// team.add('joe')
// console.log(team.members)