// Require Express to build the server
const express = require("express");
const app = express();

// Routing
app.get("/", function(req, res) {
    res.send("hello world!");
});
app.get("/contact", function(req, res) {
    res.send("You can reach me at: email@email.com!");
});
app.get("/about", function(req, res) {
    res.send("I'm Romel Fatal - A civil engineer turned full stack developer! and currently pursuing a second bachelor in computer science and engineering.");
});


// Show when the server starts
app.listen(3000, function (){
    console.log("Server started on port 3000");
});



// const express = require('express')
// const app = express()
// const port = 3000
//
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
//
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
