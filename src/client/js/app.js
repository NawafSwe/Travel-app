import {getGeoLocation, getImage, getWeather} from './requests'
/* Global Variables */
// Create a new date instance dynamically with JS
//"http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=20001&APPID="
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();


// Event listener to add function to existing HTML DOM element
const save_trip = document.querySelector('#save_trip');
const delete_trip = document.querySelector('#delete_trip');
const search_button = document.querySelector('#submit_button');

// elements for displays
let city_name = document.querySelector('#city_name');


// Function called by event listener
const getting_info = async (e) => {
    e.preventDefault();
    const location = await getGeoLocation(city_name)
    const weather = await getWeather(location.latitude, location.longitude)
    const url = getImage(city_name,)


}
search_button.addEventListener('click', getting_info);


//updating UI method
const updateUI = async () => {
    const request = await fetch(window.location.origin + '/all');
    try {
        const response = await request.json();
        date_entry.innerHTML = response[0].date;
        temp_entry.innerHTML = response[0].temp;
        content_entry.innerHTML = response[0].zip + ' ' + response[0].feelings;
    } catch (e) {
        console.log('error', e);
    }
};

