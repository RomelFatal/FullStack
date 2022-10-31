// Import modules for project
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

// Use imported modules
const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html")
    //res.send("Server started successfully.")
});



// Post request - request made from client side
app.post("/", function(req, res) {
    // Acquiring weather data
    const query = req.body.cityName;
    const apiKey = "59aea53bcbd748c3e302b4a3cc7297c6";
    const units = "imperial";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;
    https.get(url, function(response) {
        console.log(response.statusCode);


        // Accessing the weather data
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            // Accessing the temperature
            const temp = weatherData.main.temp;
            // Accessing the weather description
            const weatherDescription = weatherData.weather[0].description;
            // Display weather icon
            const weatherIcon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"


            // Write and send weather information to client
            res.write("<p>The weahter description in Houston is " + weatherDescription + " </p>")
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees fahrenheit.</h1>");
            res.write("<img src="+ imageURL +">");

            res.send();
        });
    });
});




// Check server connection
app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});
