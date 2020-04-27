let path = require('path')
let bodyParser = require('body-parser');
let projectData = {}

// set  API credentias
const dotenv = require('dotenv');
dotenv.config();


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
