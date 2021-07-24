import Mapper from './Mapper';
export default class NoChangeMapper extends Mapper<any, any> {
  apply(model: any): Promise<any> {
    return model;
  }
}
