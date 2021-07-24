export default class UnauthorizedError extends Error {
  id: string;
  constructor(message: string) {
    super(`${UnauthorizedError.name}: ${message}`);
    this.id = UnauthorizedError.name;
  }
}
