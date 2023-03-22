const key = 'mR6UwKBDGWlEZ9JDlxcmksirbyWb0ZE5';
//location details
const getCity = async (city)=>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);

    const data = await response.json();
    return data[0];

}

//weather condition details

const getWeather = async (id)=>{
     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
     const query = `${id}?apikey=${key}`;
     const response = await fetch(base+query);
     const data = await response.json();
    // console.log(data);
    return data[0];  
}





