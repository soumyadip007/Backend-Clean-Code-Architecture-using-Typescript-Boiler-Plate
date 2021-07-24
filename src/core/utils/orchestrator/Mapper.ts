export default abstract class Mapper<M, D> {
  abstract apply(model: M): Promise<D>;
}
