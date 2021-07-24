// eslint-disable-next-line @typescript-eslint/ban-types
export const compose = (...fns: Array<Function>) => (x: any) => fns.reduce((v, f) => f(v), x);
