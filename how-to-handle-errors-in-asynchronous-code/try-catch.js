function calculateSquare(number, callback) {
    setTimeout(function() {
        if (typeof number !== 'number') {
            throw new Error('Argument of type number is expected');
        }
        const result = number * number;
        callback(result);
    }, 1000);
}

// Try...catch mechanism can't be used with asynchronous functions
try {
    calculateSquare('bad argument', function (result) {
        console.log(result);
    });
} catch (error) {
	console.log('Caught error: ' + String(error));
}
