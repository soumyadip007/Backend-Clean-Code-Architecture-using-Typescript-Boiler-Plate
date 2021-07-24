import * as moment from 'moment';
export function getDateInFormat(format: string): string {
  return moment().utcOffset('+0530', true).format(format);
}
export function getMilliSeconds(): string {
  return String(moment().millisecond());
}
