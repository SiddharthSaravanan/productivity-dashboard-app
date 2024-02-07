import {useState, useEffect} from 'react';

export default function Weather() {

  const [weatherText, setWeatherText] = useState("");
  const [loactionText, setLocationText] = useState("");
  const [iconText, setIconText] = useState("");

  function displayWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=039c783fda95d602211448be1cabee35&units=imperial`, {method:"GET"})
      .then(response => {
        if (!response.ok){
          throw Error("Weather Data not available");
        }
        return response.json()
      })
      .then(data=>{
        console.log(data);
        setWeatherText(data.weather[0].description+", "+(Math.round(10*(data.main.temp))/10) +" °F");
        setLocationText(data.name);
        setIconText(data.weather[0].icon);
      }).catch(error => {
        setWeatherText("Weather Data not available");
        setLocationText("");
      });
  }

  useEffect(function(){
    navigator.geolocation.getCurrentPosition((position) => {
      displayWeather(position.coords.latitude, position.coords.longitude);
    });
  },[]);
  
  

  return (
    <div className="weather">
      <h3 id="temp">{loactionText}<br/>{weatherText}</h3>
      <img src = {`http://openweathermap.org/img/w/${iconText}.png`}/>
    </div>
  );
}


