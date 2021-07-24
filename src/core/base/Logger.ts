export default interface Logger {
  info: (...statements: any[]) => void;
  warn: (...statements: any[]) => void;
  error: (...statements: any[]) => void;
  debug: (...statements: any[]) => void;
  trace: (...statements: any[]) => void;
}
