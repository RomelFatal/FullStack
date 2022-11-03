//jshint esversion:6
// Require modules from Node
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// Load the full build.
const _ = require('lodash');

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

// Use imported modules
const app = express();

// Array to store user posts
let posts = [];

app.set('view engine', 'ejs');

// Body parser allows access to form data from HTML file
app.use(bodyParser.urlencoded({extended: true}));

// Accessing public files to render style sheets
// and other static resources not readily accessible to express
app.use(express.static("public"));


// FIRST GET AND POST COMBO
// Ensure client connection and page
// retrieve from directory is successful
app.get("/", function(req, res) {
    res.render("home", {
        startingContent: homeStartingContent,
        posts: posts
    });
});


// SECOND GET
// Ensure client connection and page
// retrieve from directory is successful
app.get("/about", function(req, res) {
    res.render("about", {aboutUsContent: aboutContent});
});


// THIRD GET
// Ensure client connection and page
// retrieve from directory is successful
app.get("/contact", function(req, res) {
    res.render("contact", {contactUsContent: aboutContent});
});


// FOURTH GET
// Ensure client connection and page
// retrieve from directory is successful
app.get("/compose", function(req, res) {
    res.render("compose");
});

// Process post request from client connection page
// and render the post request to display on
// client page
app.post("/compose", function(req, res) {
    // Access the post title and post body
    // from user input from the form
    const post = {
        title: req.body.postTitle,
        content: req.body.postBody
    };

    // Add new user posts to the post array
    posts.push(post);

    // Send the posts to the homepage
    res.redirect("/");
});


// Generate dynamic URL using express route
// parameters (params)
app.get("/posts/:postName", function(req, res) {
    // Convert URL params to lower case
    const requestedTitle = _.lowerCase(req.params.postName);

    // Compare user title with array post title
    posts.forEach(function(post) {
        // Convert post titles to lower case
        const storedTitle = _.lowerCase(post.title);

        if (storedTitle === requestedTitle) {
            // Display the post on its own
            // page when the user navigate to it
            res.render("post", {
                title: post.title,
                content: post.content
            });
        }
    });
});



// Ensure server connection
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
