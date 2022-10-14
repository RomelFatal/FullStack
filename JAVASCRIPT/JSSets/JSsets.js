/*
    ***** SETS IN JAVASCRIPT *****
    ------------------------------
    - The SET OBJECT lets you store unique values of any type, whether
        primitive values or object references.

    - You can push items into a set and iterate them similar to a plain
        JavaScript array, but unlike array, you cannot add a value to a SET if the value already exist in it.

    - To create a new SET:
*/
    const mySet = new Set();
//Or you can create a set from any iterable object to give it starting values:
    const arr = [1, 2, 3, 4, 4, 5];
    const mySet = new Set(arr);     // {1, 2, 3, 4, 5}

/*
    - In the example above the set content would be {1, 2, 3, 4, 5}. Note that
        the value 4 appears only once, unlike in the original array used to create it.

    - To add a value to a SET, use the .ADD() method:
*/
    mySet.add(5);

/*
    - If the value already exist in the set it will not be added again, as SETS
        contain unique values.
    - Note that the .ADD() method returns the set itself, so you can chain add
        calls together:
*/
    mySet.add(1).add(2).add(3);


/*
    ** REMOVING VALUE FROM A SET **
    -------------------------------
    - To remove a value from a set, use .DELETE() method:
*/
    mySet.delete(some_value);

/*
    - This function will return TRUE if the value existed in the set and was
        removed, or FALSE otherwise.



    ** CONVERTING SETS TO ARRAYS **
    -------------------------------
    - Sometimes you may need to convert a SET to an array, for example to be
        able to use Array.prototype methods like .FILTER(). In order to do so, use Array.from() or destructuring assignment.
*/
    var mySet = new Set([1, 2, 3, 4]);
    const myArray = Array.from(mySet);
    const myArray = [...mySet];

// Now you can filter the array to contain only even numbers and convert it
// back to SET using SET constructor:
    mySet = new Set(myArray.filter(x => x % 2 === 0));
    // mySet now contains only even numbers
    console.log(mySet);     // {2, 4}


/*
    ** ITERATING SETS **
    --------------------
    - You can use a simple FOR-OF loop to iterate a SET:
*/
    const mySet = new Set([1, 2, 3]);

    for (const value of mySet) {
        console.log(value);     // logs 1, 2, and 3
    }


/*
    - When iterating over a set, it will always return values in the order they
        were first added to the set. For example:
*/
    const set = new Set([4, 5, 6])
    set.add(10);
    set.add(5);  //5 already exists in the set
    Array.from(set) //[4, 5, 6, 10]


/*
    - There's also a .FOREACH() method, similar to Array.prototype .FOREACH().
        It has two parameters, callback, which will be executed for each element, and optional thisArg, which will be used as THIS when executing callback.

    - Callback has three arguments. The first two arguments are both the
        current element of SET (for consistency with Array.prototype .FOREACH() and Map.prototype .FOREACH()) and third argument is the SET itself.
*/
    mySet.forEach((value, value2 set) => console.log(value)); //logs 1, 2, and 3










/*
    ***** SETS ANOTHER LOOK *****
    -----------------------------
    - SETS were introduced to the specification in ES6. A SET is a data
        structure that represents a collection of unique values, so it cannot include any duplicate values. They are similar in concept to a MATHEMATICAL SET, although (for the time being at least) they don't contain MATHEMATICAL SET operations such as union, intersection and product.

    - SETS offer a useful way to keep track of data without having to check if
        any values have been duplicated. It's also quick and easy to check if a particular value is in a set, which can be a slow operation if an array is used.


    ** CREATING SETS **
    -------------------
    - An empty SET is created using the NEW operator and SET() constructor:
*/
    const list = new Set();


/*
    ** ADDING VALUES TO SETS **
    ---------------------------
    = Values can be placed into a SET using the ADD method:
*/
    list.add(1);    // Set {1}

// Multiple items can be added to the SET by repeating the ADD() method:
    list.add(2).add(3).add(4)   // Set {1, 2, 3, 4}


