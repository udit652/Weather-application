const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const time = document.querySelector('img.time');

const details = document.querySelector('.details');



const updateUI = (data)=>{

    const cityDets = data.cityDets;
    const weather = data.weather;

    //template 

let html = `<h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;
    details.innerHTML = html;

    

    

    let timeSrc = null;
    if(weather.IsDayTime){
        timeSrc = 'img/day.jpg';
    }else{
        timeSrc = 'img/images.jpg';
    }
    time.setAttribute('src',timeSrc);
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}
const updateCity = async (city)=>{
        const cityDets = await getCity(city);
        const weather  = await getWeather(cityDets.Key);
        return {
            cityDets:cityDets,
            weather:weather
        }
}
cityForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err=> console.log(err))
    localStorage.setItem('city',city);
});

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then(data=>updateUI(data))
    .catch(err=>console.log(err))
}
