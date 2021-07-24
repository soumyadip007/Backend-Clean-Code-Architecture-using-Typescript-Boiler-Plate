import Logger from 'src/core/base/Logger';
import RestResponse from 'src/core/utils/client/RestResponse';
import Middleware from '../Middleware';
import MimeType from '../MimeType';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */

export default class SuccessResponseMiddleware
  implements Middleware<SuccessResponseMiddlewareOptions> {
  logger: Logger;

  constructor({ logger }: { logger: Logger }) {
    this.logger = logger;
  }

  execute(options: SuccessResponseMiddlewareOptions): RestResponse {
    if (MimeType.TEXT === options.response?.headers?.mimeType) {
      return options.response.data;
    }
    return options.callback(options.response);
  }
}
export interface SuccessResponseMiddlewareOptions {
  response: RestResponse;
  callback: Function;
}