// If you try to add a value that is already contained in the SET, then the
// operation is simply ignored:
    list.add(1);    // Set {1, 2, 3, 4}


// Multiple values can be added to a SET in one go by placing them inside an
// array that is provided as an argument:
    const numbers = new Set([1, 2, 3,]);

// To see the contents of a SET, simply enter the name of the variable that
// refers to it:
    numbers     // Set {1, 2, 3}


// If any values are repeated in the array, then they will only appear once in
// the SET:
    const moreNumbers = new Set([7, 7, 7, 7, 7, 8, 8, 8, 9, 9]);
    moreNumbers     // Set {7, 8, 9}


/*
    - This gives a convenient way of eliminating any duplicate values from an
        array in a single operation.

    - If a string is used as the argument then each character will be added as
        a separate element, with any repeated characters ignored:
*/
    const letters = new Set('hello');
    letters     // Set {'h', 'e', 'l', 'o'}


// If you want to add separate words, you need to use the ADD() method:
    const words = new Set().add('the').add('quick').add('brown').add('fox');
    words   // Set {'the', 'quick', 'brown', 'fox'}


/*
    - All non-primitive values, such as arrays and objects, are considered
        unique values, even if they contain the same values. On the face of it, this appears to allow duplicate values appear in a set:
*/
    const arrays = new Set().add([1]).add([1]);
    arrays  // Set {[1], [1]}


// The two arrays may look the same, but are considered different objects. This
// can be seen with the following strict equality test:
    [1] === [1];    // false


/*
    - Type coercion is not used when values are added to a SET, so the string
        '2' will be added as a new entry, even if the number 2 is already an
        element of the set
*/
    const mixedTypes = new Set().add(2).add('2');
    mixedTypes      // Set {2, '2'}



/*
    ** SET METHODS **
    -----------------
    - The number of values in a SET can be found using the SIZE() method:
*/
    const jla = new Set().add('Superman').add('Batman').add('Wonder Woman')
    jla     // Set {'Superman', 'Batman', 'Wonder Woman'}
    jla.size();     // 3


/*
    - The HAS() method can be used to check if a value is in a SET. This
        returns a boolean value of TRUE or FALSE:
*/
    jla.has('Superman');        // TRUE
    jla.has('Green Lantern');   // FALSE



/*
    - The HAS() method that sets use is a very efficient operation and much
        faster than using the INCLUDES() or INDEXOF() methods to check if a value is in an array.

    - SETS do not have index notation for inspecting individual entries, so you
        can't find the value of the first element in a set like this:
*/
    jla[0]  // undefined



/*
    ** REMOVING VALUES FROM SETS **
    -------------------------------
    - The DELETE() method can be used to remove a value from a SET. This
        returns a boolean value of TRUE if the value was removed from the SET, or FALSE if the value wasn't in the set and couldn't be removed:
*/
    jla.delete('Superman');     // TRUE
    jla.delete('Flash');        // FALSE


// The CLEAR() method can be used to remove ALL values from a SET:
    jla.clear();
    jla         // Set {}
    jla.size    // 0



/*
    ** CONVERTING SETS TO ARRAYS **
    -------------------------------
    - A SET can be converted into an array by placing the SET, along with the
        SPREAD OPERATOR directly inside an array literal

        To demonstrate this, first we'll create a SET of three items:
*/
    const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans')
    shoppingSet     // Set {'Apples', 'Bananas', 'Beans'}

    // Then we convert it into an array:
    const shoppingArray = [...shoppingSet]
    shoppingArray   // ['Apples', 'Bananas', 'Beans']


/*
    - It's also possible to use the ARRAY.FROM() method to convert a SET into
        an array. The following code would achieve the same result as using the spread operator above:
*/
    const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
    const shoppingArray = Array.from(shoppingSet);


