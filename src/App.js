
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchForm } from './components/SearchForm';
import { ResultWeatherCard } from './components/ResultWeatherCard';
import { WeatherArea } from './components/WeatherArea';

function App() {
  return (
    <div>
      <SearchForm></SearchForm>
      <ResultWeatherCard></ResultWeatherCard>
      <hr></hr>
      <WeatherArea></WeatherArea>
    </div>
  );
}

export default App;
