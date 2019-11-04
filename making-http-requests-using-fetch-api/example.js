// Example of using Fetch API
fetch('https://www.omdbapi.com/?s=batman&y=2018&apikey=ed4903dc')
    .then(response => {
        console.log(response);        
        return response
    })
    .then(response => response.json())
    .then(data => console.log(data))
