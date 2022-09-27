/*
    Prototypes in JavaScript
   --------------------------
   - Objects can inherit features from one another via Prototypes
   - Every object has its own property called Prototypes

   - A prototype itself is also another object, the prototype
     has its own prototype
   - This creates something called a Prototype Chain
                                     ---------------

   - Essentially, prototype inherits the properties including the methods and the variables declared in the class.
*/

// Example
//----------
var Human = function() {
    this.canWalk = true;
    this.canSpeak = true;
};

Person.prototype.greet = function() {
    if(this.canSpeak) {
        // Checks whether this prototype has instance of speak
        this.name = "Steve";
        console.log('Hi, I am ' + this.name);
    } else {
        console.log('Sorry I can not speak');
    }
};


function try(name, subject, city) {
    this.name = name;
    this.subject = subject;
    this.city = city;
}

var x1 = new try("John", "Python", "New York");
var x2 = new try("Alex", "Java", "Miami");


Try.prototype.getName = function() {
    return this.name;
}

Try.prototype.getCity = function() {
    return this.city;
}






/*
    Prototypal Inheritance in JavaScript
   --------------------------------------
  - If you've worked with other object-oriented programming languages such as   Java or C++, you're familiar with inheritance concept.

  - We know a class is a blueprint for creating objects. If you want a new  class to reuse the functionality of an existing class, you can create a new class that extends the existing class. That's know as CLASS INHERITANCE

  - JavaScript uses PROTOTYPAL INHERITANCE
  - In prototypal inheritance, an object "inherits" properties from another object via the prototype linkage.


  ***** LET'S THINK THROUGH THE CONCEPTS OF CLASS-BASED INHERITANCE AND
   PROTOTYPAL-BASED INHERITANCE *****
  ------------------------------------------------------------------------
 - Let's assume there's an appliance company that produces BLENDERS among its kitchen product lines                                    --------


 ***** In a Class-Based Inheritance *****
 - The manufucturer would represent the design of the blender using a class as a blueprint for that juicer and each juicer that's made on the production line would be instances of that class


 ***** In a Prototypal-Based Inheritance *****
 - The manufucturer builds an actual prototype of the blender then using this prototype as the basis for making all the other blenders.
 - The blenders based on the prototype would be able to do everything the prototype could do, with some being able to do even more.
*/


// Suppose we have a plain object called prototype
var prototype = {
    foo: 'foo',
    bar: function() {
        return this.foo;
    }
};


/*
    Now we want another object called obj that inherits from prototype, which is the same as saying that prototype is the prototype of obj
*/
var obj = Object.create(prototype);


// Now all the properties and methods from prototype will be available to obj
console.log(obj.foo);
console.log(obj.bar);


/*
    Prototypal inheritance is made through object references interanlly and objects are completely mutable. This means any change you make on a prototype will immediately affect every other object that prototype is prototype of.
*/
prototype.foo = "bar";
console.log(obj.foo);


function Employee(name, id, salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
}

Employee.prototype.post = function() {
    return(this.name + " " + "is a content creator");
}

var Alex = new Employee("Alex", 3432, 120000);
console.log(Alex);


function Programmer(name, id, salary, language) {
    Employee.call(this, name, id, salary);
    this.language = language;
}
var John = new Programmer("John", 4321, 95000, "Python");
