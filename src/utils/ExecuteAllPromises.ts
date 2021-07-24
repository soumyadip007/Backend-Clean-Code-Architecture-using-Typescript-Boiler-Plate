const executeAllPromises = (promises) => {
  const resolvingPromises = promises.map(function (promise) {
    return new Promise(function (resolve) {
      const payload = new Array(2);
      promise
        .then(function (result) {
          payload[0] = result;
        })
        .catch(function (error) {
          payload[1] = error;
        })
        .then(function () {
          resolve(payload);
        });
    });
  });

  const errors = [];
  const results = [];
  return Promise.all(resolvingPromises).then(function (items) {
    let i = 0;
    items.forEach(function (payload) {
      if (payload[1]) {
        payload[1].index = i;
        errors.push(payload[1]);
      } else {
        payload[0].index = i;
        results.push(payload[0]);
      }
      i += 1;
    });
    return {
      errors: errors,
      results: results,
    };
  });
};

export { executeAllPromises };
