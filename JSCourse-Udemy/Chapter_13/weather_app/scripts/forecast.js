const key = 'cpwNY9vlEBE4sBJJInUsqdDQ6jRYpzx8';

//GET WEATHER INFORMATION
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    response = await fetch(base + query);
    const data = await response.json();
    return data[0]
}

//GET CITY INFORMATION
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0]
};