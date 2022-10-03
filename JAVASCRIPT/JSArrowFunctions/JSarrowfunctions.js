/*
    ***** THE ARROW FUNCTION IN JAVASCRIPT *****
    --------------------------------------------

    *** FUNCTION RECAP ***
    *** DEFINING A FUNCTION ***
    ---------------------------
    - A function definition is a regular binding where the value of the binding is a function. For example, this code defines square to refer to a function that produces the square of a given number:
*/
    const square = function(x) {
        return x * x;
    }



/*
    - A function is created with an expression that starts with the KEYWORD function. Functions have a set of PARAMETERS (in this case, only x) and a body, which contains the statements that are to be executed when the function is called. The function body of a function created this way must always be wrapped in braces, even when it consists of only a single statement.

    - A function can have multiple PARAMETERS or no PARAMETERS at all. In the following example, makeNoise does not list any PARAMETER names, whereas power lists two:
*/
    const makeNoise = function() {
        console.log("Pling!");
    }

    const power = funtion(base, exponent) {
        let result = 1;
        for (let count = 0; count < exponent; count++) {
            result *= base;
        }
        return result;
    }


/*
    - Some functions produce a value, such as power and square, and some don't such as makeNoise, whose only result is a side effect. A RETURN statement determines the value the function retuns. When control comes across such a statement, it immediately jumps out of the current function and gives the returned value to the code that called the function. A RETURN keyword without an expression after it will cause the function to return UNDEFINED. Functions that don't have a return statement at all, such as makeNoise, similarly return UNDEFINED.



    ** DECLARATION NOTATION **
    --------------------------
    - There is a slightly shorter way to create a function binding. When the FUNCTION keyword is used at the start of a statement. it works differently.
*/
    function square(x) {
        return x * x;
    }

/*


    - This is a function DECLARATION. The statement defines the binding square and points it at the given function. It is slightly easier to write and doesn't require a semicolon after the function.
*/





/*
    - There's a third notation for functions, which looks very different from the others. Instead of the FUNCTION keyword, it uses an arrow (=>) made up of an equal sign and a greater-than character (not to be confused with the greater-than-equal operator, which is written >=).
*/
    const power = (base, exponent) => {
        let result = 1;
        for (let count = 0; count < exponent; count++) {
            result *= base;
        }
        return result;
    }

/*
    - The arrow comes after the list of PARAMETERS and is followed by the function's body. It expresses something like "this input (the PARAMETERS) produces this result (the body)".

    - When there is only one PARAMETER name, you can omit the parentheses around the PARAMETER list. If the body is a single expression, rather than a block in braces, that expression will be returned from the function. So, these two definitions of square do the same thing:
*/
    const square1 = (x) => {return x * x;}
    const square2 = x => x * x;

/*
    - When an ARROW function has no PARAMETERS at all, its PARAMETER list is just an empty set of parentheses.
*/
    const horn = () => {
        console.log("Toot");
    }








/*
    ***** ARROW FUNCTIONS ANOTHER LOOK *****
    ----------------------------------------
    - Arrow functions are a concise way of writing anonymous, lexically scoped functions in ECMAScript 2015 (ES6).

    - In JavaScript, functions may be anonymously defined using the "arrow" (=>) syntax, which sometimes referred to as a LAMBDA EXPRESSION due to
                                                  -----------------
    common Lisp similarities.

    - The simplest form of an ARROW FUNCTION has its arguments on the left side of => and the return value on the right side:

    item => item + 1    // function(item) {return item + 1}




    - This function can be immediately invoked by providing an argument to the expression:

    (item => item + 1)(41)

    - If an ARROW FUNCTION takes a single PARAMETER, the parentheses around that PARAMETER are optional. For example, the following expressions assign the same type of function into constant variables:

    const foo = bar => baz + 1;
    const bar = (baz) => baz + 1;

    - However, if the ARROW FUNCTION takes no PARAMETERS, or more than one PARAMETER, a new set of parentheses must encases all the arguments:

    (() => "foo")()
    ((bow, arrow) => bow + arrow)("I took an arrow", "to the knee...")


    - If the function body doesn't consist of a single expression, it must be surrounded by brackets and use an explecit RETURN statement for providing a result.

    (bar => {
        const baz = 41;
        return bar + baz;
    })(1);

    - If the ARROW FUNCTION's body consists only of an object literal, this object literal has to be enclosed in parentheses:

    (bar => ({bar: 1}))();

    - The extra parentheses indicate that the opening and closing brackets are part of the object literal, i.e. they are not delimiters of the function body.






    *** ARROW FUNCTIONS are lexically scoped; this means that their THIS Binding is bound to the context of the surrounding scope. That is to say, whatever THIS refers to can be preserved by using an arrow function.

    - Take a look at the following example. The class Cow has a method that allows for it to print out the sound it makes after 1 second.
*/
    class Cow {
        constructor() {
            this.sound = "moo";
        }

        makeSoundsLater() {
            setTimeout(() => console.log(this.sound), 1000);
        }
    }

    const betsy = new Cow();
    betsy.makeSoundsLater();

