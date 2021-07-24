import rescue from './rescue';


const swallow = (type: string) => (fail: Function) => (fn: Function) => async (...args: any) => {
  try {
    console.log(type);
    return await fn(...args);
  } catch (error) {
    rescue(error, type);
    return fail(error);
  }
};

export default swallow;
