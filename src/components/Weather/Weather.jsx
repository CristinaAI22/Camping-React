import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const city = "Brezoi"; // Change this to your desired city
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric`
        );
        setWeatherData({
          current: response.data,
          forecast: forecastResponse.data.daily,
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching weather data: {error.message}</p>;

  return (
    <div>
      <h2>Weather in {weatherData.current.name}</h2>
      <p>Temperature: {weatherData.current.main.temp} °C</p>
      <p>Condition: {weatherData.current.weather[0].description}</p>
      <h3>3-Day Forecast</h3>
      <ul>
        {weatherData.forecast.slice(1, 4).map((day, index) => (
          <li key={index}>
            <strong>{new Date(day.dt * 1000).toLocaleDateString()}</strong>:{" "}
            {day.temp.day} °C, {day.weather[0].description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Weather;
