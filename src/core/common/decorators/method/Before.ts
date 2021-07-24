const Before = (decoratorFunction: Function) => (
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) => {
  if (descriptor.value) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      await decoratorFunction.apply(this, args);
      return await originalMethod.apply(this, args);
    };

    return descriptor;
  }
};

export default Before;
