import RestClient from '../client/RestClient';
import RestRequest from '../client/RestRequest';
import Mapper from './Mapper';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */



export default abstract class SingleStep {
  baseUrl: string;
  client: RestClient;
  requestMapper: Mapper<any, any>;
  responseMapper: Mapper<any, any>;

  constructor({ baseUrl, client, requestMapper, responseMapper }) {
    this.baseUrl = baseUrl;
    this.client = client;
    this.requestMapper = requestMapper;
    this.responseMapper = responseMapper;
  }

  async execute(request: RestRequest) {
    const mappedRequest = await this.requestMapper.apply(request);
    const response = await this.client.callApi(mappedRequest);
    if (response.status === 200) {
      return await this.responseMapper.apply(response.data);
    } else {
      return response;
    }
  }

  abstract callApi<T>(request: any): Promise<T>;
}
