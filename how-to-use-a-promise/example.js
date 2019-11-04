// Functions inside .then are called asynchronously
const myPromise = new Promise(function (resolve, reject) {
    resolve('Hello world');
});
myPromise.then(value => {
    console.log('This is inside onFulfilled function');
});
console.log('This is written after myPromise.then');
