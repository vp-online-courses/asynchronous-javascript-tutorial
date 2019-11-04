function calculateSquare(number) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number !== 'number') {
                return reject(new Error('Argument of type number is expected'));
            }
            const result = number * number;
            resolve(result);
        }, 1000);
    });
    return promise;
}

// If you run this code, we will see the message "Something went wrong".
calculateSquare(1)
    .then(value => {
        console.log(value);
        throw new Error('Something went wrong');
        return calculateSquare(2);
    })
    .then(value => {
        console.log(value);
    }, reason => {
        console.log('error happened: ' + reason);
    });

// If I move the error to the 2nd then, it will not be caught.
calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare(2);
    })
    .then(value => {
        console.log(value);
        throw new Error('Something went wrong');
    }, reason => {
        console.log('error happened: ' + reason);
    });

// In order to catch the error,
// we need to extract onRejected function from the 2nd then method
// and create a 3rd then method.
calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare(2);
    })
    .then(value => {
        console.log(value);
        throw new Error('Something went wrong');
    })
    .then(undefined, reason => {
        console.log('error happened: ' + reason);
    });

// Rewrite previous example with catch
calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare(2);
    })
    .then(value => {
        console.log(value);
        throw new Error('Something went wrong');
    })
    .catch(reason => {
        console.log('error happened: ' + reason);
    });

// Instead of throwing an error we could also return a rejected promise
calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare(2);
    })
    .then(value => {
        console.log(value);
        return new Promise((resolve, reject) => {
            return reject('Something went wrong');
        });
    })
    .catch(reason => {
        console.log('error happened: ' + reason);
    });
