export default interface Middleware<T> {
  execute: (data: T) => any;
}
