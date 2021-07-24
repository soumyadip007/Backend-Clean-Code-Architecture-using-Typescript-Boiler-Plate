import RestMethod from './RestMethod';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */



export default interface RestRequest {
  url: string;
  method: RestMethod;
  headers?: any;
  body?: any;
  params?: any;
  timeout?: number;
}
