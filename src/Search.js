import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

import "./Search.css";

export default function Search(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    weatherSearch();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function weatherSearch() {
    const apiKey = "017d56650cd168d68067850318775d43";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  if (weather.ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                onChange={changeCity}
                type="search"
                placeholder=" Please Type a city.."
                className="form-control"
                autoComplete="off"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-light btn-outline-scondary searchBtn w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    weatherSearch();
    return "Refresh your page...";
  }
}
