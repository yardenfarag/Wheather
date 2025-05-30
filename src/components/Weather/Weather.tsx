import { useState, useEffect } from 'react';
import { getWeatherByCity, getWeatherByCoords } from '../../services/weatherService';
import { getClothingRecommendation } from '../../services/clothingRecommendationService';
import { WeatherBackground } from '../WeatherBackground/WeatherBackground';
import type { WeatherData } from '../../services/weatherService';
import styles from './Weather.module.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const fetchWeatherByLocation = async () => {
    try {
      setLoading(true);
      setError(null);
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      
      const weatherData = await getWeatherByCoords(position.coords.latitude, position.coords.longitude);
      console.log('Weather data received:', weatherData);
      setWeather(weatherData);
      fetchClothingRecommendation(weatherData);
    } catch (error) {
      setError('Could not fetch weather data. Please try searching for a city instead.');
    } finally {
      setLoading(false);
    }
  };

  const fetchClothingRecommendation = (weatherData: WeatherData) => {
    try {
      const recommendation = getClothingRecommendation(weatherData);
      setRecommendation(recommendation);
    } catch (error) {
      // Silent fail for clothing recommendation
    }
  };

  const handleSearch = async () => {
    if (!city.trim()) return;
    
    try {
      setLoading(true);
      setError(null);
      const weatherData = await getWeatherByCity(city);
      console.log('Weather data received:', weatherData);
      setWeather(weatherData);
      fetchClothingRecommendation(weatherData);
    } catch (error) {
      setError('Could not fetch weather data. Please check the city name and try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherByLocation();
  }, []);

  // Log weather data when it changes
  useEffect(() => {
    if (weather) {
      console.log('Rendering WeatherBackground with:', {
        weatherMain: weather.weather[0].main,
        temperature: weather.main.temp
      });
    }
  }, [weather]);

  return (
    <>
      {weather && (
        <WeatherBackground 
          weatherMain={weather.weather[0].main} 
          temperature={weather.main.temp} 
        />
      )}
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className={styles.input}
          />
          <button onClick={handleSearch} className={styles.button}>
            Search
          </button>
        </div>

        {error && <div className={styles.error}>{error}</div>}
        {loading && <div className={styles.loading}>Loading weather data...</div>}

        {weather && (
          <div className={styles.weatherInfo}>
            <h2 className={styles.cityName}>{weather.name}</h2>
            <div className={styles.temperature}>{Math.round(weather.main.temp)}°C</div>
            <div className={styles.description}>{weather.weather[0].description}</div>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <div className={styles.detailLabel}>Feels Like</div>
                <div className={styles.detailValue}>{Math.round(weather.main.feels_like)}°C</div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailLabel}>Humidity</div>
                <div className={styles.detailValue}>{weather.main.humidity}%</div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailLabel}>Wind</div>
                <div className={styles.detailValue}>{Math.round(weather.wind.speed * 3.6)} km/h</div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailLabel}>UV Index</div>
                <div className={styles.detailValue}>{weather.uvi || 'N/A'}</div>
              </div>
            </div>

            {recommendation && (
              <div className={styles.recommendation}>
                <h3>Clothing Recommendation</h3>
                <p>{recommendation}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Weather; 