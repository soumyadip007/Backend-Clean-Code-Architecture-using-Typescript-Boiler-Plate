import RestRequest from './RestRequest';
import RestResponse from './RestResponse';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */



export default interface RestClient {
  callApi: (request: RestRequest) => Promise<RestResponse>;
  getFileStream: (request: RestRequest) => Promise<string>;
}
