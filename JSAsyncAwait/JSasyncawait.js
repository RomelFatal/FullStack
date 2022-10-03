/*  ***** ASYNCHRONOUS IN JAVASCRIPT *****
    --------------------------------------
    - Some computer programs, such scientific simulations and machine learning
        models, are compute-bound: they run continuously, without pause, until they have computed their result. Most real-world computer programs, however, are significantly ASYNCHRONOUS.
    - This means that they often have to stop computing while waiting for data
        to arrive or for some event to occur.
    - JavaScript programs in a web browser are typically EVENT-DRIVEN, meaning
        that they wait for the user to click or tap before they actually do anything. And JavaScript-based servers typically wait for client requests to arrive over the network before they do anything.


    - This kind of ASYNCHRONOUS programming is commonplace in JavaScript.
        Promises, new in ES6, are objects that represent the not-yet-available result of an ASYNCHRONOUS operation.
    - The keyword ASYN and AWAIT were introduced in ES2017 and provide new
        syntax that simplifies ASYNCHRONOUS programming by allowing you to structure your Promise-based code as if it was ASYNCHRONOUS.
    - Finally, ASYNCHRONOUS iterators and the FOR/WAIT loop were introduced in
        ES2018 and allow you to work with streams of ASYNCHRONOUS events using simple loops that appear SYNCHRONOUS.


    ***** ASYNC AND AWAIT IN JAVASCRIPT *****
    -----------------------------------------
    - ES2017 introduces two new keywords--ASYNC and AWAIT--that represent a
        paradigm shit in ASYNCHRONOUS JavaScript programming. These new keywords dramatically simplify the use of Promises and allow us to write Promise-based, ASYNCHRONOUS code that looks like SYNCHRONOUS code that blocks while waiting for network responses or other ASYNCHRONOUS events. Although it is still important to understand how Promises work, much of their complexity (and sometimes even their very presence!) vanishes when you see them with ASYNC and AWAIT.

    - ASYNCHRONOUS code can't return a value or throw an exception the way that
        regular SYNCHRONOUS doce can. And this is why Promises are designed the way the are.
    - The value of a fulfilled Promise is like they return value of a
        SYNCHRONOUS function. And the value of a rejected Promise is like a value thrown by a SYNCHRONOUS function.
    - This latter similarity is made explicit by the naming of the .CATCH()
        method.
    - ASYNC and AWAIT take efficient, Promise-based code and hide the Promises
        so that your ASYNCHRONOUS code can be as easy to read and as easy to reason about as inefficient, blocking, SYNCHRONOUS code.



    ** AWAIT Expressions **
    -----------------------
    - The AWAIT keyword takes a Promise and turns it back into a return value
        of a thrown exception. Given a Promise object p, the expression AWAIT p waits until p settles.
    - If p fulfills, then the value of AWAIT p is the fulfillment value of p.
        On the other hand, if p is rejected, then the AWAIT p expression throws the rejection value of p.
    - We don't usually use AWAIT with a variable that holds a Promise; instead,
        we use it before the invocation of a function that returns a Promise:

        let response = await fetch("/api/user/profile");
        let profile = await response.json();


    - It is critical to understand right away that the AWAIT keyword does not
        cause your program to block and literally do nothing until the specified Promise settles.
    - The code remains ASYNCHRONOUS, and the AWAIT simply disguises this fact.
        This means that ANY CODE THAT USES AWAIT IS ITSELF ASYNCHRONOUS.






    *** ASYNCH FUNCTIONS ***
    ------------------------
    - Because any code that uses AWAIT is ASYNCHRONOUS, there is one critical
        rule: YOU CAN ONLY USE THE AWAIT KEYWORD WITHIN FUNCTIONS THAT HAVE BEEN DECLARED WITH THE ASYNC KEYWORD.
*/
    async function getHighScore() {
        let response = await fetch("/api/user/profile");
        let profile = await response.json();
        return profile.highScore;
    }

/*
    - Declaring a function ASYNC means that the return value of the function
        will be a Promise even if no Promise-related code appears in the body of the function. If an ASYNC function appears to return normally, then the Promise object that is the real return value of the function will resolve to that apparent return value. And if an ASYNC function appears to throw an exception, then the Promise object that it return will be rejected with that exception.


    - The getHighScore() function is declared ASYNC, so it returns a Promise.
        And because it returns a Promise, we can use the AWAIT keyword with it:
*/
    displayHighScore(await getHighScore());









/*
    ***** ASYNC FUNCTIONS ANOTHER LOOK *****
    ----------------------------------------
    - ASYNC functions were added to the ES2017 specification. These functions
        are preceded by the ASYNC keyword and allow you to write ASYNCHRONOUS code as if it was SYNCHRONOUS. This is achieved by using the AWAIT operator before an ASYNCHRONOUS function. This will wrap the return value of the function in a promise that can then be assigned to a variable. The next line of code is not executed until the promise is resolved.
*/
    // Example
    async function loadGame(userName) {
        try {
            const user = await login(userName);
            const info = await getPlayerInfo(user.id);
            // load the game using the return info
        } catch (error) {
            throw error;
        }
    }

