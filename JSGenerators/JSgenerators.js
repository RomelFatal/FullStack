/*
    ***** GENERATORS IN JAVASCRIPT *****
    ------------------------------------
    - GENERATOR functions (defined by the FUNCTION* KEYWORD) runs as
        coroutines, generating a series of values as they're requested through an iterator.

    - A GENERATOR function is created with a function* declaration. When it is
        called, its body is NOT immediately executed. Instead, it returns a GENERATOR OBJECT, which can be used to "STEP THROUGH" the function's execution.

    - A yield expression inside the function body defines a point at which
        execution can SUSPEND and RESUME.
*/
    function* nums() {
        console.log('starting');    //A
        yield 1:    //B
        console.log('yielded 1');   //C
        yield 2;    //D
        console.log('yielded 2');   //E
        yield 3;    //F
        console.log('yielded 3');   //G
    }

    var generator = nums(); //Returns the iterator. No code in nums is executed
    generator.next();   //Executes lines A,B returning {value: 1, done: false}
    //console: "starting"
    generator.next();   //Executes lines C,D returning {value: 2, done: false}
    //console: "yielded 1"
    generator.next();   //Executes lines E,F returning {value: 3, done: false}
    //console: "yielded 2"
    generator.next(); //Executes line G returning {value: undefined, done: true}
    //console: "yielded 3"


    /* ** THROWING AN ERROR TO GENERATOR FUNCTION ** */
    function* nums() {
        try {
            yield 1;    //A
            yield 2;    //B
            yield 3;    //C
        } catch(e) {
            console.log(e.message); //D
        }
    }

/*
    - A GENERATOR is ITERABLE. It can be looped over with a FOR ... OF
        statement, and used in other constructs when depend on the iteration protocol.
*/
    function* range(n) {
        for (let i = 0; i < n; i++) {
            yield i;
        }
    }

    // Looping
    for (let n of range(10)) {
        // n takes on the values 0, 1, ... 9
    }

    // spread operator
    let nums = [...range(3)];   //[0, 1, 2]
    let max = Math.max(...range(100));  //99


/*
    Another example of use GENERATOR to custom iterable object in ES6. Here anonymouse GENERATOR function function* used.
*/
    let user = {
        name: "sam", totalReplies: 17, isBlocked: false
    };

    user[Symbol.iterator] = function*() {
        let properties = Object.keys(this);
        let count = 0;
        let isDone = false;

        for (let p of properties) {
            yield this[p];
        }
    };

    for (let p of user) {
        console.log(p);
    }












/*
    ***** GENERATORS ANOTHER LOOK *****
    -----------------------------------
    - ES6 introduced support for GENERATORS. These are special functions used
        to produce iterators that maintain the state of a value.

    - To define a GENERATOR function, an asterisk symbol (*) is placed after
        the function declaration, like so:

        function* exampleGenerator() {
            // code for the generator goes here
        }


    - Calling a GENERATOR function doesn't actually run any of the code in the
        function; it returns a GENERATOR OBJECT that can be used to create an iterator that implement a NEXT() method that returns a value every time the NEXT() method is called.


    - For example, we can create a GENERATOR to produce a Fibonacci-style
        number series (a sequence that starts with two numbers and the next number is obtained by adding the two previous numbers together), using the following code:
*/
    function* fibonacci(a, b) {
        let [prev, current] = [a,b];
        while (true) {
            [prev, current] = [current, prev + current];
            yield current;
        }
    }


/*
    - GENERATOR functions employ the special YIELD KEYWORD that is used to
        return a value. The difference between the YIELD and the RETURN KEYWORDS is that by using YIELD, the state of the value returned is remembered the next time YIELD is called. Hence, the current value in the Fibonacci sequence will be stored for use later. The execution of the loop is paused after every YIELD statement, until the NEXT() method is called again.

    - To create a GENERATOR OBJECT based on this function, we simply assign a
        variable to the function, and provide it with two starting numbers as arguments:
*/
    const sequence = fibonacci(1,1);

/*
    - The GENERATOR OBJECT is now stored in the SEQUENCE variable. It inherits
        a method called NEXT(), which is then used to obtain the next value produced by the YIELD command:
*/
    sequence.next();    // 2
    sequence.next();    // 3
    sequence.next();    // 5

/*
    - It's also possible to iterate over the GENERATOR to invoke it multiple
        times:
*/
    for (n of sequence) {
        // stop the sequence after it reaches 100
        if (n > 10) break;
        console.log(n);
    }
    // 8, 13, 21, 34, 55, 89

/*
    - Note that the sequence continued from the last value produced using the
        NEXT() method. This is because a GENERATOR will maintain its state throughout the life of a program.
*/










/*  ***** GENERATORS ANOTHER LOOK *****
    -----------------------------------
    - The ability of functions to be paused and then resumed again is not
        exclusive to ASYNC FUNCTIONS. JavaScript also has a feature called GENERATOR FUNCTIONS. These are similar, but without the promises.

    - When you define a function with FUNCTION* (placing an asterisk after the
        word FUNCTION), it becomes a GENERATOR. When you call a GENERATOR, it returns an ITERATOR.
*/
    function* powers(n) {
        for (let current = n; current *= n) {
            yield current;
        }
    }

    for (let power of powers(3)) {
        if (power > 50) break;
        console.log(power);
    }
    // 3, 9, 27

/*
    - Initially, when you call POWERS, the function is frozen at its start.
        Every time you call NEXT on the ITERATOR, the function runs until it hits a YIELD expression, which pauses it and causes the yielded value to become the next value produce by the iterator. When the function returns (the one in the example never does), the iterator is done.
*/










