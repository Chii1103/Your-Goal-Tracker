import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Alert,
  Grid,
} from "@mui/material";
import { WiCloudy, WiDaySunny, WiRain, WiSnow, WiStrongWind } from "react-icons/wi"; // 天気アイコン
import { FaWater } from "react-icons/fa"; // 湿度アイコン
// import "./Weather.scss";

const Weather = () => {
  // 天気データを保持するためのステート変数
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const apiKey = "9554513f316a4c9edecf91e03eaec027";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

  const fetchWeather = async () => {
    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      if (response.status === 404) {
        setError(true);
        setWeatherData(null);
      } else {
        const data = await response.json();
        setWeatherData(data);
        setError(false);
      }
    } catch (e) {
      setError(true);
    }
  };
  // 天気アイコンを選択するための関数
  const getWeatherIcon = (weatherType) => {
    const lowerWeatherType = weatherType.toLowerCase();
  
    if (lowerWeatherType === "clear") {
      return <WiDaySunny size={100} />;
    } else if (lowerWeatherType === "clouds") {
      return <WiCloudy size={100} />;
    } else if (lowerWeatherType === "rain") {
      return <WiRain size={100} />;
    } else if (lowerWeatherType === "snow") {
      return <WiSnow size={100} />;
    } else {
      return <WiCloudy size={100} />;
    }
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "0 auto", height:445 }}>
      <CardContent>
        <Typography variant="h5"  sx={{textAlign:"center"}}>Weather Check</Typography>
        <Grid container spacing={2} alignItems="center" style={{ marginTop: "1em" }}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              label="Enter city name"
              variant="outlined"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="primary" onClick={fetchWeather} fullWidth>
              Search
            </Button>
          </Grid>
        </Grid>

        {error && (
          <Alert severity="error" style={{ marginTop: "1em" }}>
            Invalid city name
          </Alert>
        )}

        {weatherData && (
          <div className="weather" style={{ marginTop: "1em" }}>
           {getWeatherIcon(weatherData.weather[0].main)} {/* アイコンに置き換え */}
            <Typography variant="h3">
              {Math.round(weatherData.main.temp)}°C
            </Typography>
            <Typography variant="h5">{weatherData.name}</Typography>
            <Grid container spacing={2} style={{ marginTop: "1em" }}>
              <Grid item xs={6} container alignItems="center">
              <FaWater size={30} /> {/* 湿度アイコン */}
              <Typography variant="body1" style={{ marginLeft: "1em" }}>
                  {weatherData.main.humidity}% Humidity
                </Typography>
              </Grid>
              <Grid item xs={6} container alignItems="center">
               <WiStrongWind size={30}/>
               <Typography variant="body1" style={{ marginLeft: "1em" }}>
                  {weatherData.wind.speed} km/h
                </Typography>
              </Grid>
            </Grid>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Weather;