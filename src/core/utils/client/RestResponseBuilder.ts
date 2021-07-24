/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


export default class RestResponseBuilder {
  private data: any;
  private status: number;
  private statusText: string;
  private headers: any;
  private request?: any;

  setData(data) {
    this.data = data;
    return this;
  }

  setStatus(status) {
    this.status = status;
    return this;
  }

  setStatusText(statusText) {
    this.statusText = statusText;
    return this;
  }

  setHeaders(headers) {
    this.headers = headers;
    return this;
  }

  setRequest(request) {
    this.request = request;
    return this;
  }

  build() {
    return {
      data: this.data,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      request: this.request,
    };
  }
}
