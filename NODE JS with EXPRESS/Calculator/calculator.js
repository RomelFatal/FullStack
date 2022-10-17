// Require Express to run server
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Allow to access form data
app.use(bodyParser.urlencoded({extended: true}));



// Home page
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// bmi calculator page
app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmicalculator.html");
});




// Calculate input provided by the user
app.post("/", function(req, res) {
    // Access data from the form
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});




// Calculate BMI based on user input
app.post("/bmicalculator", function(req, res) {
    // Access data from BMI form
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    // Calculate the result
    var bmi = weight / (height * height);

    res.send("Your BMI is " + bmi);
});



// Show when server has started
app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});
