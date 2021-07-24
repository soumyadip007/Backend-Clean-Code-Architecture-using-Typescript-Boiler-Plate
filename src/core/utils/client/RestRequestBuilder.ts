import RestMethod from './RestMethod';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


export default class RestRequestBuilder {
  url: string;
  method: RestMethod;
  headers: any;
  body: any;
  subscriptionKey: string;
  params: any;
  timeout: number;

  setUrl(url: string) {
    this.url = url;
    return this;
  }

  setMethod(method: RestMethod) {
    this.method = method;
    return this;
  }

  setHeaders(headers: any) {
    this.headers = headers;
    return this;
  }

  setBody(body: any) {
    this.body = body;
    return this;
  }

  setSubscriptionKey(key: string) {
    this.subscriptionKey = key;
    return this;
  }

  setParams(params: any) {
    this.params = params;
    return this;
  }

  setTimeout(timeout: number) {
    this.timeout = timeout;
    return this;
  }

  build() {
    //TODO: This should be slow. Figure out a faster way to remove undefined fields.
    return JSON.parse(
      JSON.stringify({
        url: this.url,
        method: this.method,
        headers: {
          'Ocp-Apim-Subscription-Key': this.subscriptionKey,
          ...this.headers,
        },
        body: this.body,
        params: this.params,
        timeout: this.timeout,
      }),
    );
  }
}
