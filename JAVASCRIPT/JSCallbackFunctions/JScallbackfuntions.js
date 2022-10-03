/*
    Callbacks - Functions as a Parameter
    ------------------------------------
    - In JavaScript, functions are considered to be first-class objects. This
    means they behave in the same way as all the other primitive data types
    and objects in the language. They can be assigned to variables, stored
    in arrays and can even be returned by another function.

    - This makes functions a very important and powerful part of the JavaScript
    language with many of its features relying on them. Fully understading
    functions is an essential skill of a JavaScript developer


    - One approach to ASYNCHRONOUS PROGRAMMING is to make functions that
        perform a slow action take an extra argument, a CALLBACK function.
                                                        -------------------
*/


/*
    Assigning an Anonymous Function to a variable
    ---------------------------------------------
    - A very common use of anynymous functions is to assign them to a varible:

        // Example
        ----------
        var foo = function() {}



    Supplying an Anonymous Function as a Parameter to Another Function
    ------------------------------------------------------------------
    *** A function that is passed as an argument to another is known as a
        CALLBACK.
        --------


      - Some functions may accept a reference to a function as a parameter.
        These are sometimes referred to as "DEPENDENCY INJECTIONS" or
        "CALLBACKS", because it allows the function your calling to "CALL BACK"
        to your code, giving you an opportunity to change the way the called
        function behaves.


    - For example, the Array object's map function allows you to iterate over
    each element of an array, then build a new array by applying a      transform function to each element.
*/

        var nums = [0, 1, 2];
        var doubledNums = nums.map(function(element){
            return element * 2;
        });                   // This return [0, 2, 4]




/*
    ** Callbacks offer a way to extend the functionality of a function (or method) WITHOUT CHANGING its code. This approach is often used in modules
    (libraries/plugins), the code of which is not supposed to be changed. **
*/
// Suppose we have written the following function, calculating the sum of a
// given array of values
function foo(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


/*
    Now suppose that we want to do someting with each value of the array, e.g.
    display it using alert(). We could make the appropriate changes in the code
    of foo, like this:
*/
function foo(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        alert(array[i]);
        sum += array[i];
    }
    return sum;
}


/*
    But what if we decide to use console.log instead of alert()? Obviously
    changing the code of foo, whenever we decide to do something else with each value, is not a good idea. It is much better to have the option to change
    our mind without changing the code of foo. That's exactly the use case for
    CALLBACKS. We only have to slightly change foo's signature and body:
*/
function foo(array, callback) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
        sum += array[i];
    }
    return sum;
}


// Now we are able to change the behavior of foo just by changing its parameters
var array = [];
foo(array, alert);
foo(array, function(x) {
    console.log(x);
});






// Here's a basic example of a function called sing(), which accepts the name
// of a song:
function sing(song) {
    console.log(`I'm singing along to ${song}`);
}

// We can make the sing() function more flexible by adding a CALLBACK parameter:
function sing(song, callback) {
    console.log(`I'm singing along to ${song}.`);
    callback();
}
// The CALLBACK is provided as a parameter, then invoked inside the body of the
// function.



// We can create another function called DANCE() that can be used as the
// CALLBACK
function dance() {
    console.log("I'm moving my body to the groove.");
}

// Now we can call our sing function, but we can also dance as well as sing:
sing('Let It Go', dance);

/*
    - Note that the CALLBACK dance is passed as an argument without parentheses.
    This is because the argument is only a reference to the functio. The actual
    CALLBACK is invoked in the body of the function, where parentheses are used.


    - Okay, so in these examples, the dance() function doesn't really do anything, except log another message to the console, but hopefully it shows you could do something very different with the sing() function depending on the CALLBACK function that is provided as an argument, making it a much more flexible function.


    - A function can also take an ANONYMOUS FUNCTION as a CALLBACK. For example,
    say we want to call the sing() function and also want to stand on our
    head while singing, but we have no STANDONHEAD() function. We can write
    an ANONYMOUS function that does it instead:
*/
sing('Let It Go', () => {
    console.log("I'm standing on my head.");
})
/*
    This is type of function is only really useful for on-off tasks. It's often
    a better idea to keep functions separate and named, so they can be reused.
    It's also a bad idea to use this method for long function definitions as it
    can be confusing where the CALLBACK starts and ends. Named functions also
    make it easier to identify the source of bugs in code. In this case, the
    fact we only needed a one-line ANONYMOUS function made it a good candidate
    for using the arrow notation.
*/