/*
    - By combining this use of the spread operator with the ability to pass an
        array to the NEW SET() constructor, we now have a convenient way to create a copy of an array with any duplicate values removed:
*/
    const duplicate = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9];
    // [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9]

    const nonDuplicate = [...new Set(repeatedArray)];
    // [3, 1, 4, 5, 9, 2, 6]



/*
    ** WEAK SETS **
    ---------------
    - When objects are added to SETS, they will be stored there as long as the
        set exists, even if the original reference to the object is removed. The technical term for this is the object is prevented from being GARBAGE-COLLECTED, which can cause a MEMORY LEAK. This can be seen in the following example:
*/
    let array = [1, 2, 3];
    const strong = new Set().add(array);

    array = null;   // remove reference to the original

    strong          // Set {[1, 2, 3]}

// The array still exists inside the set and we can get the original value of
// array back using the SPREAD OPERATOR
    array = [...strong][0];
    array       // [1, 2, 3]



/*
    ** MEMORY LEAKS **
    ------------------
    - A MEMORY LEAK occurs when a program retains references to values that
        can no longer be accessed in its memory. This means that memory is being used to store values that are no longer required by the program, effectively wasting system resources.

    - Memory leaks can cause problems by gradually reducing the overall memory
        available, which can cause the program, or even the entire system, to run more slowly.

    - Most modern programming language, including JavaScript, employ various
        dynamic memory management techniques such as GARBAGE COLLECTION, which is the process of automatically removing items from memory that are no longer required by the program. Some languages, such as C++, require the programmer to manually manage memory by removing items from memory once they are finished with.

    - WEAK SETS avoid this situation by GARBAGE COLLECTING any references to a
        'dead object' that's had its original reference removed.

    - To create a WEAK SET, the NEW operator and the WEAKSET() constructor in
        the same way that we created a SET:
*/
    const weak = new WeakSet();

/*
    - Only non-primitive data types can be added to WEAK SETS. Trying to add
        primitive values will throw a type error:
*/
    weak.add(2);    // TypeError: Invalid value used in weak set


/*
    - Apart from these restrictions, WEAK SETS behave in the same way as
        regular SETS, and have the HAS(), ADD(), and DELETE() methods that work in the same way.

    - In the next example we can see what happens if we add an array to a WEAK
        SET:
*/
    const array = [1,2,3];
    weak.add(array);        // WeakSet {}


/*
    - Because WEAK MAPS use weak references to objects, they don't have access
        to a list of values they contain. This makes the return value in the example look as though the WEAK SET is empty, in fact it isn't.

    - We can confirm it does indeed contain the array object by using the HAS()
        method:
*/
    weak.has(array);    // TRUE

// We can remove the array from the WEAK SET using the DELETE() method:
    weak.delete(array);     // TRUE

// And check it's been removed using the HAS() method again:
    weak.has(array);        // FALSE










/*
    ***** SETS ANOTHER LOOK *****
    -----------------------------
    - A SET is a collection of values, like an array is. Unlike arrays,
        however, SETS are not ordered or indexed, and they do not allow duplicates: a value is either a member of a set or it is not a member; it is not possible to ask how many times a value appears in a SET.

        Create a SET OBJECT with the SET() constructor:
*/
    let s = new Set();          // A new, empty SET
    let t = new Set([1, 5]);    // A new SET with two members


/*
    - The argument to the SET() constructor need not be an array: any iterable
        object (including other SET OBJECTS) is allowed:
*/
    let t = new Set(s);                 //A new SET that copies the element of s
    let unique = new Set("Mississippi");//4 elements: "M", "i", "s", and "p"

/*
    - The SIZE property of a set is like the length property of an array: it
        tells you how many values the set contains:
*/
    unique.size     // => 4


