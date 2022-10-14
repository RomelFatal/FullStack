/*
    ***** MAPS IN JAVASCRIPT *****
    ------------------------------
    - A MAP is a basic mapping of keys to values. MAPS are different from
        objects in that their keys can be anything (primitive values as well as objects), not just strings and symbols. Iteration over MAPS is also always done in the order the items were inserted into the Map, whereas the order is undefined when iterating over keys in an object.

    - You can also use FOR...OF loops to iterate over MAPS. This works
        similarly to arrays and sets, except the iteration variable stores both a key and a value.
*/
    // To create a MAP, use the MAP constructor:
    const map = new Map();

/*
    - It has an optional parameter, which can be any iterable object (for
        example an array) which contains arrays of two elements - first is the key, the seconds is the value. For example:
*/
    const map = new Map([[new Date(), {foo: "bar"}], [document.body, "body"]]);










/*
    ***** MAPS ANOTHER LOOK *****
    -----------------------------
    - MAPS were another data structure introduce in the ES6 specification. They
        are a convenient way of keeping a list of key and value pairs, and are similar to 'hashes', or 'has tables' or 'dictionaries' in other programming languages.

    - At first glance, MAPS appear to be similar to JavaScript objects, but
        they have some noticeable differences:

    ** Objects are limited to using strings for key values, whereas MAPS can
        use any data type as a key.
    ** There is no efficient way to find the number of key-value pairs an
        object has, whereas this is easy to do with MAPS using the SIZE property.
    ** Objects have methods that can be called and prototypes that can be used
        to create a chain of inheritance, whereas MAPS are solely focused on the storage and retrieval of key-value pairs.
    ** The value of an object's properties can be accessed directly, whereas
        MAPS restrict you to using the GET() method to retrieve any values.


    *** CREATING MAPS ***
    ---------------------
    - An empty MAP object can be created using the NEW operator and MAP()
        constructor:
*/
    const romanNumerals = new Map();


/*
    *** ADDING ENTRIES TO MAPS ***
    ------------------------------
    - The SET() method can be used to add a key and value pair to a map. The
        first value is the key and the second is the value:
*/
    romanNumerals.set(1, 'I');
    // Map { 1 => 'I'}

/*
    - The return value shows the mapping with the key connected to the value
        using the 'hash rocket symbol (=>)'

    - Multiple items can be added to the set by repeatedly calling the SET()
        method in one go:
*/
    romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
    //Map {1 => 'I', 2 => 'II', 3 => 'III', 4 => 'IV', 5 => 'V'}


/*
    *** MAP METHODS ***
    -------------------
    - A MAP is a bit like a dictionary where you can look up a value based on
        the key. To look up a value, we can use the GET() method:
*/
    romanNumerals.get(4);
    // 'IV'


/*
    - The HAS() method can be used to check if a particular key is in a map.
        This returns a boolean value of TRUE or FALSE:
*/
    romanNumerals.has(5);
    // true

    romanNumerals.has(10);
    // false


/*
    - A map can be created with multiple values by using a nested array as a
        parameter:
*/
    const heroes = new Map([ ['Clark Kent', 'Superman'],
    ['Bruce Wayne', 'Batman']
    ]);

/*
    - The number of key and value pairs in a map can be found by querying the
        SIZE property:
*/
    heroes.size;
    // 2


/*
    *** REMOVING ENTRIES FROM MAPS ***
    ----------------------------------
    - The DELETE() method can be used to remove a key and value pair from a
        map. This returns a boolean value of TRUE if the value was removed or FALSE if it wasn't in the map. To delete a specific value, you need to specify the key in parentheses:
*/
    heroes.delete('Clark Kent');
    // true

    heroes.size;
    // 1


/*
    - The CLEAR() method will remove ALL key and value pairs from a map:
*/
    heroes.clear();
    heroes.size;
    // 0


/*
    *** CONERTING MAPS TO ARRAYS ***
    --------------------------------
    - MAPs can be converted into a nested array of key-value pairs in a similar
        way to sets; using either the spread operator:

        or the ARRAY.FROM() method:
*/
    [...romanNumerals];
    //[ [1, 'I'], [2, 'II'], [3, 'III'], [4, 'IV'], [5, 'V'] ]

    Array.from(romanNumerals);
    //[ [1, 'I'], [2, 'II'], [3, 'III'], [4, 'IV'], [5, 'V'] ]


/*
    - WEAK MPAS work in the same way as weak sets. They are the same as maps,
        except their keys cannot be primitives, and the garbage collector will automatically remove any dead entries when the reference to the original object is deleted.

    - To create a WEAK MAP, the NEW operator is used along with the WEAKMAP()
        constructor:
*/
    const weak = new WeakMap();


