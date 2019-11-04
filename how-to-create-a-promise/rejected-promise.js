// This promise will reject with the reason === 'reason'
const myPromise = new Promise(function (resolve, reject) {
    reject('reason');
});
console.log(myPromise);
