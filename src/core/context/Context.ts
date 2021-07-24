import BaseContext from '../base/BaseContext';
import UseCaseContext from '../usecase/UseCaseContext';
import FooContext from '../common/foo/FooContext';
import MiddlewareContext from '../middleware/MiddlewareContext';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


export default class Context {
  base: BaseContext;
  useCase: UseCaseContext;
  foo: FooContext;
  middleware: MiddlewareContext;

  constructor({ base, useCase, foo, middleware }) {
    this.base = base;
    this.useCase = useCase;
    this.foo = foo;
    this.middleware = middleware;
  }
}
