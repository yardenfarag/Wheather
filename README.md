# Weather App

A modern weather application that provides real-time weather information and clothing recommendations.

## Features

- Real-time weather data
- Clothing recommendations based on weather conditions
- Dynamic weather backgrounds
- Dark/Light mode toggle
- Responsive design

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenWeather API key:
```bash
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## Deployment

### GitHub Pages

1. Add the following to your `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add the homepage field to your `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/weather-app"
}
```

4. Deploy:
```bash
npm run deploy
```

### Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

- `VITE_OPENWEATHER_API_KEY`: Your OpenWeather API key

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