/*
    - In the makeSoundsLater() method, the THIS context refers to the current instance of the Cow object, so in the case where I call betsy.makeSoundsLater(), the THIS context referes to betsy.
                             ----------------------------------

    - By using the ARROW FUNCTION, I preserve the THIS context so that I can make reference to THIS.SOUND when it comes time to print it out, which will properly pring out "moo".




    ** ARROW FUNCTIONS may implicitly return values by simply ommitting the curly braces that traditionally wrap a function's body if their body only contains a single expression.

    const foo = x => x + 1;
    foo(1)

    - When using implicit returns, object literals must be wrapped in parentheses so that the curly braces are not mistaken for the opening of the function's body.

    const foo = () => {bar: 1}  // foo() returns UNDEFINED
    const foo =() => ({bar: 1}) // foo() returns {bar: 1}  **




    ** ARROW FUNCTIONS can behave very similar to classic functions in that you may explicitly return a value from them using the RETURN keyword; simply wrap your function's body in curly braces, and return a value:

    const foo = x => {
        return x + 1;
    }
    foo(1)  // 2        **
*/







/*
    ***** ARROW FUNCTIONS ANOTHER LOOK *****
    ----------------------------------------
    - ES6 introduced a new syntax for declaring functions called the ARROW syntax. These made declaring functions much more succint by using less verbose syntax.

    - ARROW FUNCTIONS can be identified by the 'arrow' symbol, => that gives them their name. The PARAMETERS come before the arrow and the main body of the function comes after. ARROW FUNCTIONS are always anonymous, so if you want to refer to them, you must assign them to a variable.
*/
// For example, the SQUARE function
    const square = x => x * x;



/*
    ** ARROW FUNCTIONS have a number of advantages over other ways of declaring functions: **
    A) They are much less verbose than normal function DECLARATIONS.
    B) Single PARAMETERS don't need putting into parentheses.
    c) The body of the function doesn't need placing inside a block if it's
        only one line.
    D) The RETURN keyword isn't required if the retun statement is the only
        statement in the body of the function.
    E) They don't bind their own value of THIS to the function.



    - In the SQUARE example above PARAMETER, x didn't need to go in parentheses because it's the only PARAMETER. Multiple PARAMETERS need to go inside parentheses
*/
// For example, the following function adds two numbers together:
    const add = (x, y) => x + y;



/*
    ** If the function doesn't require any parentheses, a pair of empty parentheses must go before the arrow: **
*/
    const hello = () => alert('Hello World!');



/*
    - In all the examples, the main body of the function fits onto one line, so there is no need to put inside a block or explicitly use the RETURN keyword.

    - Longer functions will still require curly braces to deliminate the body of the function and the return keyword at the end, as can be seen in this (rather simplistic) tax-calculating function:
*/
    const tax = (salary) => {
        const taxable = salary - 8000;
        const lowerRate = 0.25 * taxable;
        taxable = taxable - 20000;
        const higherRate = 0.4 * taxable;
        return lowerRate + higherRate;
    }

/*
    - As you can see, a number of the benefits are lost, once the function body becomes longer than one line.

    - ARROW FUNCTIONS make perfect candidates for short, anonymous functions, and you will encounter them often.
*/









/*
    ***** ARROW FUNCTIONS ANOTHER LOOK *****
    ----------------------------------------
    - In ES6, you can define functions using a particularly compact syntax known as "ARROW FUNCTIONS." This syntax is reminiscent of mathematical notation and uses an (=>) "arrow" to separate the function PARAMETERS from the function body. The function keyword is not used, and, since ARROW FUNCTIONS are expressions instead of statements, there is no need for a function name, either. The general form of an arrow functions is a comma-separated list of PARAMETERS in parentheses, followed by the (=>) arrow, followed by the function body in curly braces:
*/
    const sum = (x, y) => {return x + y;};


/*
    - But ARROW FUNCTIONS support an even more compact syntax. If the body of the function is a single RETURN statement, you can omit the retur keyword, the semicolon that goes with it, and the curly braces, and write the body of the function as the expression whose value is to be returned.
*/
    const sum = (x, y) => x + y;


/*
    - Furthermore, if an arrow function has exactly one PARAMETER, you can omit the parentheses around the PARAMETER list:
*/
    const polynomial = x => x*x + 2*x + 3;


/*
    - Note, however, that an ARROW FUNCTION with no arguments at all must be written with an empty pair of parentheses:
*/
    const constantFun = () => 42;


/*
    - Note that, when writing an ARROW FUNCTION, you must not put a new line between the function PARAMETERS and the (=>) arrow. Otherwise, you could end up with a line like const polynomial = x, which is a syntactically valid assignment statement on its own.

    - Also, if the body of your ARROW FUNCTION is a single RETURN statement but the expression to be returned is an object literal, then you have to put the object literal inside parentheses to avoid syntactic ambiguity between the curly braces of a function body and the curly braces of an object literal.
*/
    const f = x => { return {value: x}; };  // Good: f() returns an object
    const g = x => ({value: x});            // Good g() returns an object
    const h = x => { value: x};             // Bad: h() returns nothing
    const i = x => { v: x, W: x};           // Bad: Syntax Error
