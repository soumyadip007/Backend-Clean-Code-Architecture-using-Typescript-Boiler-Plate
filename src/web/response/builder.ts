const defaultBuilder = (error: any, statusCode?: number) => ({
  name: error.id,
  message: error.message,
  statusCode,
});

export const buildError = (type: string) => (code: number) => (error: any) => {
  if (type === error.id || type === error.name) {
    return defaultBuilder(error, code);
  } else {
    return error;
  }
};

export const buildCustomError = (type: string) => (code: number) => (builder: Function) => (
  error: any,
) => {
  if (type === error.id || type === error.name) {
    return builder(error, code);
  } else {
    return error;
  }
};
