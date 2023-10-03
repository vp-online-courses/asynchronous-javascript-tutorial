const promiseAny = (arrayOfPromises) => {
    if (arrayOfPromises.length === 0) {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
    }

    const promiseRejections = [];

    let rejectedPromisesCount = 0;

    return new Promise((resolve, reject) => {
        arrayOfPromises.forEach((promise, index) => {
            if (promise instanceof Promise === false) {
                promise = Promise.resolve(promise);
            }
            
            promise.then(value => {
				resolve(value);
            }).catch(reason => {
				rejectedPromisesCount += 1;
                promiseRejections[index] = reason;
                if (rejectedPromisesCount === arrayOfPromises.length) {
					reject(new AggregateError(promiseRejections, 'All promises were rejected'));
                }
            });
        });
    });
}