/*
    - WEAK MAPS can use the HAS(), GET(), SET() and DELETE() methods in the
        same way as a regular map.

    - WEAK MAPS and SETS are useful for optimizing memory usage and avoiding
        memory leaks, but they're also limited in that they don't have access to all the methods their regular counterparts have. For example, you cannot use the SIZE() method to see how many entries they contain. The choice of which to use will depend on what you plan to use them for.



    *** LOOPING OVER MAPS ***
    -------------------------
    - MAPS are also enumerable, so it's also possible to loop over a map in a
        similar way to a set. The loop will iterate over each key-value pair in the same order as they were added to the map.
*/
    const romanNumerals = new Map();
    romanNumerals.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
    //Map {1 => 'I', 2 => 'II', 3 => 'III', 4 => 'IV', 5 => 'V'}


/*
    - Every map object has a KEYS() method lets us iterate over each key with
        the following FOR-OF loop:
*/
    for (const key of romanNumerals.keys()) {
        console.log(key);
    }
    //1
    //2
    //3
    //4
    //5










/*
    ***** MAPS ANOTHER LOOK *****
    -----------------------------
    - A MAP (noun) is a data structure that associates values (the keys) with
        other values. For example, you might want to map names to ages. It is possible to use objects for this.
*/
    let ages = {
        Boris: 39,
        Liang: 22,
        Julia: 62
    }

/*
    - Here, the object's property names are the people's names, and the
        property values are their ages. But we certainly didn't list anybody named toString in our map. Yet, because plain objects derive from Object.prototype, it looks like the property is there.

    - As such, using plain objects as MAPS is dangerous. There are several
        possible ways to avoid this problem. First, it is possible to create objects with no prototype. If you pass NULL to OBJECT.CREATE, the resulting object will not derive from OBJECT.PROTOTYPE and can safely be used as a map.

    console.log("toString" in Object.create(null));     // false



    - Object property names must be strings. If you need a map whose keys can't
        easily be converted to string--such as objects--you cannot use an object as your map.

    - Fortunately, JavaScript comes with a class called MAP that is written for
        this exact purpose. It stores a mapping and allows any type of keys.
*/
    let ages = new Map();
    ages.set("Boris", 39);
    ages.set("Liang", 22);
    ages.set("Julia", 62);










/*
    ***** MAPS ANOTHER LOOK *****
    -----------------------------
    - A MAP object represents a set of value known as KEYS, where each key has
        another value associated with (or "mapped to") it. In a sense, a MAP is like an array, but instead of using a set of sequential integers as the KEYS, MAPS allow us to use arbitrary values as "indexes." Like ARRAYS, MAPS are fast: looking up the value associated with a key will be fast (though not as fast a indexing an array) no matter how large the map is.

        Create a new map with the Map() constructor:
*/
    let m = new Map();  // Create a new, empty map
    let n = new Map([   // A new map initialized with string keys mapped to
                        // numbers
        ["one", 1],
        ["two", 2]
    ]);

/*
    - The optional argument to the MAP() constructor should be an iterable
        object that yields two element [key, value] arrays. In practice, this means that if you want to initialize a map when you create it, you'll typically write out the desired keys and associated values as an array of arrays. But you can also use the MAP() constructor to copy other maps or to copy the property names and values from an existing object:
*/
    let copy = new Map(n);  //A new map with the same keys and values as map n
    let o = { x: 1, y: 2};  //An object with two properties
    let p = new Map(Object.entries(o)); //Same as new map([["x", 1], [["y", 2]])


/*
    - Once you have created a MAP OBJECT, you can query the value associated
        with a given KEY with GET() and can add a new key/value pair with SET(). Remember, though, that a map is a set of keys, each of which has an associated value. This is not quite the same as a set of key/value pairs. If you call SET() with a key that already exists in the map, you will change the value associated with that key, not add a new key/value mapping. In addition to GET() and SET(), the MAP class also defines methods that are like Set methods: use HAS() to check whether a map includes the specifiied keys; use DELETE() to remove a key (and its associated value) from the map; use CLEAR() to remove all key/value pairs from the map; and use the SIZE property to find out how many keys a map contains.
*/
    let m = new Map();  // Start with an empty map
    m.size              // => 0: empty maps have no keys
    m.set("one", 1);    // Map the key "one" to the value 1
    m.set("two", 2);    // And the key "two" to the value 2.
    m.size              // => 2: the map now has two keys
    m.get("two")        // => 2: return the value associated with key "two"
    m.get("three")      // => undefined: this key is not in the set
    m.set("one", true); // Change the value associated with an existing key
    m.size              // => 2: the size doesn't change
    m.has("one")        // => true: the map has a key "one"
    m.has(true)         // => false: the map does not have a key true
    m.delete("one")     // => true: the key existed and deletion succeeded
    m.size              // => 1
    m.delete("three")   // => false: failed to delete a nonexistent key
    m.clear();          // Remove all keys and values from the map

