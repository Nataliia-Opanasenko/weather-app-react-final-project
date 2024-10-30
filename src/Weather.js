import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ reardy: false });

function handleResponse(response) {
 console.log(response.data);
setWeatherData({
  ready: true, 
  date: "Monday 7:00",
  temperature: response.data.main.temp,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  city: response.data.name,
  description: response.data.weather[0].description,
  iconUrl: "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
});

}

if(weatherData.ready){
   return (
     <div className="Weather">
       <form>
         <div className="row">
           <div className="col-9">
             <input
               type="search"
               placeholder="Enter a city..."
               className="form-control"
               autoFocus="on"
             />
           </div>
           <div className="col-3">
             <input
               type="submit"
               value="Seatch"
               className="btn btn-primary w-100"
             />
           </div>
         </div>
       </form>
       <h1>{weatherData.city}</h1>
       <ul>
         <li>{weatherData.date}</li>
         <li class="text-capitalize"> {weatherData.description}</li>
       </ul>
       <div className="row mt-3">
         <div className="col-6">
           <div className="clearfix">
             <img src={weatherData.iconUrl} alt={weatherData.description} />

             <span className="temperature">
               {Math.round(weatherData.temperature)}
             </span>
             <span className="unit">°C</span>
           </div>
         </div>
         <div className="col-6">
           <ul>
             <li>Precipitation: 15%</li>
             <li>Humidity: {weatherData.humidity}%</li>
             <li>Wind: {weatherData.wind} km/h</li>
           </ul>
         </div>
       </div>
     </div>
   );
} else {
  const apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}
  &appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
}  
}