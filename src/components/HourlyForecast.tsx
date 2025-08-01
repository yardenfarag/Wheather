import React from 'react';
import type { HourlyForecast as HourlyForecastType } from '../types/weather';

interface HourlyForecastProps {
  forecast: HourlyForecastType[];
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ forecast }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Hourly Forecast</h2>
      <div className="flex overflow-x-auto gap-4 pb-4">
        {forecast.map((hour, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[100px] bg-white/10 backdrop-blur-md rounded-lg p-4"
          >
            <div className="text-lg font-semibold">
              {hour.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${hour.icon}@2x.png`}
              alt={hour.description}
              className="w-16 h-16"
            />
            <div className="text-xl font-bold">{hour.temperature}°C</div>
            <div className="text-sm text-gray-300 capitalize">{hour.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast; 