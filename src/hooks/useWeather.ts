import { useEffect, useState } from "react";
import { getWeatherIcon } from "@/utils/weather";

const DUZCE_LATITUDE = 40.8438;
const DUZCE_LONGITUDE = 31.1565;
const WEATHER_ENDPOINT = `https://api.open-meteo.com/v1/forecast?latitude=${DUZCE_LATITUDE}&longitude=${DUZCE_LONGITUDE}&current_weather=true`;

const FALLBACK_TEMPERATURE_CELSIUS = 21;
const FALLBACK_WEATHER_ICON = "partly_cloudy_day";

interface OpenMeteoResponse {
  current_weather: {
    temperature: number;
    weathercode: number;
  };
}

export function useWeather() {
  const [temperatureCelsius, setTemperatureCelsius] = useState(FALLBACK_TEMPERATURE_CELSIUS);
  const [weatherIcon, setWeatherIcon] = useState(FALLBACK_WEATHER_ICON);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadWeather() {
      try {
        const response = await fetch(WEATHER_ENDPOINT);
        if (!response.ok) {
          throw new Error(`Weather request failed with status ${response.status}`);
        }
        const payload = (await response.json()) as OpenMeteoResponse;
        if (!isMounted) {
          return;
        }
        setTemperatureCelsius(Math.round(payload.current_weather.temperature));
        setWeatherIcon(getWeatherIcon(payload.current_weather.weathercode));
      } catch {
        if (isMounted) {
          setTemperatureCelsius(FALLBACK_TEMPERATURE_CELSIUS);
          setWeatherIcon(FALLBACK_WEATHER_ICON);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadWeather();
    return () => {
      isMounted = false;
    };
  }, []);

  return { temperatureCelsius, weatherIcon, isLoading };
}
