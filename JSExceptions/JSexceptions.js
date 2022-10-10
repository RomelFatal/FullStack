/*
    ***** EXCEPTION HANDLING IN JAVASCRIPT *****
    ---------------------------------------------
    - An EXCEPTION is a signal that indicates that some sort of exceptional
        condition or error has occured.
    - To THROW an exception is to signal such an error or exceptional condition.
    - To CATCH an exception is to handle it--to take whatever actions are
        necessary or appropriate to recover from the exception.
    - In JavaScript, exceptions are thrown whenever a runtime error occurs and
        whenever the program explicitly throws one using the THROW statement. Exceptions are caught with the TRY/CATCH/FINALLY statement.


    - The THROW statement has the following syntax:
        * THROW expression;

    - Expression may evaluate to a value of any type. You might throw a number
        that presents an error code or a string that contains a human-readable error message. The ERROR class and its subclasses are used when the JavaScript interpreter itself throws an error, and you can use them as well.
    - An ERROR object has a name property that specifies the type of error and
        a MESSAGE property that holds the string passed to the constructor function.
*/
    //Example function that throws an ERROR object when invoked with an
    //invalid argument
    function factoria(x) {
        // If the input argument is invalid, throw and exception!
        if (x < 0) throw new Error("x must not be negative");

        // Otherwise, compute a value and return normally
        let f;
        for (f = 1; x > 1; f *= x, x--) /* empty */ ;
        return f;
    }
    factoria(4)     // => 24


/*
    - When an exception is thrown, the JavaScript interpreter immediately stops
        normal program execution and jumps to the nearest exception handler. Exception handlers are written using the CATCH clause of the TRY/CATCH/FINALLY statement.
    - If the block of code in which the exception was thrown does not have an
        associated CATCH clause, the interpreter checks the next-highest enclosing blcok of code to see if it has an exception handler associated with it. This continues until a handler is found.
    - If an exception is thrown in a function that does not contain a
        TRYCATCH/FINALLY statement to handle it, the exception propagates up to the code that invoked the function. In this way, exceptions propagate up through the lexical structure of JavaScript methods and up the call stack.
    - If no exception handler is ever found, the exception is treated as an
        error and is reported to the user.




    *** TRY/CATCH/FINALLY ***
    -------------------------
    - The TRY/CATCH/FINALLY statement is JavaScript's exception handling
        mechanism. The TRY clause of this statment simply defines the block of code whose exceptions are to be handled.
    - The TRY block is followed by a CATCH clause, which is a block of statments
        that are invoked when an exception occurs anywhere within the TRY block. The CATCH clause is followed by a FINALLY block containing cleanup code that is guaranteed to be executed, regardless of what happens in the TRY block.
    - Both the CATCH and FINALLY blocks are option, but a TRY block must be
        accompanied by at least one of these blocks. The TRY, CATCH, and FINALLY blocks all begin and end with curly braces. These braces are a required part of the syntax and cannt be omitted, even if a clause contains only a single statement.


    - The following code illustrates the syntax and purpose of the TRY/CATCH/FINALLY statment:
*/
    try {
        // Normally, this code runs from the top of the block to the bottom
        // without problems. But it can sometimes throw an exception,
        // either directly, with a throw statement, or indirectly, by calling
        // a method that throws an exception.
    } catch(e) {
        // The statements in this block are executed if, and only if, the try
        //block throws an exception. These statements can use the local variable
        // e to refer to the Error object or other value that was thrown.
        // This block may handle the exception somehow, may ignore the
        // exception by doing nothing, or may rethrow the exception with throw.
    } finally {
        //This block contains statements that are always executed, regardless of
        // what happens in the try block. They are executed whether the try
        // block terminates:
        //  1) normally, after reaching the bottom of the block
        //  2) because of a break, continue, or return statement
        //  3) with an exception that is handled by a catch clause above
        //  4) with an uncaught exception that is still propagating
    }

/*
    - Note that the CATCH keyword is generally followed by an identifier in
        parentheses. This identifier is like a function parameter. When an exception is caught, the value associated with the exception (an Error object, for example) is assigned to this parameter. The identifier associated with a CATCH cluase has block scope--it is only defined within the CATCH block.


    - Here is a realistic example of the TRY/CATCH statement. It uses the
        factorial() method defined in the previous section and the client-side JavaScript methods prompt() and alert() for input and output:
*/
    try {
        // Ask the user to enter a number
        let n = Number(prompt("Please enter a positive integer", ""));
        // Compute the factorial of the number, assuming the input is valid
        let f = factorial(n);
        // Display the result
        alert(n + "! = " + f);
    } catch(ex) {   // If the user's input was not valid, we end up here
        alert(ex)   // Tell the user what the error is
    }


