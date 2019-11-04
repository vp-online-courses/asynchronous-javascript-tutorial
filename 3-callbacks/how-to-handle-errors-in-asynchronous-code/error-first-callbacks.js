// Example of error-first callbacks
function calculateSquare(number, callback) {
    setTimeout(function() {
        if (typeof number !== 'number') {
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 1000);
}

calculateSquare('bad argument', function (error, result) {
    if (error !== null) {
        console.log('Caught error: ' + String(error));
        return;
    }
    console.log(result);
});
