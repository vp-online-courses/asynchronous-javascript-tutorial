const promiseAllSettled = (arrayOfPromises) => {
    if (arrayOfPromises.length === 0) {
        return Promise.resolve([]);
    }

    const promiseValues = [];

    let settledPromisesCount = 0;

    return new Promise((resolve, reject) => {
        arrayOfPromises.forEach((promise, index) => {
            if (promise instanceof Promise === false) {
                promise = Promise.resolve(promise);
            }
            promise.then((result) => {
                settledPromisesCount += 1;
                promiseValues[index] = {
                    status: 'fulfilled',
                    value: result,
                };
                if (settledPromisesCount === arrayOfPromises.length) {
                    resolve(promiseValues);
                }
            }).catch((reason) => {
                settledPromisesCount += 1;
                promiseValues[index] = {
                    status: 'rejected',
                    reason: reason,
                };
                if (settledPromisesCount === arrayOfPromises.length) {
                    resolve(promiseValues);
                }
            });
        });
    });
}
