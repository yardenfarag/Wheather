import React from 'react';
import type { WeatherData } from '../types/weather';

interface WeatherDisplayProps {
  data: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold mb-2">{data.name}</h2>
          <p className="text-5xl font-bold mb-4">{Math.round(data.main.temp)}°C</p>
          <p className="text-xl capitalize">{data.weather[0].description}</p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          className="w-24 h-24"
        />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white/5 rounded-lg p-4">
          <p className="text-sm text-gray-300">Feels Like</p>
          <p className="text-xl font-semibold">{Math.round(data.main.feels_like)}°C</p>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <p className="text-sm text-gray-300">Humidity</p>
          <p className="text-xl font-semibold">{data.main.humidity}%</p>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <p className="text-sm text-gray-300">Wind Speed</p>
          <p className="text-xl font-semibold">{data.wind.speed} m/s</p>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <p className="text-sm text-gray-300">Pressure</p>
          <p className="text-xl font-semibold">{data.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay; 