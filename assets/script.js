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
        const iconCode1 = weatherArray.list[0].weather[0].icon;
        const iconUrl1 = "http://openweathermap.org/img/w/"+iconCode1+".png";
        const imgElement1 = document.createElement('img');
        imgElement1.src = iconUrl1;
        document.getElementById("wya").appendChild(imgElement1)


        document.getElementById("day2").innerHTML= weatherArray.list[8].dt_txt;
        document.getElementById("temp2").innerHTML= weatherArray.list[8].main.temp + "K";
        document.getElementById("humid2").innerHTML= weatherArray.list[8].main.humidity + "%";
        document.getElementById("wind2").innerHTML= weatherArray.list[8].wind.speed + "m/s";
        const iconCode2 = weatherArray.list[8].weather[0].icon;
        const iconUrl2 = "http://openweathermap.org/img/w/"+iconCode2+".png";
        const imgElement2 = document.createElement('img');
        imgElement2.src = iconUrl2;
        document.getElementById("icon2").appendChild(imgElement2)


        document.getElementById("day3").innerHTML= weatherArray.list[16].dt_txt;
        document.getElementById("temp3").innerHTML= weatherArray.list[16].main.temp + "K";
        document.getElementById("humid3").innerHTML= weatherArray.list[16].main.humidity + "%";
        document.getElementById("wind3").innerHTML= weatherArray.list[16].wind.speed + "m/s";
        const iconCode3 = weatherArray.list[16].weather[0].icon;
        const iconUrl3 = "http://openweathermap.org/img/w/"+iconCode3+".png";
        const imgElement3 = document.createElement('img');
        imgElement3.src = iconUrl3;
        document.getElementById("icon3").appendChild(imgElement3)


        document.getElementById("day4").innerHTML= weatherArray.list[24].dt_txt;
        document.getElementById("temp4").innerHTML= weatherArray.list[24].main.temp + "K";
        document.getElementById("humid4").innerHTML= weatherArray.list[24].main.humidity + "%";
        document.getElementById("wind4").innerHTML= weatherArray.list[24].wind.speed + "m/s";
        const iconCode4 = weatherArray.list[24].weather[0].icon;
        const iconUrl4 = "http://openweathermap.org/img/w/"+iconCode4+".png";
        const imgElement4 = document.createElement('img');
        imgElement4.src = iconUrl4;
        document.getElementById("icon4").appendChild(imgElement4)


        document.getElementById("day5").innerHTML= weatherArray.list[32].dt_txt;
        document.getElementById("temp5").innerHTML= weatherArray.list[32].main.temp + "K";
        document.getElementById("humid5").innerHTML= weatherArray.list[32].main.humidity + "%";
        document.getElementById("wind5").innerHTML= weatherArray.list[32].wind.speed + "m/s";
        const iconCode5 = weatherArray.list[32].weather[0].icon;
        const iconUrl5 = "http://openweathermap.org/img/w/"+iconCode5+".png";
        const imgElement5 = document.createElement('img');
        imgElement5.src = iconUrl5;
        document.getElementById("icon5").appendChild(imgElement5)


        document.getElementById("day6").innerHTML= weatherArray.list[39].dt_txt;
        document.getElementById("temp6").innerHTML= weatherArray.list[39].main.temp + "K";
        document.getElementById("humid6").innerHTML= weatherArray.list[39].main.humidity + "%";
        document.getElementById("wind6").innerHTML= weatherArray.list[39].wind.speed + "m/s";
        const iconCode6 = weatherArray.list[39].weather[0].icon;
        const iconUrl6 = "http://openweathermap.org/img/w/"+iconCode6+".png";
        const imgElement6 = document.createElement('img');
        imgElement6.src = iconUrl6;
        document.getElementById("icon6").appendChild(imgElement6)
        

        
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
     
 
    }


    document.getElementById('srcbtn').addEventListener('click', fetchWeather);
