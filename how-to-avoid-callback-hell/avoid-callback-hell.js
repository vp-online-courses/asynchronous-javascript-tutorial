// Declaring calculateSquare function
function calculateSquare(number) {
    const promise = new Promise(function (resolve, reject) {
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

calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare(2);
    })
    .then(value => {
        console.log(value);
        return calculateSquare(3);
    })
    .then(value => {
        console.log(value);
        return calculateSquare(4);
    })
    .then(value => {
        console.log(value);
        return calculateSquare(5);
    })
    .then(value => {
        console.log(value);
        return calculateSquare(6);
    })
    .then(value => {
        console.log(value);
    });