/*
    ***** EVENT-DRIVEN ASYNCHRONOUS PROGRAMMING *****
-------------------------------------------------------------
    - CALLBACKS can be used to facilitate event-driven asynchronous programming.
    JavaScript is a single-threaded environment, which mean only one piece
    of code will ever be processed at a time. This may seem like a   limitation, but non-blocking techniques can be used to ensure that the
    program continues to run.

    - Instead of waiting for an event to occur, a CALLBACK can be created that's
    invoked when the event happens. This means that the code is able to run
    out of order, or ASYNCHRONOUSLY.

    - Events can be DOM events, such as the CLICK and KEYPRESS, but they can
    also be events such as the completion of a file download, data returned
    from a database, or the result of a complex operation.

    - By using CALLBACKS, we ensure that waiting for these tasks to complete
    doesn't hold up the execution of other parts of the program. Once the
    task has been completed, the CALLBACK will be invoked before returning
    to the rest of the program.

    - Here's an example of a function called WAIT() that accepts a CALLBACK.
    To simulate an operation that takes some time to happen, we can use the
    SETIMEOUT() function to call the CALLBACK after a given number of seconds:
*/
function wat(message, callback, seconds) {
    setTieout(callback, seconds * 1000);
    console.log(message);
}

// Let's create a CALLBACK function to use:
function selfDestruct() {
    console.log('BOOOOM!');
}

/*
    If we invoke the WAIT() function then log a message to the console, we can
    see how JavaScript works ASYNCHRONOUSLY
*/
wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ... ?');

/*
    - When the WAIT() function is invoked, any code inside it is run, so the
    message 'This tape will self destruct in five seconds ... ' is displayed.
    The SETTIMEOUT() function is ASYNCHRONOUS, which means that the CALLBACK
    provided as an argument is placed on top of a stack that gets cleared once
    the rest of the program has run.

    - This means that control is handed back to the program and the next line
    in the program is run, which displays the message 'Hmmm, should I accept this mission or not ... ?' Then, after five seconds, the CALLBACK is retrieved from the stack and invoked.

    - This demonstrates that the SETIMEOUT() function did not block the rest
    of the program from running.
    This is know as the JavaScript EVENT-LOOP.
                                  -------------
*/



/*  - At its most fundamental level, ASYNCHRONOUS PROGRAMMING in JavaScript is
    done with CALLBACKS
    - A CALLBACK is a function that you write and then pass to some other
    function. That other function then invokes ("CALL BACK") your function
    when some condition is met or some (ASYNCHRONOUS) event occurs.
    - The invocation of the CALLBACK function you provide notifies you of the
    condition or event, and sometimes, the invocation will include function
    arguments that provide additional details.


    ***** TIMERS *****
    -------------------
    - One of the simplest kinds of ASYNCHRONOUS is when you want to run some
    code after a certain amount of time has elasped.
    - You can do this with the SETIMEOUT() function:
*/
setTieout(checkForUpdates, 60000);

/*
    - The first argument to setTimeout() is a function and the second is a time
    interval measured in milliseconds. In the precdeing code, a hypothetical
    checkForUpdates() function will be called 60,000 milliseconds (1 minute)
    after the setTimeout() call.

    - checkForUpdates() is a callback function that your program might define, and setTimeout() is the function that you invoke to register your callback
    function and specify under what ASYNCHRONOUS conditions it should be invoked.

    - setTimeout() calls the specified CALLBACK function one time, passing no arguments, and then forgets about it. If you are writing a function that really does check for updates, you probably want it to run repeatedly. You can do this by using setInterval() instead of setTimeout();
*/

// Call checkForUpdates in one minute and then again every minute after that
let updateIntervalId = setInterval(checkForUpdates, 60000);

/*
    setInterval() returns a value that we can use to stop the repeated invocations by calling clearInterval(). (Similarly, setTieout() returns a value that you can pass to clearTimeout())
*/
function stopCheckingForUpdates() {
    clearInterval(updateIntervalId);
}






/*
    ***** EVENTS *****
    ------------------
    - Client-side JavaScript programs are almost universally event driven: rather than running some kind of predetermined computation, they typically wait for the user to do something and then respond to the user's actions. The web browser generates an EVENT when the user presses a key on the keyboard, moves the mouse, clicks a mouse button, or touches a touchscreen device.

    - Event-driven JavaScript programs register CALLBACK functions for specified types of events in specified contexts, and the web browser invokes those functions whenever the specified events occur. These CALLBACK functions are called EVENT HANDLERS OR EVENT LISTENERS, and they are registered with addEventListerner();
*/
// Ask the web browser to return an object representing the HTML
// <button> element that matches this CSS selector
let okay = document.querySelector('#confirmUpdateDialog button.okay');

// Now register a CALLBACK function to be invoked when the user
// clicks on that button.
okay.addEventListerner('click', applyUpdate);

/*
    - In this example, applyUpdate() is a hypothetical CALLBACK function that we assume is implemented somewhere else. The call to document.querySelector() returns an object that represents a single specified element in the web page. We call addEventListerner() on that element to register our CALLBACK. The the first argument to addEventListerner() is a string that specifies the kind of event we're interested in-a mouse click or touchscreen tap, in this case.

    - If the user clicks or taps on that specific element of the web page, then the browser will invoke our applyUpdate() CALLBACK function, passing an object that includes details (such as the time and the mouse pointer coordinates) about the event.
*/








