var x = 6;
var y = 4;

// Addition, subtraction and multiplication operators
document.write("Addition operator result: \n", x+y);
document.write("\nSubtraction operator result: \n", x-y);
document.write("\nMultiplication operator result: \n", x*y);

// Division and modulus operatos
document.write("\nDivision operator result: \n", x/y);
document.write("\nModulus operator result: \n", x%y);

// Increment and decrement operators
var z = 5;
document.write("\nIncrement operator result: \n", z++);
document.write("\nDecrement operator result: \n", z--);

// The assignment operator
var a = 13;
var b = a;
document.write("\nValue of b is: ", b);

// Equivalent statement when working with self-assigned operators
var a1 = 51;
a1 += 9;
document.write("\nValue of a1 is: ", a1);
a1 = a1 + 9;
document.write("\nValue of a1 is: ", a1);
a1 -= 5;
document.write("\nValue of a1 is: ", a1);

a3 = 10;
a *= 5;
document.write("\nValue of a3 is: ", a3);

a4 = 15;
a4 /= 4;
document.write("\nValue of a4 is: ", a4);

a5 = 20;
a5 %= 7;
document.write("\nValue of a5 is: ", a5);


// The string operator (+)
// (+): Can be used for concatenation
var str1 = "Hello";
var str2 = "World!";
document.write("\n" + str1 + " " + str2);

var str3 = "\nWelcome";
str3 += " " + "to your new home!";
document.write(str3);



// Associativity of operators in JavaScript
var a = 12;
var b = 8;
var c = 5;
var d = 10;
var result = a + b + "hello" + c + d;
document.write("<h1>Value of result is " + result + ". Hello! <h1>");







// Conditinal operators in JavaScript
/*
  Conditinal operators are binary operators,
  they are either true of false.
*/
// Checking if a condition is true or false
var x = 60;
var y;
y = document.write("Value is \n", x > 50 ? "Greater":"Smaller");








// Logical operators
/*
  Logical operators are used to evaluate conditional statements.
  If a condition is true - a block of statement is executed
  If a condition is false - a block of statement is executed

  Three types of logical operators
  --------------------------------
  &&  => AND    - Both statements must be true to evaluate to true
  ||  => OR     - One of either statments must be true to evaluate to true
  !   => NOT    - When applied to either true or false, it reverses their values
  */





// Comparison operators
/*
  Comparison operators are used to compare statements in JavaScript

  Type of Comparison operators
  ----------------------------
  ==                Equal to
  ===               Equivalent, equal value & date type
  !=                Not equal to
  !==               Not Equivalent, not equal value or date type
  >                 Greater than
  <                 Less than
  >=                Greater than or equals to
  <=                Less than or equals to
*/
var = 10;
document.write(x == 8);
document.write("<br>");

document.write(x === 8);
document.write("<br>");

document.write(x != 8);
document.write("<br>");

document.write(x !== 8);
document.write("<br>");

document.write(x > 8);
document.write("<br>");

document.write(x >= 8);
document.write("<br>");

document.write(x < 8);
document.write("br>");

document.write(x <= 8);
document.write("<br>");






// The typeOf operator
/*
  The typeOf operator is used to access the type of a piece of data
  Don't confuse the null object type with undefined
*/
var x = 17;
var y = "Hey, hello!";
var flag = false;
var p;
var pop = null;

document.write(typeof(x));
document.write("<br>");

document.write(typeof(y));
document.write("<br>");

document.write(typeof(flag));
document.write("<br>");

document.write(typeof(p));
document.write("<br>");

document.write(typeof(pop));
document.write("<br>");






// The Bitwise operator
/*
  Bitwise operators work with operands that are 32-bit integers. These are
  numbers written in binary (base two) that have 32 digits made up of just 0s
  and 1s.

  Here are some examples:
  -----------------------
  5 is written as 00000000000000000000000000000101
  100 is written as 00000000000000000000000001100100

  They are represented by:
  ------------------------
  &   =>     AND
  |   =>     OR
  ~   =>     NOT
  ^   =>     XOR
*/
