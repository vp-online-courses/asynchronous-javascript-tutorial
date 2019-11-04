// Declare 3 functions which imitate the Dealer API
function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);
    });
}
// askSecondDealer returns a promise that becomes rejected after 5 seconds
function askSecondDealer() {
    return new Promise((resolve, reject) => {
    	setTimeout(() => reject('Not suitable car'), 5000);
    });
}
function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);
    });
}

// The promise returned by Promise.all
// will be rejected with a reason 'Not suitable car'.
Promise.all([
    askFirstDealer(), 
    askSecondDealer(), 
    askThirdDealer()
])
    .then(prices => {
        console.log(prices);
    })
    .catch(error => {
        console.log(error);
    })


// This time Promise.all will return a resolved promise
Promise.all([
    askFirstDealer().catch(error => { return error }),
    askSecondDealer().catch(error => { return error }),
    askThirdDealer().catch(error => { return error })
])
    .then(prices => {
        console.log(prices);
    })
    .catch(error => {
        console.log(error);
    })

// This time Promise.all will be rejected immediately
Promise.all([
    askFirstDealer().catch(error => { return error }),
    askSecondDealer().catch(error => { return error }),
    askThirdDealer().catch(error => { return error }),
    Promise.reject('rejected for some reason')
])
    .then(prices => {
        console.log(prices);
    })
