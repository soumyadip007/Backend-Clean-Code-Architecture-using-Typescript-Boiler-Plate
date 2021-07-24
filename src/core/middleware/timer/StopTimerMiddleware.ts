import { hrtime } from 'process';
import Middleware from '../Middleware';
import Logger from 'src/core/base/Logger';
import RestRequest from 'src/core/utils/client/RestRequest';
import RestResponse from 'src/core/utils/client/RestResponse';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


export default class StopTimerMiddleware implements Middleware<StopTimerMiddlewareOptions> {
  logger: Logger;

  constructor({ logger }: { logger: Logger }) {
  //  this.logger = logger;
  }

  execute(options: StopTimerMiddlewareOptions): void {
    const tuple = hrtime(options.start);
    const time = `${tuple[0] + tuple[1] / Math.pow(10, 9)}`;
  //  this.logger.info(`${options.request.url} [${options.request.method}] took ${time} seconds.`);
  }
}

export interface StopTimerMiddlewareOptions {
  start: [number, number];
  request: RestRequest;
  response: RestResponse;
}
