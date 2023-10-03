const promiseRace = (arrayOfPromises) => {
    if (arrayOfPromises.length === 0) {
        return new Promise((resolve, reject) => {});
    }

    return new Promise((resolve, reject) => {
        arrayOfPromises.forEach(promise => {
            if (promise instanceof Promise === false) {
                promise = Promise.resolve(promise);
            }
            
            promise.then(value => {
                resolve(value);
            });
            promise.catch(reason => {
                reject(reason);
            });
        });
    });
}
