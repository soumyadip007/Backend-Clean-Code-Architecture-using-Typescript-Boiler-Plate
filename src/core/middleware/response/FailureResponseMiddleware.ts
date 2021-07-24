import Logger from 'src/core/base/Logger';
import Middleware from 'src/core/middleware/Middleware';


/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */

export default class FailureResponseMiddleware
  implements Middleware<FailureResponseMiddlewareOptions> {
  logger: Logger;

  constructor({ logger }: { logger: Logger }) {
    this.logger = logger;
  }

  execute(options: FailureResponseMiddlewareOptions): void {
    this.logger.error(options.error?.stack);
    if (options.error.response) {
      options.error.status = options.error.response.status;
    }
    return options.callback(options.error);
  }
}

export interface FailureResponseMiddlewareOptions {
  error: any;
  callback: Function;
}
