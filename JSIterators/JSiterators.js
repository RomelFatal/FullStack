/*
    ***** ITERATORS IN JAVASCRIPT *****
    -----------------------------------
    - An ITERATOR pattern provides a simple method for selecting, sequentially,
        the next item in a collection.

    - An ITERATOR is something when invoked returns an iterable. An iterable is
        something you can iterate upon. From ES6/ES2015 onwards, all collections (Array, Map, Set, WeakMap, WeakSet) conform to the Iterable contract

    - In ECMAScript 2015 iteratos are a built-in as a method that returns DONE
        and VALUE. DONE is true when iterator is at the end of the collection

    - An ITERATOR allows the collection to be looped through with a for of loop.
*/
    function preferredBeverage(beverage) {
        if (beverage == "Beer") {
            return true;
        } else {
            return false;
        }
    }

    var withPepperoni = new BeverageForPizza(["Cola", "Water", "Beer", "Orange Juice"]);
    for (var bevToOrder of withPepperoni) {
        bevToOrder.done; //False, because "Beer" isn't the final collection item
        return bevToOrder;  //"Beer"
    }



    // ITERATOR array example
    function cars(values) {
        let index = 0;
        return {
            next: function() {
                if (index < values.length)
                return {
                    value: values[index++];
                    done: false;
                } else {
                    return {
                        done: true;
                    }
                }
            }
        }
    }

    var arr = ["BMW", "Audi", "Mercedes", "Honda", "Jeep"];

    var newCars = cars(arr);
    console.log(newCars.next());            //{value: "BMW", done: false}
    console.log(newCars.next().value);  //BMW
    console.log(newCars.next());            //{value: "Audi", done: false}
    console.log(newCars.next().value);  //Audi
    console.log(newCars.next());            //{value: "Mercedes", done: false}
    console.log(newCars.next().value);  //Mercedes
    console.log(newCars.next());            //{value: "Honda", done: false}
    console.log(newCars.next().value);  //Honda
    console.log(newCars.next());            //{value: "Jeep", done: false}
    console.log(newCars.next().value);  //Jeep
    console.log(newCars.next());            //{done: true}
    console.log(newCars.next().value);  //Undefined










/*
    ***** ITERATORS ANOTHER LOOK *****
    ----------------------------------
    ** THE FOR/OF LOOOP (Understand FOR/OF to iterate over objects) **
    ------------------------------------------------------------------
    - ES6 defines a new loop statement: FOR/OF. This new kind of loop uses the
        for KEYWORD but is a completely different kind of loop than the regular for loop. (It is also completely different than the older for/in loop)
    - The FOR/OF loop works with iterable objects. They are, arrays, strings,
        sets, and maps: they represent a sequence or set of elements that you can loop or iterate through using a FOR/OF loop.

    - An example, how we can use FOR/OF to loop through the elements of an
        array of numbers and computer their sum:
*/
    let data = [1, 2, 3, 4, 5, 6, 7, 9], sum = 0;
    for (let element of data) {
        sum += element;
    }
    sum         // => 45

/*
    - Superficially, the syntax looks like a regular FOR loop: the FOR KEYWORD
        is followed by parentheses that contain details about what the loop should do. In this case, the parentheses contain a variable declaration (or, for variables that have already been decalared, simply the name of the variable) followed by the OF KEYWORD and an expression that evalulates to an iterable object, like the data array in this case. As with all loops, the body of a FOR/OF loop follows the parentheses, typically within curly braces.

    - In the code just above, the loop body runs once for each element of the
        data array. Before each execution of the loop body, the next element of the array is assigned to the element variable. Array elements are iterated in order from first to last.
    - Arrays are iterated "live"--changes made during the iteration may affect
        the outcome of the iteration. If we modify the preceding code by adding the line data.push(sum); inside the loop body, then we create an infinite loop because the iteration can never reach the last element of the array.

    ** FOR/OF WITH OBJECTS **
    -------------------------
    - Objects are not (by default) iterable. Attempting to use FOR/OF on a
        regular objects throws a TypeError at runtime:
*/
    let o = { x: 1, y: 2, z: 3 };
    for (let element of o) { // Throws TypeError because o is not iterable
        console.log(element);
    }

