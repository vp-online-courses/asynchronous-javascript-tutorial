// Each of these functions returns a promise.
// John answers in 3 seconds, and he has an extra pen.
var askJohn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Yep, I got one extra pen.'), 3000);
    });
}
// Eugene answers in 5 seconds, and he doesn't have an extra pen.
var askEugene = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Sorry man, got only one.'), 5000);
    });
}
// Susy answers in 2 seconds, and she also has an extra pen.
var askSusy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Sure, I have a pen for you!'), 2000);
    });
}

// Promise.race takes an array of values as an argument.
Promise.race(
    [askJohn(), askEugene(), askSusy()]
)
    .then(value => {
        // Unlike Promise.all, We have only 1 value here,
        // and it is the result of the fastest promise in the array.
        console.log(value)
    })
    .catch(reason => {
        console.log('Rejected: ' + reason)
    });

