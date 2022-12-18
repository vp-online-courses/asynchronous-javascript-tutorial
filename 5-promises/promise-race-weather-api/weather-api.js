const button = document.getElementById('button');
button.addEventListener('click', function () {
  const cityInput = document.getElementById('city');
  const city = cityInput.value;
  
  const openWeatherMapApiKey = '504148f39621fe2180cc1510087b9e93';
  const promise1 = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapApiKey}`)
  .then(response => response.json());
  console.log(promise1)

  const weatherstackApiKey = '9a202577c9ec8c46152af5cbf7adbf11';
  // const promise2 = fetch(`http://api.weatherstack.com/current?access_key=${weatherstackApiKey}&query=${city}`)
  // 	.then(response => response.json());
  // console.log(promise2)
  
  Promise.race([promise1, promise1])
    .then(data => {
      // Here we need to parse the response and extract only the data we need
      let temperature;
      let api;
      // We need only temperature, so we need to extract the temperature from the response.
      // As I already said before, 
      if (data.main !== undefined && data.main.temp !== undefined) {
        // The interesting thing here is that the temperature returned by OpenWeatherMap is in Kelvin.
        // Therefore we need to convert it to Celsius first.
        temperature = Math.floor(data.main.temp - 273);
        api = 'OpenWeatherMap';
      } else if (data.current !== undefined && data.current.temperature !== undefined) {
        temperature = data.current.temperature;
        api = 'weatherstack';
      }
      const weatherContainer = document.getElementById('weather');
      weatherContainer.innerHTML = 'Current temperature is ' + temperature + ' degrees Celsius';
      const apiContainer = document.getElementById('apiSource');
      apiContainer.innerHTML = 'API source: ' + api;
    })
});