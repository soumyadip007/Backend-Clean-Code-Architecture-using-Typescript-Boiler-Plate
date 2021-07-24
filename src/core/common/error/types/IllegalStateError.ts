export default class IllegalStateError extends Error {
  id: string;
  constructor(message: string) {
    super(`${IllegalStateError.name}: ${message}`);
    this.id = IllegalStateError.name;
  }
}
