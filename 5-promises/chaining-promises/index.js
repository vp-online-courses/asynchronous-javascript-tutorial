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

// Prints "1" and then "undefined"
calculateSquare(1)
    .then(value => {
        console.log(value);
    })
    .then(value2 => {
        console.log(value2);
    });

// Prints "1" and then "25"
calculateSquare(1)
    .then(value => {
        console.log(value);
        return 25;
        // value2 will become 25.
    })
    .then(value2 => {
        console.log(value2);
    });

// Prints "1" and then "error happened: Error: error"
calculateSquare(1)
    .then(value => {
        console.log(value);
        throw new Error('error');
    })
    .then(value2 => {
        console.log(value2);
        // In order to handle the error, we need to add onRejected function as a 2nd argument
    }, reason => {
        console.log('error happened: ' + reason);
    });

// Prints "1" and then "4"
calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare(2);
    })
    .then(value2 => {
        console.log(value2);
    }, reason => {
        console.log('error happened: ' + reason);
    });

// Prints "1" and then "error happened: Error: Argument of type number is expected"
calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare('string');
    })
    .then(value2 => {
        console.log(value2);
    }, reason => {
        console.log('error happened: ' + reason);
    });
