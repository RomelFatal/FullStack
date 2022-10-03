/*
    ***** PROMISES IN JAVASCRIPT *****
------------------------------------------
    - A Promise object represents an operation which has produced or will eventually produce a value. Promises provide a robust way to wrap the (possibly pending) result of ASYNCHRONOUS work, mitigating the problem of deeply nested CALLBACKS (known as "CALLBACK HELL").

    - A promise is an object that encapsulates the result of an ASYNCHRONOUS OPERATION.
    - A promise object has a state that can be one of the following:

    *****       A) PENDING
                B) FULFILLED WITH A VALUE
                C) REJECTED FOR A REASON
                                            *****
    ----------------------------------------------


    ***** PENDING *****
    -------------------
    - The underlying operation has not yet completed, and the promise is PENDING fulfillment

    ***** FULFILLED *****
    ---------------------
    - The operation has finished, and the promise is fulfilled with a value. This is analogous to returning a value from a SYNCHRONOUS functions.

    ***** REJECTED *****
    --------------------
    - An error has occurred during the operation, and the promise is rejected with a reason. This is analogous to throwing an error in a SYNCHRONOUS function.


    - In the beginning, the state of a promise is pending, indicating that the ASYNCHRONOUS operation is in progress. Depending on the result of the ASYNCHRONOUS operation, the state changes to either fulfilled or rejected.


    - A promise is said to be SETTLED (OR RESOLVED) when it is either fulfilled or rejected. Once a promise is SETTLED, it becomes immutable, and its state cannot change. The THEN and CATCH methods of a promise can be used to attach CALLBACKS that execute when it is SETTLED. These CALLBACKS  are invoked with the fulfillment value and rejection reason, respectively.
*/

// Example of PROMISES
var prom = new Promise(function(resolve, reject) {
    var drive = true;
    if(drive) {
        resolve("Yes");
    } else {
        reject("No");
    }
})

prom.then(function(resolve) {
    console.log(resolve + " the user knows how to drive.");
}).catch(function(reject) {
    console.log(reject + " the user does not know how to drive.");
})



// More PROMISES examples
var functions = function() {
    return new Promise(function(resolve, reject) {
        resolve(" Learnt functions ");
    });
};

var callback = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + " Learnt Callback functions. ");
    });
};

var promises = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + " Good to go for Promises in JavaScript. ");
    });
};


functions().then(function(result) {
    return callback(result);
}).then(function(result) {
    return promises(result);
}).then(funciton(result) {
    console.log("good to go: " + result);
})








