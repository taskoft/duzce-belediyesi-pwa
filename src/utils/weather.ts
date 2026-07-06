export function getWeatherIcon(weatherCode: number): string {
  if (weatherCode === 0) return "sunny";
  if (weatherCode <= 3) return "partly_cloudy_day";
  if (weatherCode <= 48) return "foggy";
  if (weatherCode <= 67) return "rainy";
  if (weatherCode <= 77) return "ac_unit";
  if (weatherCode <= 82) return "rainy";
  return "thunderstorm";
}
