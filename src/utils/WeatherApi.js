import { checkResponse } from "./api";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather = (lat, lon) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`,
  ).then(checkResponse);
};
