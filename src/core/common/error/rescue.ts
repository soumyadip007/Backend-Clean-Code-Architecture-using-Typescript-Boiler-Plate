const rescue = (error: Error, type: string) => {
  if (type !== error.name) {
    throw error;
  }
};

export default rescue;
