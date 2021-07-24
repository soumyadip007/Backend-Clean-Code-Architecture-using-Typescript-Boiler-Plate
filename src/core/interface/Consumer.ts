export default interface Consumer<I> {
  consume: (input: I) => void;
}
