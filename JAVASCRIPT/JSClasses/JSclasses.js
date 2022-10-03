/*
    Classes in JavaScript
   -----------------------
   * Class is a concept in Object-Oriented Programming(OOP) - it is a
    programmer-defined data type that describe what objects of the class will look like when they are created.

   - Object-Oriented Programming is often used to model representations of      objects in the real world.
   - For example,  a kitchen appliance manufacturer who produces juicers
    among its product lines can be thought of as an object
   - The manufacturer would represent a juicer using a juicer class
   *** The juicer class would repres the design of the juicer, and each juicer
    that's made on the production line would be instances of that class ***
*/
class MyClass {
    constructor(option) {
        console.log(`Creating instance using ${option} option`);
        this.option = option;
    }
}

const foo = new MyClass('speedy');




/*
   - There are three main concepts in 00P

   ***** The THREE main concepts in OOP *****
   ------------------------------------------
   1) ENCAPSULATION
   2) INHERITANCE
   3) POLYMORPHISM


   *** In many ways, a kitchen appliance manufacturer who produces juicers
    among its product lines can be thought of as an object, it has properties
    such as speed and capacity, and also has methods or actions it can
    perform, such as juicing, switching ON and switching OFF. ***



   1) ENCAPSULATION
  ------------------
  - When someone who owns a juicer, put fruits into the machine, press the 'ON'
    button and out comes the juice. No clue how it does it.
  - The inner workings are kept hidden inside the object and only the essential
    functionalities are exposed to the end user, such as the 'ON' button.

  - In OOP, this involves keeping all the programming logic inside an object
    and making methods available to implement the functionality, without the
    outside world needing to know 'how' it's done.
*/






/*
   2) INHERITANCE
  ----------------
  - Let's suppose the manufacturer wants to make the next models of juicer
    to deal with more types of fruits and it's a bit more quieter.
  - Even though it has these extra features, it uses many of the same parts
    the previous juicer has inside
  - That is, taking the features of one object then adding some new features
  - In OOP, this means we can take an object that already exists and inherit
    all its properties and methods. We can then improve on its functionality by
    adding new properties and methods.
*/

// A class can inherit from another class using the EXTENDS keyword in a
 // declaration
 class School {
     // Defining a constructor
     constructor(name, age, major) {
         this.name = name;
         this.age = age;
         this.major = major;
     }

     // Defining methods
     Org() {
         return("I am " + this.name + " from Phoenix");
     }
     dob() {
         return("The date of birth of " + this.name + " is " + (2022 - this.age) + " I stydying " + this.major);
     }
 }
 // Create new object
 var Frank = new Student("Frank", 22, "Electrial engineer");
 console.log(Frank);



class Student1 extends School {
    constructor(name, age, major, college, year) {
        super(name, age, major);
        this.college = college;
        this.year = year;
    }
}
// Create new object
var Peter = new Student1("Peter", 20, 2022, "Liberal Arts", 2024);





// Class 2
class Turtle {
    // Defining a constructor
    constructor(name) {
        this.name = name;
    }

    // Defining methods
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }

    swim() {
        return `${this.name} paddles in the water`;
    }
}

/*
    This class declaration is similar to before, and defines propeties and
    methods for a normal turtle. We can add more specific properties such as weapons that don't really apply to normal turtles, they are for NINJA TURTLES.
    Instead of polluting the Turtle class with these properties, it would be a good idea to create a sub-class or child class of the Turtle class called NINJA TURTLE.
    This is created in a similar fashion, using a class declaration, but notice the use of the EXTENDS keyword
*/
class NinjaTurtle extends Turtle {
    // Defining a constructor
    constructor(name) {
        super(name);
        this.weapon = 'hands';
    }
    // Defining a method
    attack() {
        return `Feel the power of my ${this.weapon}!`;
    }
}



/*
    - Static methods are bound to a class, not the instances of that class. Therefore, static methods are useful for defining helper or utility methods

    - You can define a static method within a class body by prefixing the method declaration with the STATIC keyword.
    - Static methods are defined as properties of the constructor function rather than properties of the prototype object.
*/
class Student {
    // Defining a constructor
    constructor(name, age, rool) {
        this.name = name;
        this.age = age;
        this.roll = roll;
    }

    // Defining methods
    Org() {
        return("I am " + this.name + " from New York");
    }
    dob() {
        return("The date of birth of " + this.name + " is " + (2022 - this.age);
        )
    }

    static add(a, b) {
        return (a + b);
    }
}

// Create new object
var Alex = new Student("Alex", 23, 45);
console.log(John);
console.log(Student.add(15, 4));








/*
   3) POLYMORPHISM
  -----------------
  - The juicer isn't the only kitchen appliance the manufacturer produces that
    has an 'ON' button, although the way the on button works is slightly
    different for each appliance.
  - The juicer uses the same electrical outlet as other appliances in a kitchen
  - In OOP, this mean various objects can share the same method, but also have
    the ability to override shared methods with a more specific implementation

  *** The concept of polymorphism means that different objects can have the
    same method, but implement it in different ways

    - The object.prototype object has a toString() method that is shared by all objects. This mean every object created in JavaScript will have a
    toString() method.
    - Polymorphism means that objects are able to override this method with
      a more specific implementation.
    - So although every object has a toString() method, the way it's implemented
      can vary between different objects. ***
*/

// Example
/*
    Calling the toString() method on an array object will return each value in
    comma-separated string
*/
[1, 2, 3].toString();
// '1,2,3'


/*
    Calling the toString() method on a primitive number will return a string
    containing that number
*/
2..toString(); // 2 dot operators for intefers
// '2'
