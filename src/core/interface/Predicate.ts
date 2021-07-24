export default interface Predicate<I> {
  test: (input: I) => boolean;
}
