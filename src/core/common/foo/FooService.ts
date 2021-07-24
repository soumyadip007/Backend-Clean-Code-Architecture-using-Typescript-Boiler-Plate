import FooEntityGateway from 'src/core/common/foo/FooEntityGateway';
import Foo from 'src/core/common/foo/model/Foo';
import CrudService from '../../base/CrudService';

export default class FooService extends CrudService<Foo> {
  
  gateway: FooEntityGateway;

  constructor({ entityGateway }) {
    super({ entityGateway });
    this.gateway = entityGateway;
  }

  async save(foo: Foo) {
    return super.save(foo);
  }

  async findQuery(query: any) {
    return this.gateway.findQuery(query);
  }

}
