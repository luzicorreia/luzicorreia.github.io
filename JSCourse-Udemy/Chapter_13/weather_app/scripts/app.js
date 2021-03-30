const cityForm = document.querySelector('form');
const card = document.querySelector('.card')
const details = document.querySelector('.details') 
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    //desctructure properties  **** the same linhas 6 e 7 - substui as linhas 6 e 7 pela linha 10) 
    const { cityDets, weather } = data 

    //update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    //UPDATE THE NIGHT/DAY & ICON IMAGES
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    //TERNARY OPERATOR - Otimizar condição
    //const result = false ? 'value 1' : 'value 2';   //===> Sempre considera primeiro valor Verdadeiro e segundo valor Falso// 
    //console.log(result);

    //let timeSrc = null;
    //if(weather.IsDayTime) {
    //    timeSrc = 'img/day.svg';
    //} else {
    //    timeSrc = 'img/night.svg';
    //}

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg' ;
    time.setAttribute('src', timeSrc);

    //REMOVE THE d-none CLASS IF PRESENT
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {cityDets, weather };
};

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});

