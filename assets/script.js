const apiKey = "99b2eb99c967dc883266dcd877ae5f0b"
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=' + apiKey;
let cityArray= [];

function fetchWeather() {
       let city = document.getElementById("cityTxt").value
          console.log("city = ", city);
      let weatherAPI_URL = "http://api.openweathermap.org/geo/1.0/direct?q="+ city + "&limit=1&appid=" + apiKey;
       console.log(weatherAPI_URL);

  
    fetch(weatherAPI_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data1 => {
         const cityArray=data1;
          const latitude = cityArray[0].lat;
          const longitude = cityArray[0].lon;
          let url= "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;
          console.log(cityArray)

          return fetch(url)
         
      })
      .then(response => {
        return response.json();
      })
      .then(data2 => {
        console.log(data2)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
     
 
    }


    document.getElementById('srcbtn').addEventListener('click', fetchWeather);