/*
    ***** NETWORK EVENTS *****
    --------------------------
    - Another common source of ASYNCHRONY in JavaScript Programming is network requests. JavaScript running the browser can fetch data from a web server with code like this:
*/
function getCurrentVersionNumber(versionCallback) {
    // Note CALLBACK argument
    // Make a scripted HTTP request to a backend version API
    let request = new XMLHttpRequest();
    request.open("GET", "http://www.example.com/api/version");
    request.send();

    // Register a CALLBACK that will be invoked when the request arrives
    request.onload = function() {
        if (request.status = 200) {
            // If HTTP status is good, get version number and call CALLBACK.
            let currentVersion = parseFloat(request.responseText);
            versionCallback(null, currentVersion);
        } else {
            // Otherwise report an error to the CALLBACK
            versionCallback(response.statusText, null);
        }
    };
    // Register another CALLBACK that will be invoked for network errors
    request.onerror = request.ontimeout = function(e) {
        versionCallback(e.type, null);
    };
}

/*
    - Client-side JavaScript code can use the XMLHttpRequest class plus CALLBACK functions to make HTTP requeests and ASYNCHRONOUSLY handle the server's response when it arrives.

    - The getCurrentVersionNumber() function defined here makes an HTTP request and defines event handlers that will be invoked when the server's respone is received or when a timeout or other error causes the request to fail.

    - Notice that the code example above does not call addEventListerner() as our preious example did. For most web APIs (including this one), event handlers can be defined by invoking addEventListerner() on the object generating the event and passing the name of the event of interest along with the CALLBACK function.

    - Typically though, you can also register a single event listener by assigning it directly to a property of the object. That is what we do in this example code, assigning functions to the onload, onerror, and ontimeout properties.

    - By convention, event listener properties like these always have names that begin with on. addEventListerner() is the more flexible technique because it allows for multiple event handlers. But in case where you are sure that no other code will need to register a listener for the same object and event type, it can be simpler to simply set the appropriate property to your CALLBACK.

    - Another thing to note about the getCurrentVersionNumber() function in this example code is that, because it makes an ASYNCHRONOUS request, it cannot SYNCHRONOUSLY return the value (the current version number) that the caller is interested in. Instead, the caller passes a CALLBACK function, which is invoked when the result is ready or when an error occurs.

    - In this case, the caller supplies a CALLBACK function that expects two arguments. If the XMLHttpRequest works correctly, then getCurrentVersionNumber() invokes the CALLBACK with a null first argument and the version number as the second argument. Or, if an error occurs, then getCurrentVersionNumber() invokes the CALLBACK with error details in the first argument and null as the second argument.
*/








/*
    ***** CALLBACKS AND EVENTS IN NODE *****
    ----------------------------------------
    - The Node.js server-side JavaScript environment is deeply ASYNCHRONOUS and defines many APIs that use CALLBACKS and EVENTS. The default API for reading the contents of a file, for example, is ASYNCHRONOUS and invokes a CALLBACK function when the contents of the file have been read:
*/
const fs = require("fs") // The "fs" module has filesystem-related APIs
let options = {          // An object to hold options for our program
    // default options would go here
};

// Read a configuration file, then call the CALLBACK function
fs.readFile("config.json", "utf-8", (err, text) => {
    if (err) {
        // If there was an error, display a warning, but continue
        console.warn("Could not read config file:", err);
    } else {
        // Otherwise, parse the file contents and assign to the options object
        Object.assign(options, JSON.parse(text));
    }

    // In either case, we can now start running the program
    startProgram(options);
});

/*
    - Node's fs.readFile() function takes a two-parameter CALLBACK as its last argument. It reads the specified file ASYNCHRONOUSLY and then invokes the CALLBACK. If the file was read successfully, it passes the file contents as the second CALLBACK argument. If there was an error, it passes the error as the first CALLBACK argument. In this example, we express the CALLBACK as an arrow function, which is a succint and natural syntax for this kind of simple operation.
*/


/*
    Node also defines a number of EVENT-BASED APIs. The following function shows how to make an HTTP request for the contents of a URL in Node. It has two layers of ASYNCHRONOUS code handled with event listeners. Notice that Node uses an on() method to register event listeners instead of addEventListerner():
*/
const https = require("https");

// Read the text content of the URL and ASYNCHRONOUSLY pass it to the CALLBACK.
function getText(url, callback) {
    // Start an HTTP GET request for the URL
    request = https.get(url);

    // Register a function to handle the "response" event.
    request.on("response", response => {
        // The response event means that response headers have been received
        let httpStatus = response.statusCode;

        // The body of the HTTP response has not been received yet.
        // So we register more event handlers to be called when it arrives.
        response.setEncoding("utf-8");  // We're expecting Unicode text
        let body = "";                  // which we will accumulate here.

        // This event handler is called when a chunk of the body is ready
        response.on("data", chunk => { body += chunk; });

        // This event handler is called when the response is complete
        response.on("end", () => {
            if (httpStatus === 200) {   // If the HTTP response was good
                callback(null, body);   // Pass response body to the CALLBACK
            } else {                    // Otherwise pass ann error
                callback(httpStatus, null);
            }
        });
    });

    // We also register an event handler for lower-level network errors
    request.on("error", (err) => {
        callback(err, null);
    });
}
