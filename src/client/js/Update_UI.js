//updating UI method
const updateUI = async (imgUrl = '', Travel_date, Current_date) => {

    try {
        const request = await fetch('http://localhost:8081/all');
        if (request.ok) {
            const data = await request.json()
            document.querySelector('#info').innerHTML = ` 
  <h3 class="head">details:</h3>
  <div class="image" style=background-image:url(${imgUrl})></div>
    <div class="textual">
      <p>My trip to: ${data.city_name}</p>
     <button id="delete_trip">Delete trip</button>
     <p>country code: ${data.country_code}.</p>
     <p>temprature ${data.temp}C.</p>
     <p>Travel date: ${Travel_date}</p>
     <p>current date: ${Current_date}</p>
     
     
</div>
  `
            document.querySelector('#delete_trip').addEventListener('click', (e) => {
                e.preventDefault()
                document.querySelector('#info').innerHTML = '';

            })

        }

    } catch (e) {
        console.log('error', e);
    }
};
export {updateUI}