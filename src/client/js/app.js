import {getGeoLocation, getImage, getWeather} from './requests'
import {updateUI} from "./Update_UI";
/* Global Variables */
// Create a new date instance dynamically with JS
//"http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=20001&APPID="
let d = new Date();
let newDate = d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear();
//way of checking the select
/*let e = document.getElementById("ddlViewBy");
let strUser = e.options[e.selectedIndex].text;*/


// Event listener to add function to existing HTML DOM element
const save_trip = document.querySelector('#save_trip');
const delete_trip = document.querySelector('#delete_trip');
const search_button = document.querySelector('#submit_button');

// elements for displays
let city_name = document.querySelector('#city_name');


// Function called by event listener
export const getting_info = async (e) => {
    let day = getDay();
    let month = getMonth();
    let year = getYear();


    const TripDate = day + '/' + month + '/' + year;

    e.preventDefault();
    const location = await getGeoLocation(city_name.value)
    const weather = await getWeather(location.latitude, location.longitude)
    const url = await getImage(city_name.value, location.countryCode)
    await updateUI(url, TripDate, newDate)


}
search_button.addEventListener('click', getting_info);


function checkDate(day, month, year) {
    // checking if the user is out of seven days
    return !((day - d.getDate()) > 7 || (month > d.getMonth() || year > d.getFullYear()));
}


function getDay() {
    const selectElement =
        document.querySelector('#day');
    const day = selectElement.value;
    return day;
}

function getMonth() {
    const selectElement =
        document.querySelector('#month');
    const month = selectElement.value;
    return month;
}

function getYear() {
    const selectElement =
        document.querySelector('#year');
    const year = selectElement.value;
    return year;
}







