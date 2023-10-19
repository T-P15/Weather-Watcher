const apiKey = "99b2eb99c967dc883266dcd877ae5f0b"
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=' + apiKey;
let cityArray= [];
let weatherArray= [];
const date = new Date();


function fetchWeather() {
       let city1 = document.getElementById("cityTxt").value
          console.log("city = ", city1);
      let weatherAPI_URL = "http://api.openweathermap.org/geo/1.0/direct?q="+ city1 + "&limit=1&appid=" + apiKey;
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
        const weatherArray = data2
        console.log(weatherArray)
        document.getElementById("wya").innerHTML= weatherArray.city.name +"  " + weatherArray.list[0].dt_txt; 
        document.getElementById("temp").innerHTML= "current temperature: " + weatherArray.list[0].main.temp + "K";
        document.getElementById("humid").innerHTML= "current humidity: " + weatherArray.list[0].main.humidity + "%";
        document.getElementById("wind").innerHTML= "current windspeed: " + weatherArray.list[0].wind.speed + "m/s";
        const iconCode = weatherArray.list[0].weather[0].icon;
        const iconUrl = "http://openweathermap.org/img/wn/"+iconCode+".png";
        const imgElement = document.createElement('img');
        imgElement.src = iconUrl;
        document.getElementById("wya").appendChild(imgElement)
        

        
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
     
 
    }


    document.getElementById('srcbtn').addEventListener('click', fetchWeather);
