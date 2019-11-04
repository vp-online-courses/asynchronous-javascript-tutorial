// Function using promise like syntax (.then)
function getRandomDogImage() {
	fetch('https://dog.ceo/api/breeds/image/random')
	    .then(response => response.json())
	    .then(value => console.log(value.message));
}

// The same function using async await syntax
async function getRandomDogImage() {
	let response = await fetch('https://dog.ceo/api/breeds/image/random');
	value = await response.json();
	console.log(value.message);
}