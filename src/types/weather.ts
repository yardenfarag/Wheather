export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    description: string;
    main: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  uvi?: number;
}

export interface HourlyForecast {
  time: Date;
  temperature: number;
  description: string;
  icon: string;
} 