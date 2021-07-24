export default interface Function<I, O> {
  apply: (input: I) => O;
}
