import FooService from './FooService';
import FooEntityGateway from 'src/core/common/foo/FooEntityGateway';
export default class FooContext {
  
  fooGateway: FooEntityGateway;
  fooService: FooService;

  constructor({ entityGateway }) {
    this.fooGateway = entityGateway;
    this.fooService = new FooService({ entityGateway });
  }
}
