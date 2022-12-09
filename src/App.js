
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchForm } from './components/SearchForm';
import { ResultWeatherCard } from './components/ResultWeatherCard';
import { WeatherArea } from './components/WeatherArea';
import { fetchWeather } from './helpers/axiosHelpers';

function App() {
  const onCitySubmit = async(city) => {
    let result = await fetchWeather(city);
    console.log(result)
  }
  
  return (
    <div>
      <SearchForm onCitySubmit={onCitySubmit}></SearchForm>
      <ResultWeatherCard></ResultWeatherCard>
      <hr></hr>
      <WeatherArea></WeatherArea>
    </div>
  );
}

export default App;
