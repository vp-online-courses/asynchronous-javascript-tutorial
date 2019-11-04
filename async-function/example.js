// If you return a non-promise value from an async function,
// JavaScript will automatically wrap it into a promise.
async function f() {
    return 'Hello World';
}

console.log(f() instanceof Promise === true);

// If you return a promise from an async function,
// JavaScript will not make any transformations on it.
async function f() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), 5000);
    });
}

console.log(f() instanceof Promise === true);

// you can also return a rejected promise from this function.
async function f() {
    return Promise.reject(404);
}