const API_KEY = "b380d17d75c7f7a08985636d7060633e";

export const getWeather = (lat, lon) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`,
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Weather API error");
    }
    return res.json();
  });
};
