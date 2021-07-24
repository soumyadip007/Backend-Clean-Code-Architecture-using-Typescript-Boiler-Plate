const After = (decoratorFunction: Function) => (
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) => {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any) {
    const returnValue = await originalMethod.apply(this, args);
    await decoratorFunction.call(this, returnValue);
    return returnValue;
  };

  return descriptor;
};

export default After;
