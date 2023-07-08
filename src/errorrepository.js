export default class ErrorRepository {
  constructor() {
    this.errorRepo = new Map();
  }

  translate(code) {
    if (!(this.errorRepo.has(code))) {
      return 'Unknown error';
    }
    return this.errorRepo.get(code);
  }
}
// const repo = new ErrorRepository();
// repo.errorRepo.set(1, 'Login Error');
// repo.errorRepo.set(2, 'User name Error');
// repo.errorRepo.set(3, 'Skill is locked');
