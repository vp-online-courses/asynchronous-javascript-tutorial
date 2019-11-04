// Lets create 2 asynchronous functions.
function printNumber1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('printNumber1 is done');
            resolve(1);
        }, 1000);
    });
}

function printNumber2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('printNumber2 is done');
            resolve(2);
        }, 1000);
    });
}

// This function will invoke both printNumber1 and printNumber2
// functions one after another.
async function oneByOne() {
    const number1 = await printNumber1();
    const number2 = await printNumber2();
    console.log(number1, number2);
}
oneByOne()

// This function will invoke both printNumber1 and printNumber2
// functions in parallel.
async function inParallel() {
    const promise1 = printNumber1();
    const promise2 = printNumber2();
    const number1 = await promise1;
    const number2 = await promise2;
    console.log(number1, number2);
}
inParallel()