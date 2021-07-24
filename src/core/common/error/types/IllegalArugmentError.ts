export default class IllegalArgumentError extends Error {
  id: string;
  constructor(message: string) {
    super(`${IllegalArgumentError.name}: ${message}`);
    this.id = IllegalArgumentError.name;
  }
}
