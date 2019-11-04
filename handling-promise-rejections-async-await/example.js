async function f() {
	try {
        // Execution will go to the catch block
		let response = await fetch('https://some-host.com/wrong-url');
	} catch (e) {
		console.log(`Some error: ${e}`);
	}
}


async function f() {
    let response = await fetch('https://some-host.com/wrong-url');
}

// You can invoke .catch
f().catch(e => alert('Custom error: ' + e));