// Require modules from Node
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

// Use imported modules
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


// Send information to client side
app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});



// Post request - request made from client side
app.post("/", function(req, res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    // JavaScript data for subscribing
    // member to a newsletter list
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    // Transform JavaScript data into flat JSON data
    const jsonData = JSON.stringify(data);


    // Sending post to Mailchimp
    const url = "https://us21.api.mailchimp.com/3.0/lists/24de1ac7a1";

    const options = {
        method: "POST",
        auth: "rome1:34f58cd9b56afb722032f04a5e9632b7-us21"
    }


    const request = https.request(url, options, function(response) {
        // Send either a success or failure page when the user
        // sign up for the mailing list
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end();
});


app.post("/failure", function(req, res) {
    res.redirect("/");
});


// Check server connection
app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});
