// This function accepts a promise as an argument
function logToConsole(somePromise) {
	somePromise.then(value => console.log(value));
}

// Create a promise and pass this promise to logToConsole function
const somePromise = new Promise(
    (resolve, reject) => resolve('Hello')
);
logToConsole(somePromise);

// If we pass a non-promise value to logToConsole function, it will throw an error
const value = 'string';
logToConsole(value)

// We can create a resolved promise out of any value
const promisifiedValue = Promise.resolve(value);
logToConsole(promisifiedValue);

// We can create a rejected promise out of any value
const rejectedPromise = Promise.reject(value);
const rejectedPromise2 = Promise.reject(new Error('some error'));
