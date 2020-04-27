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
let date_entry = document.querySelector('#date');
let temp_entry = document.querySelector('#temp');
let content_entry = document.querySelector('#content');
let city_name = document.querySelector('#city_name');


// Function called by event listener
search_button.addEventListener('click', getting_info);
//fetching based on the user input of zip value ;;
const fetching = async (city_name = '') => {
    // here we will use await till finish the fetching then we CONT.
    const res = await fetch(API_KEY_Gem);
    try {
        // after finishing fetching we will take the object and get the temp from it then return it ;;
        const target = await res.json();
        const temp = target.main.temp;
        return temp;
    } catch (e) {
        console.log('error is ', e);
    }
};

//fetching based on the user input of zip value ;;

// getting the info about all and updating the ui after all process using chaining calls
function getting_info(e) {
    // taking the zip value and the user input
    const zip_value = zip_entry.value;
    const feelings_value = feelings_entry.value;
    // we start fetching till we finished 'then' take the info which is data

    fetching(zip_value).then(function (data) {
        // posting the data to the projectData
        post_info({
            zip: zip_value,
            date: newDate,
            feelings: feelings_value,
            temp: data
        });
        //then we update the UI after saving the data;;
        updateUI();
    });
}

// posting info to the server
const post_info = async (data = {}) => {
    // Default options are marked with *
    const response = await fetch('/sendData', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'

            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    try {
        const new_data = await data.json();
        console.log(new_data);
    } catch (error) {
        console.log('error', error);
    }
};
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

