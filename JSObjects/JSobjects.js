// <!-- IN-demand remote work -->
// <!--
//     administrative roles
//     human resources
//     nonprofit work
//     digital marketing
//     finance
//
//
//     flexjobs
//     global workplace analytics
//     angellist.com
//
//
//     Highlight transferable skills for remote work
//         talk about your soft skills
//             bring up any proactive communication
//             express your ability to work unsupervised
//             mention any aptitue for troubleshooting IT
//
//         communicate your hard skills
//             discuss comfort with communication tools
//             describe any collaboration software experience
//             share any project management tools used
//             bring up strong writing skills if you have them
//
//         present remotely achieved results
//             point out any remote team leadership wins
//             cover any relationship management successes
//
//         ATS(applicants tracking system)
//             keywords in job posting on resume
// -->






/*
  Objects Literals in JavaScript
  ------------------------------
  - An object in JavaScript is a self-contained set of related values
    and functions.
  - They act as a collection of named properties that map to any JavaScript
    value such as strings, numbers, booleans, arrays and functions.
  - If a property's value is a function, it is known as a METHOD.
*/

// Example1 of Objects Literals
var car = {
  car_manufacturer: "Audi",
  car_model: "Q7",
  price: 50000,
  allWheelDrive: function() {
    return("This car comes with four wheel drive");
  }
};


// Example2 of Objects Literals
const superman = {
  name: "Superman",
  realName: "Clark Kent",
  height: 75,
  weight: 235,
  hero: true,
  villain: false,
  allies: ["Batman", "Supergirl", "Superboy"],
  fly() {
    return("Up, up and away!");
  }
};

// Accessing properties of the object literal
// You can access the properties of an object using the dot notation
document.write("<h1>" + car.car_manufacturer + "</h1>");
document.write("<br> <p>" + superman.allies + "</p>");

superman['name']
superman["realName" + " " + "name"]



// Calling Methods
// - Object's method can be called using the dot or bracket notation
superman.fly()
superman['fly']()




/*
  Adding Properties
  -----------------
  - New properties and methods can be added to objects at any time in a program
  - You achieve this by simply assigning a value to the new property
*/
superman.city = "Metropolis";


/*
  Changing Properties
  -------------------
  - You can change the value of an object's properties at any time
    using assignment.
*/
superman["realName"] = "Kal-El";




/*
  Removing Properties
  -------------------
  - Any property can be removed from an object using the DELETE operator.
*/
delete superman.fly




/*
  The THIS keyword
      ----
  -----------------
  - The keyword this refers to the object that it within
                ----
*/
const dice = {
  sides: 6,
  roll() {
    return Math.floor(this.sides * Math.random()) + 1;
  }
}


function cars(car_manufacturer, car_model, price) {
  this.car_manufacturer = car_manufacturer;
  this.car_model = car_model;
  this.price = price;
  this.allWheelDrive() = function() {
    document.write("<h2>" + "This car comes with four wheel drive" + "<h2>");
  }
}

var car1 = new cars("Audi", "Q7", 50000);
var car2 = new cars("Honda", "Accord", 30000);
var car3 = new cars("Kia", "Optima", 20000);





/*
  Creating Objects
  ----------------
  - To create an object literal, simply use a pair of curly braces
    const spidrman = {};


  - You can also create object using a constructor function
    Examples
   ----------
    const spidrman = new Object();
    let o = new Object();   // Create an empty object: same as {}
    let a = new Array();   // Create an empty array: same as []
    let d - new Date();   // Create a Date object representing the current time
    let r = new Map();    // Create a Map object for key/value mapping

*/
var rect2 = new Object();

rect2.length = 5;
rect2.width = 10;

rect2.getarea = function() {
    return this.length * this.width;
};
rect2.getperimeter = function() {
    return 2 * this.length + 2 * this.width;
};

document.write("<h2>"+ "The length of the rectangle is" + rect2.length + "<h2");
document.write("<h2>"+ "The width of the rectangle is" + rect2.length + "<h2");
document.write("<h2>"+ "The area of the rectangle is" + rect2.length + "<h2");
document.write("<h2>"+ "The perimeter of the rectangle is" + rect2.length + "<h2");




/*
    Objects as parameters to functions
------------------------------------------
    - An object literal can be passed as a parameter to a function. This is useful when there are a large number of parameters, as it allows the argument to be provided by name and in any order.
    - Meaning you don't have to remember the order to enter them when invoking a function

    function greet({greeting, name, age}) {
    retrn `${greeting}! My name is ${name} and I am ${age} years old`
}
*/
function rect3(length, width) {
    this.length = length;
    this.width = width;

    this.getarea = function() {
        return(length * width);
    }
    this.getperimeter = function() {
        return(2 * length + 2 * width);
    }
}

var rectangle1 = new rect3(10, 6);
document.write("<h1>"+ "The area of the rectangle is: "+ getarea() + "<h1>");
document.write("<h1>"+ "The area of the rectangle is: "+ getperimeter()+"<h1>");
