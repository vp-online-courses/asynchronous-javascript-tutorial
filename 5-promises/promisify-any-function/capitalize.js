// Ordinary capitalize function
function capitalize(text) {
    return text[0].toUpperCase() + text.substr(1);
}


// Promisified capitalize function
function capitalize(text) {
    return new Promise(function (resolve, reject) {
        if (typeof text !== 'string') {
            return reject(new Error('Argument must be a string'));
            // Don't forget to put return statement here, otherwise
            // the execution will go further
        }
        const result = text[0].toUpperCase() + text.substr(1);
        return resolve(result);
    })
}