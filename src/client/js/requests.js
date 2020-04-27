const geonamesUrl = 'http://api.geonames.org/';
const geonamesKey = '&username=nawaf_softwareeng&style=full';
const geonamesQuery = 'searchJSON?formatted=true&q=';
const weatherbit_URL = 'http://api.weatherbit.io/v2.0/forecast/daily?';
const weatherbit_KEY = '&key=73a527111c75473fb02b45942d556398';
const pixabayURL = 'https://pixabay.com/api/?key=';
const pixabayKey = '';

async function getGeoLocation(location) {

    try {
        const response = await fetch(`${geonamesUrl}${geonamesQuery}${location}${geonamesKey}`)
        if (response.ok) {
            let location = {};
            const data = await response.json();
            location.latitude = data.geonames[0].lat;
            location.longitude = data.geonames[0].lng;
            location.countryCode = data.geonames[0].countryCode;
            return location;
        }

    } catch (e) {
        console.log(e)
    }

}

async function getImage(city_name, country) {
    const queryCity = `&q=${city_name}&image_type=photo&pretty=true&category=places`;
    const queryCountry = `&q=${country}&image_type=photo&pretty=true&category=places`;
    const cityEndpoint = pixabayURL + pixabayKey + queryCity;
    const countryEndpoint = pixabayURL + pixabayKey + queryCountry;

    try {
        let response = await fetch(cityEndpoint)
        if (response.ok) {
            let data = response.json();
            if (data.totalHits === 0) {
                // If not, display pictures for the country
                response = await fetch(countryEndpoint);
                if (response.ok) {
                    data = await response.json();
                    return data.hits[0].largeImageURL;
                }
            }


            return data.hits[0].largeImageURL;
        }
    } catch (e) {
        console.log(e)
    }
}

//https://api.darksky.net/forecast/[key]/[latitude],[longitude]
async function getWeather(latitude, longitude) {
    const endpoint = `${weatherbit_URL}&lat=${latitude}&lon=${longitude}${weatherbit_KEY}`;
    try {
        const response = await fetch('http://localhost:8081/forecast', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({endpoint: endpoint})
        });

        if (response.ok) {
            let data = await response.json()
            return data;

        }
    } catch (e) {
        console.log(e);
    }


}

export {getGeoLocation, getImage, getWeather};