/*
    - This example is a TRY/CATCH statement with no FINALLY clause. Although
        FINALLY is not used as often as CATCH, it can be useful. However, its behavior requires additional explanation. The FINALLY clause is guaranteed to be executed if any portion of the TRY block is executed, regardless of how the code in the TRY block completes. It is generally used to clean up after the code in the TRY clause.

    - In the normal case, the JavaScript interpreter reaches the end of the TRY
        block and then proceeds to the FINALLY block, which performs any necessary cleanup. If the interpreter left the TRY block because of a RETURN, CONTINUE, or BREAK statement, the FINALLY block is executed before the interpreter jumps to its new destination.

    - If an exception occurs in the TRY block and there is an associated CATCH
        block to handle the exception, the interpreter first executes the CATCH block and then the FINALLY block. If there is no local CATCH block to handle the exception, the interpreter first executes the FINALLY block and then jumps to the nearest containing CATCH clause.

    - If a FINALLY block itself causes a jump with a RETURN, CONTINUE, BREAK, or
        THROW statement, or by calling a method that throws an exception, the interpreter abandons whatever jump was pending and performs the new jump.
    - For example, if a FINALLY clause throws an exception, that exception
        replaces any exception that was in the process of being thrown. If a FINALLY clause issues a RETURN statement, the method returns normally, even if an exception has been thrown and has not yet been handled.


    - TRY and FINALLY can be used together without a CATCH clause. In this case,
        the FINALLY block is simply cleanup code that is guaranteed to be executed, regardless of what happens in the TRY block.
*/











/*
    ***** EXCEPTION HANDLING ANOTHER LOOK *****
    -------------------------------------------
    - When a function cannot proceed normally, what we would like to do is just
        stop what we are doing and immediately jump to a place that knows how to handle the problem. This is what EXCEPTION HANDLING does.
                                            ------------------

    - Exceptions are a mechanism that makes it possible for code that runs into
        a problem to raise (or throw) an exception. An exception can be any value. Raising one somewhat resembles a super-charged return from a function: it jumps out of not just the current function but also its callers, all the way down to the first call that started the current execution. This is called UNWINDING THE STACK. An exception zooms down this stack, throwing away all the call contexts it encounters.

    - If exceptions always zoomed right down to the bottom of the stack, they
        would not be of much use. They'd just provide a novel way to blow up your program. Their power lies in the fact that you can set "obstacles" along the stack to catch the exception as it is zooming down. Once you've caught an exception, you can do something with it to address the problem and then continue to run the program.
*/
    function promptDirection(question) {
        let result = prompt(question);
        if (result.toLowerCase() == "left") return "L";
        if (result.toLowerCase() == "right") return "R";
        throw new Error("Invalid direction: " result);
    }

    function look() {
        if (promptDirection("Which way?") == "L") {
            return "a house";
        } else {
            return "two angry bears";
        }
    }

    try {
        console.log("You see", look());
    } catch(error) {
        console.log("Something went wrong: " + error);
    }

/*
    - The THROW keyword is used to raise an exception. Catching one is done by
        wrapping a piece of code in a TRY block, followed by the keyword CATCH. When the code in the TRY block causes an exception to be raised, the CATCH block is evaluated, with the name in parentheses bound to the exception value. After the CATCH block finishes--or if the TRY block finishes without problems--the program proceeds beneath the entire TRY/CATCH statement.
    - In this case, we used the Error constructor to create our exception value.
        This is a standard JavaScript constructor that creates an object with a message property. In most JavaScript environments, instances of this constructor also gather information about the call stack that existed when the exception was created, a SO-CALLED STACK TRACE. This information is stored in the stack property and can be helpful when trying to debug a problem: it tells us the function where the problem occurred and which functions made the failing call.

    - Note that the look function completely ignores the possibility that
        promptDirection might go wrong. This is the big advantage of exception: ERROR-HANDLING code is necessary only at the point where the error occurs and at the point where it is handled. The functions in between can forget all about it.




    ** CLEANING UP AFTER EXCEPTIONS **
    ----------------------------------
    - The effect of an exception is another kind of control flow. Every action
        that might cause an exception, which is pretty much every function call and property access, might cause control to suddenly leave your code.
    - This means when code has several side effects, even if its "regurl"
        control flow looks like they'll always all happen, an exception might prevent some of them from taking place.
*/
    //Example of bad banking code:
    const accounts = {
        a: 100,
        b: 0,
        c: 20
    };

    function getAccount() {
        let accountName = prompt("Enter an account name");
        if (!accounts.hasOwnProperty(accountName)) {
            throw new Error(`No such account: ${accountName}`);
        }
        return accountName;
    }

    function transfer(from, amount) {
        if (accounts[from] < amount) return;
        accounts[from] -= amount;
        accounts[getAccount()] += amount;
    }