/*
    ***** PROMISES ANOTHER LOOK *****
    ---------------------------------
    - A promise represents the future result of an ASYNCHRONOUS operation.
    - Promises don't do anything that can't already be achieved using CALLBACKS, but they help simplify the process, and avoid the convoluted code that can result from using multiple CALLBACKS.

    *** The Promise Life Cycle ***
    ------------------------------
    - When a promise is created, it calls an ASYNCHRONOUS operation and is then said to be PENDING. It remains in this while the operation is taking place. At this stage, the promise is said to be UNSETTLED. Once the operation has completed, the promise is said to have been SETTLED. A settled promise can result in two different outcomes:

    ** RESOLVED **
    --------------
    - The ASYNCHRONOUS operation was completed successfully.

    ** REJECTED ***
    ---------------
    - The ASYNCHRONOUS operation didn't work as expected, wasn't successfully completed or resulted in an error.




    - A promise is created using a constructor function. This takes a function called an EXECUTOR as an argument. The executor initializes the promise and starts the ASYNCHRONOUS operation. It also accepts two functions as argument: the RESOLVE() function is called if the operation is successful, and the REJECT() function is called if the operation fails. The general layout of a promise can be seen in the code below:
*/
const promise = new Promise((resolve, reject) => {
    // Initialization code goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});

// Example of a promise that uses the a dice object
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

const promise = new Promise((resolve, reject) => {
    const n = dice.roll();
    setTimeout(() => {
        (n > 1) ? resolve(n) : reject(n);
    }, n * 1000);
});



/*
    ***** Dealing With A Settled Promise *****
    ------------------------------------------
    - Once a promise has been SETTLED, the THEN() method can be used to deal with the outcomes. This method accepts two arguments.
    - The first is a FULFILMENT FUNCTION that's called when the promise is resolved.

    - Any data returned from the RESOLVE() function will be passed along to this function. The second argument is a rejection function that's called if the promise is rejected. Similar to the fulfilment function, the rejection function receives any data returned from the REJECT() function.

    - In the case of the dice example, both functions will receive the value of the number rolled.
*/
promise.then(result => console.log(`Yes! I rolled a ${result}`);


/*
    - The first argument is simply a function that logs a celebratory message to the console, stating the number rolled (this is passed to the THEN() method as the variable RESULT). The second argument logs an annoyed message and, again, states the number rolled.

    - Alternatively, the CATCH() method can be used to specify what to do if the operation fails instead:
*/
promise.catch(result => console.log(`Drat! ... I rolled a ${result}`);


/*
    - The THEN() and CATCH() methods can be chained together to form a succinct description of how to deal with the outcome of the promise:
*/
promise.then(result => console.log(`I rolled a ${result}`))
        .catch(result => console.log(`Drat! ... I rolled a ${result}`))


const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

console.log("Before the roll");

const roll = new Promise((resolve, reject) => {
    const n = dice.roll();
    if(n > 1) {
        setTimeout(() => {resolve(n)}, n * 200);
    } else {
        setTimeout(() => reject(n), n * 200);
    }
});

roll.then(result => console.log(`I rolled a ${result}`))
.catch(result => console.log(`Drat! ... I rolled a ${result}`));

console.log('After the roll');



/*
    ***** Chaining Multiple Promises *****
    --------------------------------------
    - Promises come into their own when multiple ASYNCHRONOUS tasks are required to be carried out one after the other. If each function that performs an ASYNCHRONOUS operation returns a promise, we can chain the THEN() methods together to form a sequential piece of code that's easy to read. Each promise will only begin once the previous promise has been settled.
*/
login(userName)
.then(user => getPlayerInfo(user.id))
.then(info => loadGame(info))
.catch(throw error)








/*  ***** PROMISES ANOTHER LOOK *****
    ---------------------------------
    - Working with abstract concepts is often easier when those concepts can be represented by values. In the case of ASYNCHRONOUS actions, you could, instead of arranging for a function to be called at some point in the future, return an object that represents this future event.

    - This is what the standard class PROMISE is for.
    - A PROMISE is an ASYNCHRONOUS action that may complete at some point and produce a value. It is able to notify anyone who is interested when its value is available.

    - The easiest way to create a promise is by calling PROMISE.RESOLVE. This function ensures that the value you give it is wrapped in a promise. If it's already a promise, it is simply returned-otherwise, you get a new promise that immediately finishes with your value as its result.
*/
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));


/*
    - To get the result of a promise, you can use its THEN method. This registers a CALLBACK function to be called when the promise resolves and produces a value. You can add multiple CALLBACKS to a single promise, and they will be called, even if you add them after the promise has already RESOLVED(finished).

    - But that's not all the THEN method does. It returns another promise, which resolves to the value that the handler function returns or, if that returns a promise, waits for that promise and then resolves to its result.

    - It is useful to think of promises as a device to move values into an ASYNCHRONOUS reality. A normal value is simply there. A promised value is a value that might already be there or might appear at some point in the future. Computations defined in terms of promises act on such wrapped values and are executed ASYNCHRONOUSLY as the values become available.

    - To create a promise, you can use Promise as a constructor. It has a somewhat odd interface-the constructor expects a function as argument, which it immediately calls, passing it a function that it can use to resolve the promise. It works this way, instead of for example with a RESOLVE method, so that onyl the code that created the promise can resolve it.
*/

// Create a promise-based interface for the readStorage function:
function storage(nest, name) {
    return new Promise(resolve => {
        nest.readStorage(name, result => resolve(result));
    });
}

storage(bigOak, "enemies")
    .then(value => console.log("Got", value));







/*  ***** PROMISES ANOTHER LOOK *****
    ---------------------------------
    - A PROMISE is an object that represents the result of an ASYNCHRONOUS computation. That result may or may not be ready yet, and the Promise API is intentionally vague about this: there is no way to SYNCHRONOUSLY get the value of a Promise, you can only ask the Promise to call a CALLBACK function when the value is ready.

    = If you are definig an ASYNCHRONOUS API like the getText() function, but want to make it Promise-based, omit the CALLBACK argument, and instead return a Promise object. The caller can then register one or more CALLBACKS on this Promise object, and they will be invoked when the ASYNCHRONOUS computation is done.

    - So, at the simplest level, Promises are just a different way of working with CALLBACKS. However, there are practical benefits to using them. One real problem with CALLBACK-BASED ASYNCHRONOUS PROGRAMMING is that it is common to end up with CALLBACKS inside CALLBACKS inside CALLBACKS with lines of code so highly indented that it is difficult to read.

    - Promises allow this kind of nested CALLBACK to be re-expressed as a more linear PROMISE CHAIN that tends to be easier to read and easier to reason about.



    - Another problem with CALLBACKS is that they can make handling errors difficult. If an ASYNCHRONOUS function (or an ASYNCHRONOUSLY invoked CALLBACK) throws an exception, there is no way for that exception to propagate back to the initiator of the ASYNCHRONOUS operation. This is fundamental fact about ASYNCHRONOUS PROGRAMMING: it breaks exception handling. The alternative is to meticulously track and propagate errors with CALLBACK arguments and return values, but this is tedious and difficult to get right.

    - Promises help here by standardizing a way to handle erros and providing a way for errors to propagate correctly through a chain of promises.



    ** Note that Promises represent the future results of single ASYNCHRONOUS computations. They cannot be used to represent REPEATED ASYNCHRONOUS computations, however. **

    - We can write a Promise-Based alternative to the setTimeout() function, for example. But we can't use Promises to replace setInterval() becuase that function invokes a CALLBACK function repeatedly, which is something that Promises are just not designed to do.
*/
