// Declare calculateSquare function using callbacks
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

// If you need to invoke calculateSquare function multiple times
// one after another, your code may start looking like this.
// This is an example of callback hell.
calculateSquare(1, function (error, result) {
     console.log(result);
     calculateSquare(2, function (error, result) {
         console.log(result);
         calculateSquare(3, function (error, result) {
             console.log(result);
             calculateSquare(4, function (error, result) {
                  console.log(result);
                  calculateSquare(5, function (error, result) {
                       console.log(result);
                       calculateSquare(6, function (error, result) {
                            console.log(result);
                       });
                  });
             });
         });
     });
});
