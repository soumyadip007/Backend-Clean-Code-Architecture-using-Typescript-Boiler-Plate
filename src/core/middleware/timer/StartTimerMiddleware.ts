import { hrtime } from 'process';
import Middleware from '../Middleware';
import Logger from 'src/core/base/Logger';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


export default class StartTimerMiddleware implements Middleware<void> {
  logger: Logger;

  constructor({ logger }: { logger: Logger }) {
    this.logger = logger;
  }

  execute(): [number, number] {
    return hrtime();
  }
}
