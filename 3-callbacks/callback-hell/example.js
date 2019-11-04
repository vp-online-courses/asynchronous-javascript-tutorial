// Declaring calculateSquare function
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

// Invoking calculateSquare function for numbers from 1 to 6 sequentially (one after another)
// This is an example of a callback hell
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