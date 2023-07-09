import Team from '../team';
import ErrorRepo from '../errorrepository';

describe('check in class team methods', () => {
  test('method add', () => {
    const team = new Team();
    const result = {
      health: 100,
      level: 1,
      name: 'Jhon',
      type: 'Swordsman',
    };
    team.add({
      health: 100, level: 1, name: 'Jhon', type: 'Swordsman',
    });
    expect(team.members = {
      health: 100, level: 1, name: 'Jhon', type: 'Swordsman',
    }).toEqual(result);
  });
  test('method add throw Error', () => {
    const obj = {
      health: 100, level: 1, name: 'Jhon', type: 'Swordsman',
    };
    expect(() => {
      const player = new Team();
      player.add(obj);
      player.add(obj);
    }).toThrow();
  });
  test('method addAll', () => {
    const obj1 = {
      health: 100,
      level: 1,
      name: 'Jhon',
      type: 'Swordsman',
    };
    const obj2 = {
      health: 60,
      level: 1,
      name: 'Kira',
      type: 'Undead',
    };
    const result = new Set([
      {
        health: 100, level: 1, name: 'Jhon', type: 'Swordsman',
      },
      {
        health: 60, level: 1, name: 'Kira', type: 'Undead',
      },
    ]);
    const players = new Team();
    players.addAll(obj1, obj2);
    expect(players.members).toEqual(result);
  });
  test('method addAll ignore duplicate', () => {
    const obj1 = {
      health: 100,
      level: 1,
      name: 'Jhon',
      type: 'Swordsman',
    };
    const obj2 = {
      health: 60,
      level: 1,
      name: 'Kira',
      type: 'Undead',
    };
    const result = new Set([
      {
        health: 100, level: 1, name: 'Jhon', type: 'Swordsman',
      },
      {
        health: 60, level: 1, name: 'Kira', type: 'Undead',
      },
    ]);
    const players = new Team();
    players.addAll(obj1, obj2);
    players.addAll(obj1, obj2);
    expect(players.members).toEqual(result);
  });
  test('method toArray', () => {
    const obj1 = {
      health: 100,
      level: 1,
      name: 'Jhon',
      type: 'Swordsman',
    };
    const result = [
      {
        health: 100, level: 1, name: 'Jhon', type: 'Swordsman',
      },
    ];
    const players = new Team();
    players.add(obj1);
    players.toArray();
    expect([
      {
        health: 100, level: 1, name: 'Jhon', type: 'Swordsman',
      },
    ]).toEqual(result);
  });
});
describe('check in class errorRepo methods', () => {
  test('translate method', () => {
    const repo = new ErrorRepo();
    repo.errorRepo.set(1, 'Login Error');
    const receiver = repo.translate(1);
    expect(receiver).toBe('Login Error');
  });
  test('translate method return Unknown method', () => {
    const repo = new ErrorRepo();
    repo.errorRepo.set(1, 'Login Error');
    const receiver = repo.translate(2);
    expect(receiver).toBe('Unknown error');
  });
});
