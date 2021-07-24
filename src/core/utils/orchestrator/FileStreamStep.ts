import RestClient from '../client/RestClient';
import RestRequest from '../client/RestRequest';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


export default abstract class FileStreamStep {
  baseUrl: string;
  client: RestClient;

  constructor({ baseUrl, client }) {
    this.baseUrl = baseUrl;
    this.client = client;
  }

  async execute(request: RestRequest) {
    return await this.client.getFileStream(request);
  }

  abstract callApi(request: any): Promise<string>;
}
