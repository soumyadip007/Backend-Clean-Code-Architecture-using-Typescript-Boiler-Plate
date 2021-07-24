import Foo from './model/Foo';
import CrudOperations from 'src/core/base/CrudOperations';

export default interface FooEntityGateway extends CrudOperations<Foo> {
  findByAny: (query: any) => Promise<Foo[]>;
  findAndUpdateAny: (query: any) => Promise<Foo>;
  findQuery: (query: any) => Promise<Foo[]>;
}
