import { useEffect, useState } from 'react';
import styles from './WeatherBackground.module.css';

interface WeatherBackgroundProps {
  weatherMain: string;
  temperature: number;
}

export const WeatherBackground = ({ weatherMain, temperature }: WeatherBackgroundProps) => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    console.log('WeatherBackground received:', { weatherMain, temperature });
    
    const weather = weatherMain.toLowerCase();
    let newAnimationClass = '';

    if (weather.includes('rain') || weather.includes('drizzle')) {
      newAnimationClass = styles.rainy;
      console.log('Setting rainy animation');
    } else if (weather.includes('snow')) {
      newAnimationClass = styles.snowy;
      console.log('Setting snowy animation');
    } else if (weather.includes('thunderstorm')) {
      newAnimationClass = styles.stormy;
      console.log('Setting stormy animation');
    } else if (weather.includes('clouds')) {
      newAnimationClass = styles.cloudy;
      console.log('Setting cloudy animation');
    } else if (weather.includes('clear') && temperature > 20) {
      newAnimationClass = styles.sunny;
      console.log('Setting sunny animation');
    } else if (weather.includes('clear') && temperature <= 20) {
      newAnimationClass = styles.night;
      console.log('Setting night animation');
    } else if (weather.includes('mist') || weather.includes('fog')) {
      newAnimationClass = styles.foggy;
      console.log('Setting foggy animation');
    } else if (weather.includes('wind') || weather.includes('breeze')) {
      newAnimationClass = styles.windy;
      console.log('Setting windy animation');
    } else {
      newAnimationClass = styles.default;
      console.log('Setting default animation');
    }

    console.log('Selected animation class:', newAnimationClass);
    setAnimationClass(newAnimationClass);
  }, [weatherMain, temperature]);

  const showRain = weatherMain.toLowerCase().includes('rain') || weatherMain.toLowerCase().includes('drizzle');
  const showSnow = weatherMain.toLowerCase().includes('snow');
  const showThunder = weatherMain.toLowerCase().includes('thunderstorm');
  const showWind = weatherMain.toLowerCase().includes('wind') || weatherMain.toLowerCase().includes('breeze');

  console.log('Animation states:', { showRain, showSnow, showThunder, showWind });

  return (
    <div className={`${styles.background} ${animationClass}`}>
      <div className={styles.overlay} />
      {showRain && (
        <div className={styles.rain}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className={styles.raindrop} />
          ))}
        </div>
      )}
      {showSnow && (
        <div className={styles.snow}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className={styles.snowflake} />
          ))}
        </div>
      )}
      {showThunder && (
        <div className={styles.lightning} />
      )}
      {showWind && (
        <div className={styles.wind}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className={styles.windLine} />
          ))}
        </div>
      )}
    </div>
  );
}; 