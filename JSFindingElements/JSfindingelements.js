/*
    Getting Elements From The DOM(Document Object Model) Structure
   ----------------------------------------------------------------
   - The DOM provides several methods that allow us to access any element on a
    page. These methods will return a node object or a node list, which is an
    ARRAY-LIKE object. These objects can then be assigned to a variable and be
    inspected or modified.
   - For example, we can access the BODY element of a web page and assign it to
    the variable BODY by entering the following code into the browser console

        ***** const body = document.body *****




    GET ELEMENTS BY ID
   --------------------
   - The getElementsByTagId() method does exactly what it says. It returns a
    reference to the element with a unique ID attribute that is given as an
    argument.
   - For example, we can get a reference to the <h1> heading element with the
    ID of 'title'.

        ***** const h1 = document.getElementsByTagId('title'); *****







    GET ELEMENTS BY TAG NAME
   --------------------------
   - The document.getElementsByTagName() method returns all child elements with
    a given tag name.
   - Implement your own version of this as a function that takes a node and a
    string (the tag name) as arguments and returns an ARRAY containing all
    descendant element nodes with the given tag name.

  - To find the tag name of an element, use its nodeName property. But note that
    this will return the tag name in all uppercase. Use the toLowerCase or
    toUpperCase string methods to compensate for this.
*/

// Example
function Func2() {
    // The x variable store an ARRAY containing all descendant element nodes with the given tag name
    var x = document.getElementsByTagName("div");

    // Accessing elements of the ARRAY individually
    // x[0].style.fontFamily = "Courier New";
    // x[1].style.color = "Blue";
    // x[2].style.fontStyle = "italic";
    // x[3].style.backgroundColor = "Red";


    // Accessing all elements of the ARRAY through loop
    for(let i = 0; i < x.length; i++) {
        x[i].style.fontWeight = "Bolder";
        x[i].style.backgroundColor = "Yellow";
    }
}





/*
    GET ELEMENTS BY CLASS NAME
   ----------------------------
   - getElementsByClassName() will return a LIVE NODE LIST of all elements that
    have the class name that is supplied as an argument.
   - For example, we can return a collection of all elements with the class of
    'hero' using the following code:

        ***** const heroes = document.getElementsByClassName('hero'); *****

*/

// Example
function Func1() {
    // The x variable will return a LIVE NODE LIST of all elements that have
    // the class name that is supplied as an argument.
    var x = document.getElementsByClassName('cls1');


    // Access elements of the LIVE NODE LIST individually
    // x[0].style.fontStyle = "italic";
    // x[1].style.fontColor = "Blue";
    // x[2].style.fontColor = "Bolder";



    // Accessing all elements of the LIVE NODE LIST through loop
    for(var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "Yellow";
    }
}




/*
**** The Difference Between These Methods AND When To Use Each One Of Them ****
--------------------------------------------------------------------------------
    1) getElementsByTagId
    ---------------------
    ** When you want to access a single or a unique element on a webpage, it's
        best to use the ID method **



    2) getElementsByTagName AND getElementsByClassName
    --------------------------------------------------
    ** When you want to access multiple elements on a webpage, it's best to use
        either one of these methods **
*/
