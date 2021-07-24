export default class NotFoundError extends Error {
  id: string;
  constructor(message: string) {
    super(`${NotFoundError.name}: ${message}`);
    this.id = NotFoundError.name;
  }
}
