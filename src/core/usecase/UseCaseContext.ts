
import BaseContext from 'src/core/base/BaseContext';
import FooContext from 'src/core/common/foo/FooContext';
import Logger from '../base/Logger';


export default class UseCaseContext {
  
  constructor({
    base,
    foo,
    logger,
  }: {
    base: BaseContext;
    foo: FooContext;
    logger: Logger;
  }) {
    
  }
}
