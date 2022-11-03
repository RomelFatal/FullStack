// Require modules from Node
const express = require("express");
const bodyParser = require("body-parser");

// Require local data module
const date = require(__dirname + "/date.js");


// Use imported modules
const app = express();
// Body parser allows access to form data from HTML file
app.use(bodyParser.urlencoded({extended: true}));


// Accessing public files to render style sheets
// and other static resources not readily accessible to express
app.use(express.static("public"));


// Define the items array and work items array
// to store new item added to food list and
// work todo list
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

// Run EJS for templating
app.set('view engine', 'ejs');



// FIRST GET AND POST COMBO
// Ensure client connection and page
// retrieve from directory is successful
app.get("/", function(req, res) {
    // Use the date module imported locally
    const day = date.getDate();

    // File rendered from the needed views folder for EJS
    // which is accessed by express to render the page
    res.render("list", {listTitle: day, newListItems: items});
});

// Process post request from client connection page
// and render the post request to display on
// client page
app.post("/", function(req, res) {
    // Access item from user input from the form
    const item = req.body.newItem;

    // Route where user added items to the todo list
    // is pushed to
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        // Add user input item to the array items
        items.push(item);

        // Redirect the post to the homepage
        res.redirect("/");
    }
});


// SECOND GET AND POST COMBO
// Additional route to access work path file
// for a work todo list named Work List
app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});


// Ensure server connection
app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});
