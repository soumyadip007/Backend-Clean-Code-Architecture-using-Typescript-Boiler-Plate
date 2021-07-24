import Middleware from 'src/core/middleware/Middleware';
import StartTimerMiddleware from './timer/StartTimerMiddleware';
import StopTimerMiddleware, { StopTimerMiddlewareOptions } from './timer/StopTimerMiddleware';
import Logger from 'src/core/base/Logger';
import SuccessResponseMiddleware, {
  SuccessResponseMiddlewareOptions,
} from './response/SuccessResponseMiddleware';
import FailureResponseMiddleware, {
  FailureResponseMiddlewareOptions,
} from './response/FailureResponseMiddleware';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


export default class MiddlewareContext {
  startTimer: Middleware<void>;
  stopTimer: Middleware<StopTimerMiddlewareOptions>;
  successResponseHandler: Middleware<SuccessResponseMiddlewareOptions>;
  failureResponseHandler: Middleware<FailureResponseMiddlewareOptions>;

  constructor({ logger }: { logger: Logger }) {
    this.startTimer = new StartTimerMiddleware({ logger });
    this.stopTimer = new StopTimerMiddleware({ logger });
    this.successResponseHandler = new SuccessResponseMiddleware({ logger });
    this.failureResponseHandler = new FailureResponseMiddleware({ logger });
  }
}
