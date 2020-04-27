let path = require('path')
let bodyParser = require('body-parser');
let projectData = {}

// set  API credentias
const dotenv = require('dotenv');
dotenv.config();

const async = require('express-async-errors')
const fetch = require('node-fetch')


const express = require('express')
const cors = require('cors')
const app = express()

// setting up the cors origin and middle ware
app.use(cors())
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

app.get('/test', function (req, res) {
})
// designates what port the app will listen to for incoming requests
const port = 8081
app.listen(port, function () {
    console.log(`Example app listening on ${port} !`);


})

app.post('/forecast', async (req, res, next) => {
    if (req.body.endpoint !== " ") {
        const endpoint = req.body.endpoint;
        try {
            const response = await fetch(endpoint);
            if (response.ok) {
                const data = await response.json();
                projectData.city_name = data.city_name;
                projectData.country_code = data.country_code;
                projectData.timezone = data.timezone;
                projectData.temp = data.data[0].temp;
                console.log(projectData);
                res.status(201).send(data);
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(400).json('Bad Request');
    }
});

app.get('/all', (req, res) => {
    res.send(projectData);
})

