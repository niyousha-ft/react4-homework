import React, { useState } from "react";
import axios from "axios";
export default function Search() {
  let [city, setCity] = useState("");
  let [load, setLoad] = useState(false);
  let [weather, setWeather] = useState({});
  function showWeather(response) {
    setLoad(true);
    setWeather({
      temperature: response.data.main.temp,
      Humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "017d56650cd168d68067850318775d43";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="row">
        <div className="col-9">
          <input
            onChange={changeCity}
            type="search"
            placeholder=" Please Type a city.."
            className="form-control"
            autoComplete="off"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );
  if (load) {
    return (
      <div>
        {form}
        <h1 id="city">
          <strong>{city}</strong>
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h6 id="day-time">Thursday 15:03</h6>
            </div>
            <div className="col-6">
              <img src={weather.icon} alt={weather.description} />
              <div className="deg">
                <strong>
                  <span id="temperatur">
                    {Math.round(weather.temperature)}°c
                  </span>
                </strong>
              </div>
            </div>
            <ul>
              <li>
                precipitation:<span id="">{weather.description}</span>
              </li>
              <li>
                Humidity:<span id="humidity">{weather.humidity}%</span>
              </li>
              <li>
                Wind<span id="wind">:{Math.round(weather.wind)}km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