/*
    - If you want to iterate through the properties of an object, you can use
        the FOR/IN loop, or use FOR/OF with the OBJECT.KEYS() method:
*/
    let o = { x: 1, y: 2, z: 3 };
    let keys = "";
    for(let k of Object.keys(o)) {
        keys += k
    }
    keys    // => "xyz"

/*
    - This works because OBJECT.KEYS() returns an array of property names for
        an object, and arrays are iterable with FOR/OF. Note also that this iteration of the keys of an object is not live as the array example above was--changes to the object o made in the loop body will have no effect on the iteration. If you don't care about the keys of an object, you can also iterate through their corresponding values like this:
*/
    let sum = 0;
    for(let v of Object.values()) {
        sum += v;
    }
    sum     // => 6

/*
    - And if you are interested in both the keys and values of an objecct's
        properties, you can use FOR/OF with OBJECT.ENTRIES() and destructuring assignment:
*/
    let pairs = "";
    for(let [k, v] of Object.entries(o)) {
        pairs += k + v;
    }
    pairs   // => "x1y2z3"

/*
    - OBJECT.ENTRIES() returns an array of arrays, where each inner array
        represents a KEY/VALUE pair for one property of the object. We use destructuring assignment in this code example to unpack those inner arrays into two individual variables.



    ** FOR/OF WITH STRINGS **
    -------------------------
    - Strings are iterable character-by-character in ES6:
*/
    let frequency = {};
    for(let letter of "mississippi") {
        if (frequency[letter]) {
            frequency[letter]++;
        } else {
            frequency[letter] = 1;
        }
    }
    frequency   // => {m: 1, i: 4, s: 4, p: 2}

/*  - Note that strings are iterated by Unicode codepoint, not by UTF-16
        character. The string “I ❤ 🐈” has a .length of 5 (because the two emoji characters each require two UTF-16 characters to represent). But if you iterate that string with for/of, the loop body will run three times, once for each of the three code points “I”, “❤”, and “ 🐈.”



    ** FOR/OF WITH SET AND MAP **
    -----------------------------
    - The built-in ES6 Set and Map classes are iterable. When you iterate a Set
        with FOR/OF, the loop body runs once for each element of the set. You could use code like this to print the unique words in a string of text:
*/
    let text = "Na na na na na na na na Batman!";
    let wordSet = new Set(text.split(" "));
    let unique = [];
    for(let word of wordSet) {
        unique.push(word);
    }
    unique      // => ["Na", "na", "Batman!"]

/*
    - Maps are interesting case because the iterator for a Map object does not
        iterate the Map keys, or the Map values, but KEY/VALUE PAIRS. Each time through the iteration, the iterator returns an array whose first element is a KEY and whose second element is the corresponding VALUE. Given a Map m, you could iterate and destructure its KEY/VALUE PAIRS like this:
*/
    let m = new Map([[1, "one"]]);
    for(let [key, value] of m) {
        key     // => 1
        value   // => "one"
    }


/*
    - Iterable objects and their associated iterators are a feature of ES6.
        Arrays (including TypedArrays) are iterable, as are strings and Set and Map objects. This means that the contents of these data structures can be iterated--looped over-- with the for/of loop.
*/
    let sum = 0;
    for (let i of [1,2,3]) {
        // Loop once for each of these values
        sum += i;
    }       // => 6

/*
    - ITERATORS can also be used with the ... operator to expand or "spread" an
        iterable object into an array initializer or function invocation
*/
    let chars = [..."abcd"];        // chars == ["a", "b", "c", "d"]
    let data = [1, 2, 3, 4, 5];
    Math.max(..data)        // => 5

/*
    - ITERATORS can be used with destructuring assignment:
*/
    let purpleHaze = Uint8Array.of(255, 0, 255, 128);
    for(let [k, v] of m) console.log(k, v);     // Logs 'one 1' and 'two 2'