/*
    - SETS don't need to be initialized when you create them. You can add and
        remove elements at any time with ADD(), DELETE(), and CLEAR().
        Remember that SETS cannot contain duplicates, so adding a value to a set when it already contains that value has no effect:
*/
    let s = new Set();  // Start empty
    s.size              // => 0
    s.add(1);           // Add a number
    s.size              // => 1; now the SET has one member
    s.add(1);           // Add the same number again
    s.size              // => 1; the size does not change
    s.add(true);        // Add another value; note that it is fine to mix types
    s.size              // => 2
    s.add([1,2,3]);     // Add an array value
    s.size              // => 3; the array was added, not its elements
    s.delete(1)         // => true: successfully deleted element 1
    s.size              // => 2: the size is back down to 2
    s.delete("test")    // => false: "test" was not a member, deletion failed
    s.delete(true)      // => true: delete succeeded
    s.delete([1,2,3])   // => false: the array in the SET is different
    s.size              // => 1: there is still that one array in the SET
    s.clear();          // Remove everything from the set
    s.size              // => 0


/*
    - There are a few important points to note about this code:

    ** The ADD() method takes a single argument; if you pass an array, it adds
        the array itself to the SET, not the individual array elements. ADD() always returns the SET it is invoked on, however, so if you want to add multiple values to a SET, you can used chained methods calls like s.add('a').add('b').add('c');.

    ** The DELETE() method also only deletes a single SET element at a time.
        Unlike ADD(), however, DELETE() returns a boolean value. If the value you specify was actually a member of the SET, then DELETE() removes it and returns TRUE. Otherwise, it does nothing and returns FALSE.

    ** Finally, it is very important to understand that SET membership is based
        on strict equality checks, like the === operator performs. A SET can contain both the number 1 and the string "1", because it considers them to be distinct values. When the values are objects (or arrays or functions), they are also compared as if with ===. This is why we were unable to delete the array element from the SET in the code. We added an array to the SET and then tried to remove that array by passing a different array (albeit with the same elements) to the DELETE() method. In order for this to work, we would have had to pass a reference to exactly the same array.



    - In practice, the most important thing we do with SETS is not to add and
        remove elements from them, but to check to see whether a specified value is a member of the SET. We do this with the HAS() method:
*/
    let oneDigitPrimes = new Set([2,3,5,7]);
    oneDigitPrimes.has(2)   // => true: 2 is a one-digit prime number
    oneDigitPrimes.has(3)   // => true: so is 3
    oneDigitPrimes.has(4)   // => false: 4 is not a prime
    oneDigitPrimes.has("5") // => false: "5" is not even a number



/*
    - The most important thing to understand about SETS is that they are
        optimzed for membership testing, and no matter how many members the set has, the HAS() method will very fast. The INCLUDES() method of an array also performs membership testing, but the time it takes is proportional to the size of the array, and using an array as a set can be much, much slower than using a real SET OBJECT.

    - The SET class is iterable, which means that you can use a FOR/OF loop to
        enumerate all of the elements of a set:
*/
    let sum = 0;
    for (let p of oneDigitPrimes) { // Loop through the one-digit primes
        sum += p;                   // and add them up
    }
    sum                             // => 17: 2 + 3 + 5 + 7

// Because SET OBJECTS are iterable, you can convert them to arrays and
// argument list with the ... SPREAD OPERATOR
[...oneDigitPrimes]          // => [2,3,5,7]: the SET converted to an array
Math.max(...oneDigitPrimes) // => 7: SET elements passed as function arguments



/*
    - SETS are often described as "unordered collections." This isn't exactly
        true for the JavaScript SET class, however. A JavaScript SET is undefined: you can't ask for the first or third element of a SET the way you can with an array. But the JavaScript SET class always remembers the order that elements were inserted in, and it always uses this order when you iterate a SET: the first element inserted will be the first one iterated (assuming you haven't deleted it first), and the most recently inserted element will be the last one iterated.

    - In addition to being iterable, the SET class also implements a FOREACH()
        method that is similar to the array method of the same name:
*/
    let product = 1;
    oneDigitPrimes.forEach(n => { product *= n;});
    product         // 210: 2 * 3 * 5 * 7


/*
    - The FOREACH() of an array passes array indexes as the second argument to
        the function you specify. SETS don't have indexes, so the SET class' version of this method simply passes the element value as both the first and second argument.
*/
