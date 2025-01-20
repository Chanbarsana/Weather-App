const apiKey = "5cbda6b8ec6739e81becc9d49f6ab7af";
const Apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

  async function checkWeather(city) { 
    
    const response = await fetch(Apiurl + city + `&appid=${apiKey}`);
    var Data = await response.json();
      
    console.log(Data);
    
       
    document.querySelector(".city").innerHTML=Data.name;
    document.querySelector(".temp").innerHTML= Math.round (Data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=Data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=Data.wind.speed +"km/h";

    if(Data.weather[0].main =="Clouds"){
      weatherIcon.src ="images/clouds.png";
    }
    else if(Data.weather[0].main =="Clear"){
      weatherIcon.src ="images/clear.png";
    }
    else if(Data.weather[0].main =="Rain"){
      weatherIcon.src ="images/rain.png";
    }
    else if(Data.weather[0].main =="Drizzle"){
      weatherIcon.src ="images/drizzle.png";
    }
    else if(Data.weather[0].main =="Mist"){
      weatherIcon.src ="images/mist.png";
    }

    


    
 }

   searchBtn.addEventListener("click",() =>{
      checkWeather(searchBox.value);

   })