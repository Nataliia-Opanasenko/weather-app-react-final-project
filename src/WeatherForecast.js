import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast (props) {

function handleResponse(response) {
    console.log(response.data);
}


   let apiKey = "94e2a945e614efb439cac01569bt215o";
   let longitude = props.coordinates.lon;
   let latitude = props.coordinates.lat;
   let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
   
   axios.get(apiUrl).then(handleResponse);
   
   return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Tru</div>
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">19°</span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
}