/*
    - In the example, the loadGame function is preceded by the ASYNC keyword,
        meaning the function will run in an ASYNCHRONOUS fashion. We then wrap each step of the process in a TRY block, so any errors are caught.
    - Inside this block, we can write each step in the order it's meant to be
        processed, so we start by assigning the variable USER to the return value of the LOGIN() funciton.
    - The AWAIT operator will ensure the next line of code is not executed
        until the LOGIN() function returns a USER object.
    - The getPlayerInfo() function is also preceded by the AWAIT operator.
    - Once this function returns a result, it's assigned to the variable INFO,
        and this can then be used to load the actual game.
    - A CATCH block is used to deal with any errors that may occur.

*/









/*  ***** ASYNC FUNCTIONS ANOTHER LOOK *****
    ----------------------------------------
    * ASYNC flow with generators *

    - Generators are functions which are able to pause and then resume
        execution. This allows to emulate ASYNC functions using external libraries, mainly q or co.
    - Basically, it allows to write functions that wait for ASYNC results in
        order to go on



    - ASYNC and AWAIT build on top of Promises and generators to express
        ASYNCHRONOUS actions inline. This makes ASYNCHRONOUS or CALLBACK code much easier to maintain.
    - Functions with the ASYNC keyword return a Promise.
    - Inside an ASYNC function the AWAIT keyword can be applied to any Promise,
        and will cause all of the function body after the AWAIT to be executed after the promise resolves.


    - A function defined as ASYNC is a function that can perform ASYNCHRONOUS
        actions but still look SYNCHRONOUS. The way it's done is using the AWAIT keyword to defer the function while it waits for a Promise to resolve or reject.
*/
    async function getJSON(url) {
        try {
            const response = await fetch(ur);
            return await response.json();
        } catch(err) {
            // Rejections in the promise will get thrown here
            console.error(err.message);
        }
    }


/*
    - An ASYNC function always returns a Promise itself, so you can use it in
        other ASYNCHRONOUS functions.
*/
    const getJSON = async url => {
        const response = await fetch(url);
        return await response.json();
    }








/*
    ***** ASYNC FUNCTIONS ANOTHER LOOK *****
    ----------------------------------------
    - An ASYNC function is a function that implicitly returns a promise and that
        can, in its body, AWAIT other promises in a way that looks SYNCHRONOUS.
*/
    // Example
    async function findInStorage(nest, name) {
        let local = await storage(nest, name);
        if (local != null) return local;

        let sources = network(nest).filter(n => n != nest.name);
        while (source.length > 0) {
            let source = sources[Math.floor(Math.random() * sources.length)];
            sources = sources.fill(n => n != source);
            try {
                let found = await routeRequest(nest, source, "storage", name);
                if (found != null) return found;
            } catch(_) {}
        }
        throw new Error("Not found");
    }


/*
    - An ASYNC function is marked by the word ASYNC before the function keyword.
        Methods can also be made async by writing ASYNC before their name. When such a function or method is called, it returns a promise.
    - As soon as the body returns something, that promise is resolved.
    - If it throws an exception, the promise is rejected.


    - Inside an ASYNC function, the word AWAIT can be put in front of an
        expression to wait for a promise to resolve and only then continue the execution of the function.


    - Such a function no longer, like a regular JavaScript functions, run from
        start to completion in one go. Instead, it can be frozen at any point that has an AWAIT, and can be resumed at a later time.


    - From non-trivial ASYNCHRONOUS code, this notation is usually more
        convenient than directly using promses. Even if you need to do something that doesn't fit the SYNCHRONOUS model, such as perform multiple actions at the same time, it is easy to combine AWAIT with the direct use of promises.
*/



// Example - Transform Promise code to ASYNC-AWAIT code
// ----------------------------------------------------
function makeOrder(Coffee) {
    return new Promise((resolve, reject) => {
        console.log("Making request for a + " Coffee);
        if (Coffee == "Black coffee") {
            resolve("Here is your coffee, have a nice day!")
        } else {
            reject("Sorry! We serve only black coffee.")
        }
    });
}

function processOrder(order) {
    return new Promise((resolve, reject) => {
        console.log("Processing order.");
        resolve("Extra information " + order);
    });
}


// Processing Promises without ASYNC AWAIT
// makeOrder("Black coffee").then(order => {
//     console.log("Order has been received.");
//     return processOrder(order);
// }).then(processOrder => {
//     console.log(processOrder);
// }).catch(error => {
//     console.log(error);
// });


// Processing Promises using ASYC AWAIT
async function func1()
    try{
        // By placing AWAIT in front of the function, processes CANNOT continue
        // until the this function is processed.
        var order = await makeOrder("Black coffee");
        console.log("Order has been received.");

        var processedOrder = await processOrder(order);
        console.log(processedOrder);
    } catch(error) {
        console.log(error);
    }
}

func1();