/*
    - If you want to iterate just the keys or just the values rather than the
        pairs, you can use the KEYS() and VALUES() methods:
*/
    [...m]            // => [["one", 1], ["two", 2]]: default iteration
    [...m.entries()] //=> [["one", 1], ["two", 2]]: entries() method is the same
    [...m.keys()]   // => ["one", "two"]: KEYS() method iterates just map keys
    [...m.values()] // => [1, 2]: VALUES() method iterates just map values



/*
    ** HOW ITERATORS WORKS **
    -------------------------
    - The for/of loop and spread operator work seamlessly with iterable
        objects, but it is worth understanding what is actually happening to make the iteration work. There are THREE separate types that you need to understand iteration in JavaScript.

    -  FIRST, there are the iterable objects: These are types like Array, Set,
        and Map that can be iterated.
    - SECOND, there is the iterator object itself, which performs the iteration.
    - THIRD, there is the ITERATION RESULT object that holds the result of each
        step of the iteration.



    - An ITERABLE OBJECT is any object with a special iterator method that
        returns an iterator object.

    - An ITERATOR is any object with a NEXT() method that returns and iteration
        result object.

    - An ITERATION RESULT OBJECT is an object with properties named VALUE and
        DONE. To iterate an iterable object, you first call its iterator method to get an iterator object. Then, you call the NEXT() method of the iterator object repeatedly until the returned value has its done property set to TRUE. The tricky thing about this is that the iterator method of an iterable object does not have a conventional name but uses the Symbol Symbol.iterator as its name. So a simple for/of loop over and iterable object ITERABLE could also be written the hard way, like this:
*/
    let iterable = [99];
    let iterator = iterable[Symbol.iterator]();
    for (let result = iterator.next(); !result.done; result = iterator.next()) {
        console.log(result.value);  // result.value == 99
    }

/*
    - The iterator object of the built-in iterable datatypes is itself iterable.
        (That is, it has a method named Symbol.iterator that just returns itself.) This is occasionally useful in code like the following when you want to iterate though a "partially used" iterator:
*/
    let list = [1,2,3,4,5];
    let iter = list[Symbol.iterator]();
    let head = iter.next().value;       // head == 1
    let tail = [...iter];               // tail == [2,3,4,5]


/*
    ** IMPLEMENTING ITERABLE OBJECTS **
    -----------------------------------
    - ITERABLE OBJECTS are so useful in ES6 that you should consider making
        your own data-types iterable whenever they represent something that can be iterated.

    - In order to make a class iterable, you must implement a method whose name
        is the Symbol SYMBOL.ITERATOR. That method must return an iterator object that has a NEXT() method. And the NEXT() method must return an iteration result object that has a VALUE property and/or a boolean done property.
*/

    // It must return an iterator result object
    next() {
        return(next <= last)    // If we haven't returned last value yet
        ? {value: next++}       // return next value and increment it
        : {done: true};         // otherwise indicate that we're done
    },

    // As a convenience, we make the iterator itself iterable.
    [Symbol.iterator]() {return this;}










/*  ***** ITERATORS ANOTHER LOOK *****
    ----------------------------------
    ** THE ITERATOR INTERFACE **
    ----------------------------
    - The object given to a FOR/OF loop is expected to be ITERABLE. This means
        it has a method named with the SYMBOL.ITERATOR symbol (a symbol value defined by the language, stored as a property of the Symbol function).

    - When called, that method should return an object that provides a second
        interface, ITERATOR. This is the actual thing that iterates. It has a NEXT method that returns the next result. That result should be an object with a VALUE property that provides the next value, if there is one, and a DONE property, which should be true when there are no more results and false otherwise.

    - Note that the NEXT, VALUE, and DONE property names are plain strings, not
        symbols. Only SYMBOL.ITERATOR, which is likely to be added to a lot of different objects, is an actual symbol.

        We can directly use this interface ourselves.
*/
    let okIterator = "OK"[Symbol.iterator]();
    console.log(okIterator.next());     //{value: "O", done: false}
    console.log(okIterator.next());     //{value: "K", done: false}
    console.log(okIterator.next());     //{value: undefined, done: true}
