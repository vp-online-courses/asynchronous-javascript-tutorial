// This promise will be resolved with the value 'value'
const myPromise = new Promise(function (resolve, reject) {
    resolve('value');
    resolve('value2');
    reject('reason');
});
console.log(myPromise);

// This promise will be rejected with the reason 'reason'
const myPromise = new Promise(function (resolve, reject) {
    reject('reason');
    resolve('value');
    resolve('value2');
});
console.log(myPromise);
