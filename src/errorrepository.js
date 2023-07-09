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
