export default interface RestResponse {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  request?: any;
}
