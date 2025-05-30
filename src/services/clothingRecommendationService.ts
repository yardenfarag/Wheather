import type { WeatherData } from './weatherService';

export const getClothingRecommendation = (weatherData: WeatherData): string => {
  const { main, weather, wind } = weatherData;
  const temp = main.temp;
  const weatherMain = weather[0].main.toLowerCase();
  const windSpeed = wind.speed * 3.6; // Convert m/s to km/h

  let recommendation = '';

  // Temperature-based recommendations
  if (temp < 5) {
    recommendation = 'It\'s very cold! Wear a heavy winter coat, thermal layers, gloves, and a warm hat.';
  } else if (temp < 10) {
    recommendation = 'It\'s cold. Wear a winter coat, warm layers, and a hat.';
  } else if (temp < 15) {
    recommendation = 'It\'s cool. Wear a jacket or sweater and long pants.';
  } else if (temp < 20) {
    recommendation = 'It\'s mild. A light jacket or sweater would be comfortable.';
  } else if (temp < 25) {
    recommendation = 'It\'s pleasant. Light layers or a t-shirt with a light jacket would be good.';
  } else if (temp < 30) {
    recommendation = 'It\'s warm. Short sleeves and light clothing are recommended.';
  } else {
    recommendation = 'It\'s hot! Wear light, breathable clothing and stay hydrated.';
  }

  // Weather condition adjustments
  if (weatherMain.includes('rain')) {
    recommendation += ' Bring a waterproof jacket or umbrella.';
  } else if (weatherMain.includes('snow')) {
    recommendation += ' Wear waterproof boots and warm, water-resistant outerwear.';
  } else if (weatherMain.includes('thunderstorm')) {
    recommendation += ' Stay indoors if possible. If you must go out, wear waterproof clothing.';
  } else if (weatherMain.includes('drizzle')) {
    recommendation += ' A light rain jacket or umbrella would be helpful.';
  }

  // Wind adjustments
  if (windSpeed > 30) {
    recommendation += ' It\'s very windy - consider wearing wind-resistant clothing.';
  } else if (windSpeed > 20) {
    recommendation += ' It\'s windy - you might want an extra layer.';
  }

  return recommendation;
}; 