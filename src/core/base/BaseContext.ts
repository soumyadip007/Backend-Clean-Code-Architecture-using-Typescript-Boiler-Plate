import Logger from './Logger';
import IConfiguration from './IConfiguration';
import RequestContext from '../context/RequestContext';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


export default class BaseContext {
  logger: Logger;
  configuration: IConfiguration;
  requestContext: RequestContext;

  constructor({ logger, configuration, requestContext }) {
    this.logger = logger;
    this.configuration = configuration;
    this.requestContext = requestContext;
  }
}
