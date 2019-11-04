function getSpecificNumber() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(42), 2000);
	});
}

// There is a waiting time of 2 seconds
// before this number gets printed to the console.
async function f() {
	const randomNumber = await getSpecificNumber();
	console.log(randomNumber);
}


// This is the same as above
function f() {
	getSpecificNumber()
		.then(randomNumber => console.log(randomNumber));
}

