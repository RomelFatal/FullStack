// Control statements in JavaScript
/*
  There are two types of control statements in JavaScript
  1) Conditional statements
  2) Iterative statements or loops
*/


/*
  1) Conditional statements
  -------------------------
  Conditional statements are based on carried out based on meeting certain
  conditions in a program. These statements can be implemented using the
  IF-ELSE or SWITCH keywords


  A) IF-ELSE
  -----------
if (condition) {
  code to run if condition is true
}

if (condition) {
  code to run if condition is true
} else {
  code to run if condition is false
}

ALSO - Can use a shorthand method or the Ternary Operator
condition ? (code to run if condition is true) : (code to run if condition is false)


if (condition) {
  code to run if condition is true
} else if {
  do something else
} else {
  code to run if condition is false
}



B) SWITCH condition
-------------------
switch (expression to check) {
  case expression 1:
    code to run
  break;
  case expression 2:
    code to run
  break;

  default:
}
*/

//Example 1
var x = 10;
if (x < 10) {
  document.write("The value of x is less than 10");
} else if (x = 10) {
  document.write("The value of x is equal to 10");
} else {
  document.write("The value of x is greater than 10");
}


//Example 2
var x = 5;
if (x % 2 == 0) {
  document.write("Even number");
} else {
  document.write("Odd number");
}


//Example 3
var y = 8;
if (y > 0) {
  document.write("Positive number");
} else if (y < 0) {
  document.write("Negative number");
} else {
  document.write("Zero");
}


//Example 4
var x = 10;
if (x > 0) {
  if (x % 2 == 0) {
    document.write("Positive and even number");
  } else {
    document.write("Positive and odd number");
  }
} else if (x < 0) {
  if (x % 2 == 0) {
    document.write("Negative and even number");
  } else {
    document.write("Negative and odd number");
  }
} else {
  document.write("Number is zero");
}
/*----------------------------------------------------------------------------*/








/*
  2) Iterative statements or loops
  --------------------------------
  An Iterative statement or loop is a control structure that causes
  a statement or group of statements to repeat.
  Another word - loops will repeat a piece of code over and over again
  according to certian conditions


  There are four types of loops in JavaScript
  -------------------------------------------
  1) FOR        loops
for (initialization; condition; after) {
  do something
}


  2) WHILE      loops
while (condition) {
  do something
}


  3) DO WHILE   loops
do {
  do something
} while (condition)


  4) FOR EACH     loops
*/


//Example 1
let bottles = 10;
while (bottle > 0) {
  console.log("There are ${bottles} remain");
  bottles--;
}


//Example 2
let bottles = 10;
do {
  console.log ("There were ${bottles} green bottles, hanging on there");
  bottles--
} while (bottles > 0)


//Example 3
for (let bottles = 10; bottles > 0; bottles--) {
  console.log("There were ${bottles} green bottles, hanging there.")
}
