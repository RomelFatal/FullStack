/*
    - Create a JSON package, install external package using npm
    - Require package in project
    - Follow package documentation

    - Installed 2 packages, (komliheroes & supervillains)
*/
var komliheroes = require("komliheroes");

//var mykomliheroes = komliheroes.random();
var mykomliheroes = komliheroes.all;
console.log(mykomliheroes);


const supervillains = require("supervillains");
// var mySuperVillains = supervillains.random();
var mySuperVillains = supervillains.all;
console.log(mySuperVillains);
