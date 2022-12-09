import axios from "axios";
const url =
    "api.openweathermap.org/data/2.5/weather?APPID=6092c686aea8a3ff7a455552fa9c3e47&q=";
export const fetchWeather = async(city) => {
   
    try {
         const { data } = await axios.get(url + city);
         return data;
    } catch (error) {
        return {
            status: "error",
            message:error.message
        }
    }
  }