//ATUALIZANDO COM A REQUISIÇÃO COM O USO DE CLASSE (FORECAST)
class Forecast {
  constructor() {
    this.key = "cpwNY9vlEBE4sBJJInUsqdDQ6jRYpzx8";
    this.weatherURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }
  async updateCity(city) {
    const cityDets = await this.getCity(city);
    const weather = await this.getWeather(cityDets.Key);
    return { cityDets, weather };
  }
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
    return data[0];
  }
  async getWeather(id) {
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    return data[0];
  }
}

//REQUISIÇÃO sem USO DE CLASSE (FORECAST) - 1ª construção/ensinamento
//const key = "cpwNY9vlEBE4sBJJInUsqdDQ6jRYpzx8";

//GET WEATHER INFORMATION
//const getWeather = async (id) => {
//  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
//  const query = `${id}?apikey=${key}`;

//  response = await fetch(base + query);
//  const data = await response.json();
//  return data[0];
//};

//GET CITY INFORMATION
//const getCity = async (city) => {
//  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
//  const query = `?apikey=${key}&q=${city}`;
//
//  const response = await fetch(base + query);
//  const data = await response.json();
//
//  return data[0];
//};
