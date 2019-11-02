// Example of an asynchronous function
function f(callback) {
    setTimeout(() => callback(), 0);
}

f(() => console.log('This is a callback'));

console.log('Hello world!');