/*
    - The transfer function transfers a sum of money from a given account to
        another, asking for the name of the other account in the process. If given an invalid account name, getAccount throws an exception.
    - But transfer first removes the money from the account and then calls
        getAccount before it adds it to another account. If it is broken off by an exception at that point, it'll just make the money disappear.
    - That code could have been written a little more intelligently, for
        example by calling getAccount before it starts moving money around. But often problems like this occur in more subtle ways. Even functions that don't look like they will throw an exception might do so in exceptional circumstances or when they contain a programmer mistake.
    - One way to address this is to use fewer side effects. Again, a
        programming style that computes new values instead of changing existing data helps. If a piece of code stops running in the middle of creating a new value, no one ever sees the half-finished value, and there is no problem.
    - But that isn't always practical. So there is another feature that TRY
        statements have. They may be followed by a FINALLY block either instead of or in addition to a CATCH block.

        A FINALLY blocks says "no matter what happens, run this code after trying to run the code in the TRY block."
*/
    function transfer(from, amount) {
        if (accounts[from] < amount) return;
        let progress = 0;
        try {
            accounts[from] -= amount;
            progress = 1;
            accounts[getAccount()] += amount;
            progress = 2;
        } finally {
            if (progress == 1) {
                accounts[from] += amount;
            }
        }
    }

/*
    - This version of the function tracks its progress, and if, when leaving, it
        notices that it was aborted at a point where it had created an inconsistent program state, it repairs the damage it did.
    - Note that even though the FINALLY code is run when an exception is thrown
        in the TRY block, it does not interfere with the exception. After the FINALLY block runs, the stack continues unwinding.
*/









/*
    ***** EXCEPTION HANDLING ANOTHER LOOK *****
    -------------------------------------------
    - An exception is an error that produces a return value that can then be
        used by the program to deal with the error. For example, trying to call a method that is nonexistent will result in a reference error that raises an exception.

    - When an exception occurs, the program terminates with an error message.
        This is ideal in development as it allows us to identify and fix errors. In production, however, it will appear as if the program has crashed, which does not reflect well on a ninja programmer.

    - It is possible to handle exceptions gracefully by catching the error. Any
        errors can be hidden from users, but still identified. We can then deal with the error appropriately--perhaps even ignore it-- and keep the program running.



    *** TRY, CATCH, AND FINALLY ***
    -------------------------------
    - If we suspect a piece of code will result in an exception, we can wrap it
        in a TRY block. This will run the code inside the block as normal, but if an exception occurs it will pass the error object that is thrown onto a CATCH block.
*/
    //Example using SQUAREROOT() function:
    function imaginarySquareRoot(number) {
        'use strict';
        try {
            return String(squareRoot(number));
        } catch(error) {
            return squareRoot(-number) + 'i';
        }
    }

/*
    - The code inside the CATCH block will only run if an exception is thrown
        inside the TRY block. The error object is automatically passed as a parameter to the CATCH block. This allows us to query the error name, message and stack properties, and deal with it appropriately. In this case, we actually return a string representation of an imaginary number:

    - A FINALLY block can be added after a CATCH block. This will always be
        executed after the TRY or CATCH block, regardless of whether an exception occurred or not. It is useful if you want some code to run in both cases. We can use this to modify the imaginarySquareRoot() function so that it adds "+ or -" to the answer before returning it:
*/
    function imaginarySquareRoot(number) {
        'use strict';
        let answer;
        try {
            answer = String(squareRoot(number));
        } catch(error) {
            answer = squareRoot(-number) + "i";
        } finally {
            return `+ or - ${answer}`;
        }
    }
