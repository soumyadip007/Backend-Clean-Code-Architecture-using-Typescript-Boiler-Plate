import BaseContext from '../base/BaseContext';
import UseCaseContext from '../usecase/UseCaseContext';
import Context from './Context';
import FooContext from '../common/foo/FooContext';
import MiddlewareContext from '../middleware/MiddlewareContext';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


export default class ContextBuilder {
  base: BaseContext;
  useCase: UseCaseContext;
  foo: FooContext;
  middleware: MiddlewareContext;

  setUseCaseContext(context: UseCaseContext) {
    this.useCase = context;
    return this;
  }

  setBaseContext(context: BaseContext) {
    this.base = context;
    return this;
  }

  setFooContext(context: FooContext) {
    this.foo = context;
    return this;
  }

  setMiddlewareContext(context: MiddlewareContext) {
    this.middleware = context;
    return this;
  }

  build() {
    return new Context({
      base: this.base,
      useCase: this.useCase,
      foo: this.foo,
      middleware: this.middleware,
    });
  }
}
