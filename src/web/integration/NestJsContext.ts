import BaseContext from 'src/core/base/BaseContext';
import IConfiguration from 'src/core/base/IConfiguration';
import Logger from 'src/core/base/Logger';
import FooContext from 'src/core/common/foo/FooContext';
import FooEntityGateway from 'src/core/common/foo/FooEntityGateway';
import ContextBuilder from 'src/core/context/ContextBuilder';
import RequestContext from 'src/core/context/RequestContext';
import MiddlewareContext from 'src/core/middleware/MiddlewareContext';
import UseCaseContext from 'src/core/usecase/UseCaseContext';
import MongoFooEntityGateway from 'src/repository/foo/MongoFooEntityGatway';
import { Context } from 'vm';
import Configuration from './Configuration';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */

export default {
  provide: 'Core',
  useFactory: (
    configuration: IConfiguration,
    fooEntityGateway: FooEntityGateway,
    logger: Logger,
    requestContext: RequestContext,
  ): Context => {
    const baseContext: BaseContext = new BaseContext({ logger, configuration, requestContext });
    const fooContext: FooContext = new FooContext({
      entityGateway: fooEntityGateway,
    });
 
    const useCaseContext: UseCaseContext = new UseCaseContext({
      base: baseContext,
      foo: fooContext,
      logger,
    });
    const middlewareContext: MiddlewareContext = new MiddlewareContext({
      logger: logger,
    });

    return new ContextBuilder()
      .setBaseContext(baseContext)
      .setUseCaseContext(useCaseContext)
      .setFooContext(fooContext)
      .setMiddlewareContext(middlewareContext)
      .build();
  },
  inject: [
    Configuration,
    MongoFooEntityGateway,
    RequestContext,
  ],
};
