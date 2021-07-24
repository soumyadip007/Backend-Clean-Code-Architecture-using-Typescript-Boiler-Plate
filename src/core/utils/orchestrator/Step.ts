export default interface Step<Q, S> {
  execute: (request: Q) => S;
}