/*
    - Like the ADD() method of Set, the SET() method of MAP can be chained,
        which allows MAPS to be initialized without using arrays of arrays:
*/
    let m = new Map().set("one", 1).set("two", 2).set("three", 3);
    m.size          // => 3
    m.get("two")    // => 2


/*
    - As with Set, any JavaScript value can be used as a key or a value in a
        MAP. This includes NULL, UNDEFINED, and NaN, as well as reference types like objects and arrays. And as with the Set class, Map compares keys by identity, not by equality, so if you use an object or array as a key, it will be considered different from every other object and array, even those with exactly the same properties or elements:
*/
    let m = new Map();    // Start with an empty map.
    m.set({}, 1);         // Map one empty object to the number 1.
    m.set({}, 2);         // Map a different empty object to the number 2.
    m.size                // => 2: there are two keys in this map
    m.get({})             // => undefined: but this empty object is not a key
    m.set(m, undefined);  // Map the map itself to the value undefined.
    m.has(m)              // => true: m is a key in itself
    m.get(m)              // => undefined: same value we'd get if m wasn't a key


/*
    - MAP OBJECTS are iterable, and each iterated value is a two-element array
        where the first element is a key and the second element is the value associated with that key. If you use the SPREAD OPERATOR with a MAP OBJECT, you'll get an array of arrays like the ones that we passed to the MAP() constructor. And when iterating a map with a FOR/OF loop, it is idiomatic to use destructuring assignment to assign the key and value to separate variables:
*/
    let m = new Map([["x", 1], ["y", 2]]);
    [...m]      // => [["x", 1], ["y", 2]]

    for (let [key, value] of m) {
        // On the first iteration, key will be "x" and value will be 1
        // On the second iteration, key will be "y" and value will be 2
    }


/*
    - Like the Set class, the Map class iterates in insertion order. The first
        key/value pair iterated will be the one least recently added to the map, and the last pair iterated will be the one most recently added.

    - If you want to iterate just the keys or just the associated values of a
        map, use the KEYS() and VALUES() methods: these return iterable objects that iterate keys and values, in insertion order. (The ENTRIES() method returns an iterable object that iterates key/value pairs, but this is exactly the same as iterating the map directly.)
*/
    [...m]              // => ["x", "y"]: just the keys
    [...m.values()]     // => [1, 2]: just the values
    [...m.entries()]    // => [["x", 1], ["y", 2]]: same as [...m]

/*
    - MAP OBJECTS can also be iterated using the FOREACH() method that was
        first implemented by the Array class.
*/
    m.forEach((value, key) => {  // note value, key NOT key, value
        // On the first invocation, value will be 1 and key will be "x"
        // On the second invocation, value will be 2 and key will be "y"

    });

/*
    - It may seem strange that the value parameter comes before the key
        parameter in the code above, since with FOR/OF iteration, the key comes first. As noted at the start of this section, you can think of a map as a generalized array in which integer array indexes are replaced with arbitrary key values. The FOREACH() method of arrays passes the array element first and the array index second, so, by analogy, the FOREACH() method of a map passes the map value first and the map key second.






    *** WEAKMAP ***
    ---------------
    - The WEAKMAP class is a variant (but not an actual subclass) of the MAP
        class that does not prevent its key values from being garbage collected. Garbage collection is the process by which the JavaScript interpreter reclaims the memory of objects that are no longer "reachable" and cannot be used by the program. A regular map holds "strong" references to its key values, and they remain reachable through the map, even if all other references to them are gone. The WeakMap, by contract, keeps "weak" references to its key values so that they are not reachable through the WeakMap, and their presence in the map does not prevent their memory from being reclaimed.

    - The WeakMap() constructor is just like the Map() constructor, but there
        are some significant differences between WeakMap and Map:

    ** WeakMap keys must be objects or arrays; primitive values are not subject
        to garbage collection and cannot be used as keys.
    ** WeakMap implements only the GET(), SET(), HAS(), and DELETE() methods.
        In particular, WeakMap is not iterable and does not define KEYS(), VALUES(), or FOREACH(). If WeakMap was iterable, then its keys would be reachable and it wouldn't be weak.
    ** similarly, WeakMap does not implement the SIZE property because the size
        of a WeakMap could change at any time as objects are garbage collected.


    - The intended use of WeakMap is to allow you to associate values with
        objects without causing memory leaks. Suppose, for example, that you are writing a function that takes an object argument and needs to perform some time-consuming computation on that object. For efficiencey, you'd like to cache the computed value for later reuse. If you use a Map object to implement the cache, you will prevent any of the objects from ever being reclaimed, but by using a WeakMap, you avoid this problem. (You can often achieve a similar result using a private Symbol property to cache the computed value directly on the object.)
*/