/*
    ***** GENERATORS ANOTHER LOOK *****
    -----------------------------------
    - A GENERATOR is a kind of ITERATOR defined with powerful new ES6 syntax;
        it's particularly useful when the values to be iterated are not the elements of a data structure, but the result of a computation.

    - To create a GENERATOR, you must first define a GENERATOR FUNCTION. A
        GENERATOR FUNCTION is syntactically like a regular JavaScript function but is defined with the KEYWORD FUNCTION* rather than FUNCTION. (Technically, this is not a new KEYWORD, just a * after the KEYWORD FUNCTION and before the function name). When you invoke a generator function, it does not actually execute the function body, but instead returns a GENERATOR OBJECT. This GENERATOR OBJECT is an ITERATOR. Calling its NEXT() method causes the body of the generator function to run from the start (or whatever its current position is) until it reaches a YIELD statement. YIELD is new in ES6 and is something like a RETURN statement. The value of the YIELD statement becomes the value returned by the NEXT() call on the ITERATOR.
*/
    //Example
    //A generator function that yields the set of one digit (base-10) primes.
    function* oneDigitPrimes() {// Invoking this function does not run the code
        yield 2;                // but just returns a generator object. Calling
        yield 3;                // the next() method of that generator runs
        yield 5;                // the code until a yield statement provides
        yield 7;                // the return value for the next() method.
    }

    // When we invoke the generator function, we get a GENERATOR
    let primes = oneDigitPrimes();

    // A GENERATOR is an ITERATOR OBJECT that iterates the yielded values
    primes.next().value     // => 2
    primes.next().value     // => 3
    primes.next().value     // => 5
    primes.next().value     // => 7
    primes.next().done     // => true

    // GENERATORS have a Symbol.iterator method to make them ITERABLE
    primes[Symbol.iterator]()       // => primes

    // We can use GENERATORS like other ITERABLE types
    [...oneDigitPrimes()]                // => [2,3,5,7]
    let sum = 0;
    for (let prime of oneDigitPrimes())
    sum += prime;
    sum;                                // => 17

/*
    - In this example, we used a function* statement to define a GENERATOR.
        Like regular functions, however, we can also define GENERATORS in expression form. Once again, we just put an asterisk after the function KEYWORD:
*/
    const seq = function*(from,to) {
        for (let i = from; i <= to; i++)
        yield i;
    };
    [...seq(3,5)]       // => [3, 4, 5]


/*
    - In classes and object literals, we can use shorthand notation to omit the
        FUNCTION KEYWORD entirely when we define methods. To define a GENERATOR in this context, we simply use an asterisk before the method name where the FUNCTION KEYWORD would have been, had we used it:
*/
    let o = {
        x: 1, y: 2, z: 3,
        // A generator that yields each of the keys of this object
        *g() {
            for (let key of Object.keys(this)) {
                yield key;
            }
        }
    };
    [...o.g()]  // => ["x", "y", "z", "g"]

/*
    - Note that there is no way to write a generator function using arrow
        function syntax.

    - GENERATORS often make it particularly easy to define iterable classes. We
        can replace the [Symbol.iterator]() method with a much shorter *[Symbol.iterator&rbrack;() generator function that looks like this:
*/
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }


/*
    ** GENERATOR EXAMPLES **
    ------------------------
    - GENERATORS are more interesting if they actually GENERATE the values they
        yield by doing some kind of computation. Here, for example, is a generator function that yields Fibonacci numbers:
*/
    function* fibonacciSequene() {
        let x = 0, y = 1;
        for(;;) {
            yield y;
            [x, y] = [y, x + y];    // Note: destrcuturing assignment
        }
    }


/*
    - Note that the fibonacciSequene() generator function here has an infinite
        loop and yields values forever without returning. If this generator is used with the ... SPREAD OPERATOR, it will loop until memory is exhausted and the program crashes. With care, it is possible to use it in a FOR/OF loop, however:
*/
    // Return the nth Fibonacci number
    function fibonacci(n) {
        for (let f of fibonacciSequene()) {
            if (n-- <= 0) return f;
        }
    }
    fibonacci(20)       // => 10946

/*
    - This kind of infinite generator becomes more useful with a TAKE()
        generator like this:
*/
    // Yield the first n elements of the specified iterable object
    function* take(n, iterable) {
        let it = iterable[Symbol.iterator](); //Get iterator for iterable object
        while(n-- > 0) {            //Loop n times: get the next item from it
            let next = it.next();   //Get the next item from iterator.
            if (next.done) return;  //If there are no more values, return early
            else yield next.value;  //otherwise, yield the value
        }
    }

    // An array of the first 5 Fibonacci numbers
    [...take(5, fibonacciSequene())]    // => [1, 1, 2, 3, 5]

/*
    - Here is another useful generator function that interleaves the elements
        of multiple iterable objects:
*/
    //Given an array of iterables, yield their elements in interleaved order.
    function* zip(...iterables) {
        //Get an iterator for each iterable
        let iterators = iterables.map(i => i[Symbol.iterator]());
        let index = 0;
        while(iterators.length > 0) {     //While there are still some iterators
            if(index >= iterators.length) {   //If we reached the last iterator
                index = 0;
            }
            let item=iterators[index].next();//Get next item from next iterator.
            if(item.done) {                  //If that iterator is done
                iterators.splice(index, 1); //then move it from the array.
            }
            else {                          //Otherwise,
                yield item.value;           //yield the iterated value
                index++;                    //and move on to the next iterator.
            }
        }
    }

    // Interleave three iterable objects
    [...zip(oneDigitPrimes(), "ab", [0])]       // => [2,"a",0,3,"b",5,7]
