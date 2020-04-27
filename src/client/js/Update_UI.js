//updating UI method
const updateUI = async () => {

    try {
        const request = await fetch('http://localhost:8081/all');
        if (request.ok) {
            const data = await request.json()
           document.querySelector('.info').innerHTML = ` <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button id="save_trip">Save trip</button>
            <button id="delete_trip">Delete trip</button>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>`

        }

    } catch (e) {
        console.log('error', e);
    }
};
export {updateUI}