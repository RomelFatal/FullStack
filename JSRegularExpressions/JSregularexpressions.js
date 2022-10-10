/*
    ***** REGULAR EXPRESSIONS IN JAVASCRIPT *****
    ---------------------------------------------
    - JavaScript defines a datatype known as a REGULAR EXPRESSION (or RegExp)
        for describing and matching patterns in strings of text. RegExps are not one of the fundamental datatypes in JavaScript, but they have a literal syntax like numbers and strings do, so they sometimes seem like they are fundamental. The grammar of REGULAR EXPRESSION literals is complex and the API they define is nontrivial.
    - Text between a pair of slashes constitues a REGULAR EXPRESSION literal.
        The second slash in the pair can also be followed by one or more letters, which modify the meaning of the pattern.
*/
    //Example
    /^HTML/;            // Match the letters H T M L at the start of a string
    /[1-9][0-9]*/;      // Match a nonzero digit, followed by any # of digits
    /\bjavascript\b/i;  // Match "javascript" as a word, case-insensitive


/*
    - A REGULAR EXPRESSION is an object that describes a textual pattern. The
        JavaScript RegExp class represents REGULAR EXPRESSIONS, and both String and RegExp define methods that use REGULAR EXPRESSION to perform powerful pattern-matching and seach-and-replace functions on text. In order to use the RegExp API effectively, however, you must also learn how to describe patterns of text using the REGULAR EXPRESSION grammar, which is essentially a mini programming language of its own.
    - Fortunately, the JavaScript REGULAR EXPRESSION grammar is quite similar to
        the grammar used by many other programming languages, so you may already be familiar with it. (And if you are not, the effort you invest in learning JavaScript REGULAR EXPRESSIONS will probably be useful to you in other programming contexts as well.)



    ** DEFINING REGULAR EXPRESSIONS **
    ----------------------------------
    - In JavaScript, REGULAR EXPRESSIONS are represented by RegExp objects.
        RegExp objects may be created with RegExp() constructor, of course, but they are more often created using a special literal syntax.
    - Just as string literals are specified as characters within quotation
        marks, REGULAR EXPRESSION literals are specified as characters within a pair of slash (/) characters. Thus, your JavaScript code may contain lines like this:
*/
    let pattern = /s$/;

/*
    - This line creates a new RegExp object and assigns it to the variable
        pattern. This particular RegExp object matches any string that ends with the letter "s." This REGULAR EXPRESSION could have equivalently been defined with the RegExp() constructor, like this:
*/
    let pattern = new RegExp("s$");


/*
    - Regular expression pattern specifications consist of a series of
        characters. Most characters, including all alphanumeric characters, simply describe characters to be matched literally. Thus, the regular expression /java/ matches any string that contains the substring "java". Other characters in regular expressions are not matched literally but have special significance.
    - For example, the regular expression /s$/ contains two characters.
    - The first, "s", matches iteslf literally.
    - The second, "$", is a special meta-character that matches the end of a
        string.
    - Thus, this REGULAR EXPRESSION matches any string that contains the letter
        "s" as its last character.


    - As we'll see, REGULAR EXPRESSIONS can also have one or more FLAG
        characters that affect how they work. Flags are specified following the second slash character in RegExp literals, or as a second string argument to the RegExp() constructor. If we wanted to match strings that end with "s" or "S", for example, we could use the i FLAG with our regular expression to indicate that we want case-insensitive matching.
*/
    let pattern = /s$/i;


/*
    ** LITERAL CHARACTERS **
    ------------------------
    - All alphabetic characters and digits match themselves literally in
        REGULAR EXPRESSIONS. JavaScript REGULAR EXPRESSION syntax also supports certain nonalphabetic characters through escape sequences that begins with a backslash(\).

    - A number of punctuation characters have special meanings in REGULAR
        EXPRESSIONS. They are:


        ^ $ . * + ? = ! : | \ / ( ) [ ] { }

    - Some of these characters have special meaning only within certain context
        of a regular expression and are treated literally in other contexts. As a general rule, however, if you want to include any of these punctuation characters literally in a regular expression, you must precede them with a \. Other punctuation characters, such as quotation marks and @, do not have special meaning and simply matches themselves literally in a regular expression.





    ** CHARACTER CLASSES **
    -----------------------
    - Individual literal characters can be combined into CHRACTER CLASSES by
        placing them within square brackets. A character class matches any one character that is contained within it. Thus, the REGULAR EXPRESSION
        /[abc]/ matches any one of the letters a, b, or c.
    - Negated character classes can also be defined; these matches any
        character except those contained within the brackets. A negated character class is specified by placing a caret (^) as the first character inside the left bracket. The RegExp /[^abc]/ matches any one character other than a, b, or c.
    - Character classes can use a hyphen to indicate a range of characters. To
        match any one lowercase character from the Latin alphabet, use /[a-z]/, and to match any letter or digit from the Latin alphabet, use /[a-zA-Z0-9]/. (And if you want to include an actual hypen in your character class, simply make it the last character before the right bracket.)


    - Because certain character classes are commonly used, the JavaScript
        regular expression syntax includes special characters and escape sequences to represent these common classes. For example, \s matches the space character, the TAB character, and any other Unicode whitespace character; \S matches any character that is not Unicode whitespace. (Note that several of these character-class escape sequences match only ASCII characters and have not been extended to work with Unicode characters. You can however, explicitly define your own Unicode character classes; for example, /[\u0400-\u04ff]/ matches any one Cyrillic character.)


    - Note that the special character-class escapes can be used within square
        brackets. \s matches any whitespace character, and \d matches any digit, so /[\s\d]/ matches any one whitespace character or digit.
    - Note that there is one special case. As you'll see later, the \b escape
        has a special meaning. When used within a character class, however, it represents the backspace character. Thus, to represent a backspace character literally in a REGULAR EXPRESSION, use the character class with one element: /[\b]/.




    ** REPETITION **
    ----------------
    - With the REGULAR EXPRESSION syntax you've learned so far, you can
        describe a two-digit number as /\d\d/ and a four-digit number as
        /\d\d\d\d/. But you don't have any way to describe, for example, a number that can have any number of digits or a string of three letters followed by an optional digit. These more complex patterns use regular expression syntax that specifies how many times an element of a regular expression may be repeated.

    - The characters that specify repetition always follow the pattern to which
        they are being applied. Because certain types of repetition are quite commonly used, there are special characters to represent these cases. For example, + matches one or more occurrences of the previous pattern.


    {n,m}   Match the previous item at least n times but no more than m times.
    {n,}    Match the previous item n or more times.
    {n}     Match exactly n occurrences of the previous item.
    ?       Match zero or one occurrences of the previous item. That is, the
            previous item is option. equivalent to {0,1}.
    +       Match one or more occurrences of the previous item. Equivalent to
            {1,}.
    *       Match zero or more occurrences of the previous item. Equivalent to
            {0,}.
*/
// The following lines shows some example:
let r = /\d{2,4}/;  // Match between two and four digits
r = /\w{3}\d?/;     // Match exactly three word characters and an optional digit
r = /\s+java\s+/;   // Match "java" with one or more spaces before and after
r = /[^(]*/;        // Match zero or more characters that are not open parens


/*
    - Note that in all of these examples, the repetition specifiers apply to
        these characters may match zero instances of whatever precedes them, they are allowed to match nothing. For example, the REGULAR EXPRESSION
        /a* / actually matches the string "bbbb" because the string contains zero occurrences of the letter a!
*/



/*
    ** ALTERNATION, GROUPING, AND REFERENCES **
    -------------------------------------------
    - The REGULAR express grammar includes special characters for specifying
        alternatives, grouping subexpressions, and referring to previous subexpressions. The | character separates alternationves. For example,
        \ab|cd|ef/ matches the string "ab" or the string "cd" or the string "ef". And /\d{3}|[a-z]{4}/ matches either three digits or four lowercase letters.

    - Note that alternatives are considered left to right until a match is
        found. If the left alternative matches, the right alternative is ignored, even if it would have produced a "better" match. Thus, when the pattern /a|ab/ is applied to the string "ab", it matches only the first letter.

    - Parentheses have several purpose in regular expressions. Once purpose is
        to group separate items into a single subexpression so that the items can be treated as a single unit by |,*,+,?, and so on. For example,
        /java(scrpt)?/ matches "java" followed by the optional "script". And
        /(ab|cd)+|ef/ matches either the string "ef" or one or more repetitions of either of the strings "ab" or "cd".

    - Another purpose of parentheses in regular expressions is to define
        subpatterns within the complete pattern. When a regular expression is successfully matched against a target string, it is possible to extract the portions of the target string that matched any particular parenthesized subpattern. For example, suppose you are looking for one or more lowercase letters followed by one or more digits. You might use the pattern /[a-z]+\d+/. But suppose you only really care about the digits at the end of each match. If you put that part of the pattern in parentheses (/[a-z]+(\d+)/), you can extract the digits from any matches you find.

    - a related use of parenthesized subexpressions is to allow you to refer
        back to a subexpression later in the same regular expression. This is done by following a \ character by a digit or digits. The digits refer to the position of the parenthesized subexpression within the regular expression. For example, \1 refers back to the first subexpression, and \3 refers to the third. Note that, because subexpressions can be nested within others, it is the position of the left parenthesis that is counted. In the following regular expression, for example, the nested subexpression ([Ss]cript) is referred to as \2:
*/
    /([Jj]ava([Ss]cript)?)\sis\s(fun\w*)/

/*
    - A reference to a previous subexpression of a regular expression does not
        refer to the pattern for that subexpression but rather to the text that matched the pattern. Thus, references can be used to enforce a constraint that separate portions of a string contain exactly the same characters. For example, the following regular expression matches zero or more characters within single or double quotes. However, it does not require the opening and closing quotes to match (i.e., botho single quotes or both double quotes):
*/
    /['"][^'"]*['"]/

    // To require the quotes to match, use a reference:
    /(['"])[^'"]*\1/

/*
    - The \1 matches whatever the first parenthesized subexpression matched. In
        this example, it enforces the constraint that the closing quote match the opening quote. This regular expression does not allow single quotes within double-quoted strings or vice versa. (It is not legal to use a reference within a character class, so you cannot write:
        /(['"])[^\1]*\1/.)


    - It is also possible to group items in a regular expression without
        creating a numbered reference to those items. Instead of simply grouping the items within (and), begin the group with (?: and end it with ). Consider the following pattern:
*/
    /([Jj]java(?:[Ss]cript)?)\sis\s(fun\w*)/

/*
    - In this example, the subexpression (?:[Ss]cript) is used simply for
        grouping, so the ? repitition character can be applied to the group. These modified parentheses do not produce a reference, so in this regular expression, \2 refers to the text matched by (fun\w*).
*/



/*
    ** SPECIFYING MATCH POSITION **
    -------------------------------
    - Many elements of a regular expression match a single character in a
        string. For example, \s matches a single character of whitespace. Other regular expression elements match the positions between characters instead of actual characters. \b, for example, matches an ASCII word boundary--the boundary between a \w (ASCII word character) and a \W (nonword character), or the boundary between an ASCII word character and the beginning or end of a string. Elements such as \b do not specify any characters to be used in a matched string; what they do specify, however, are legal position at which a match can occur. Sometimes these elements are called REGULAR EXPRESSION ANCHORS because they anchor the pattern to a specific position in the search string. The most commonly used anchor elements are ^, which ties the pattern to the begging of the string, and $, which anchors the pattern to the end of the string.

    - For example, to match the word "JavaScript" on a line by itself, you can
        use the regular expression /^JavaScript$/. If you want to search for "Java" as a word by itself (not as a prefix, as it is in "JavaScript"), you can try the pattern /\sJava\s/, which requires a space before and after the word. But there are two problems with this solution. First, it does not match "Java" at the beginning or the end of a string, but only if it appears with space on either side. Second, when this pattern does find a match, the matched string it returns has leading and trailing spaces, which is not quite what's needed. So instead of matching actual space characters with \s, match (or anchor to) word boundaries with \b. The resulting expression is /\bJava\b/. The element \B anchors the match to a location that is not a word boundary. Thus, the pattern /\B[Ss]cript/ matches "JavaScript" and "postscript", but not "script" or "Scripting".

    - You can also use arbitrary regular expressions as anchor conditions. If
        you include an expression within (?= and ) characters, it is a lookahead assertion, and it specifies that the enclosed characters must match, without actually matching them. For example, to match the name of a common programming language, but only if it is followed by a colon, you could use /[Jj]ava([Ss]cript)?(?=\:)/. This pattern matches the word "JavaScript" in "JavaScript: The Definitive Guide", but it does not match "Java" in "Java in a Nutshell" because it is not followed by a colon.

    - If you instead introduce an assertion with (?!, it is a negative
        lookahead assertion, which specifies that the following characters must not match. For example, /Java(?!Script)([A-Z]\w*)/ matches "Java" followed by a capital letter and any number of additional ASCII word characters, as long as "Java" is not followed by "Script". It matches "JavaBeans" but not Javanese", and it matches "JavaScrip" but not "JavaScript" or "JavaScripter".
*/


/*
    *** FLAGS ***
    -------------
    - Every REGULAR EXPRESSION can have one or more flags associated with it or
        alter its matching behavior. JavaScript defines six possible flags, each of which is represented by a single letter. Flags are specified after the second / character of a regular expression literal or as a string passed as the second argument to the RegExp() constructor.


    The supported flags and their meanings are:
    *g*:
    ----
    - The "g" flag indicates that the regular expression is "global"--that is,
        that we intend to use it to find all matches within a string rather than just finding the first match. This flag does not alter the way that pattern matching is done, it does alter the behavior of the String match() method and the RegExp exec() method in important ways.

    *i*:
    ----
    - The "i" flag specifies that pattern matching should be case-insensitive.

    *m*:
    ----
    - The The "m" flag specifies that matching should be done in "multiline"
        mode. It says that the RegExp will be used with multiline strings and that the ^ and $ anchors should match both the beginning and end of the string and also the beginning and end of individual lines within the string.

    *s*:
    ----
    - Like the "m" flag, the "s" flag is also useful when working with text
        that includes newlines. Normally, a "." in a regular expression matches any character except a line terminator. When the "s" flag is used, however, "." will match any character, including line terminators. The "s" flag was added to JavaScript in ES2018 and, as of early 2020, is supported in Node, Chrome, Edge, and Safari, but not Firefox.

    *u*:
    ----
    - The "u" flag stands for Unicode, and it makes the regular expression
        match full Unicode codepoints rather than matching 16-bit values. This flag was introduced in ES6, and you should make a habit of using it on all regular expressions unless you have some reason not to. If you do not use this flag, then your RegExps will not work well with text that includes more than 16 bits. Without the "u" flag, the "." character matches any 1 UTF-16 16-bit value. With the flag, however, "." matches one Unicode codepoint, including those that have more than 16 bits. Setting the "u" flag on a RegExp also allows you to use the new \u{...} escape sequence for Unicode character and also enables the \p{...} notation for Unicode character classes.

    *y*:
    ----
    - The "y" flag indicates that the regular expression is "sticky" and should
        match at the beginning of a string or at the first character following the previous match. When used with a regular expression that is designed to find a single match, it effectively treats that regular expression as if it begins with ^ to anchor it to the beginning of the string. This flag is more useful with regular expressions that are used repeatedly to find all matches within a string. In this case, it causes special behavior of the String match() method and the RegExp exec() method to enforce that each subsequent match is anchored to the string position at which the last one ended.
*/











/*
    ***** REGULAR EXPRESSIONS ANOTHER LOOK *****
    --------------------------------------------
    - REGULAR EXPRESSIONS are a way to describe patterns in string data. They
        form a small, separate language that is part of JavaScript and many other languages and systems.

    - REGULAR EXPRESSIONS are both terribly awkward and extremely useful. Their
        syntax is cryptic, and the programming interface JavaScript provides for them is clumsy. But they are a powerful tool for inspecting and processing strings. Properly understanding regular expressions will make you a more effective programmer.



    *** CREATING A REGULAR EXPRESSION ***
    -------------------------------------
    - A REGULAR EXPRESSION is a type of object. It can be either constructed
        with the RegExp constructor or written as a literal value by enclosing a pattern in forward slash (/) characters.
*/
    let re1 = new RegExp("abs");
    let re2 = /abc/;


/*
    - Both of those regular expression objects represent the same pattern: an
        "a" character followed by a "b" followed by a "c".
    - When using the RegExp constructor, the pattern is written as a normal
        string, so the usual rules apply for backslashes.
    - The second notation, where the pattern appears between slash
        characters, treats backslashes somewhat differently. First, since a forward slash ends the pattern, we need to put a backslash before any forward slash that we want to be part of the pattern. In addition, backslashes that aren't part of special character codes (like \n) will be preserved, rather than ignored as they are in strings, and change the meaning of the pattern. Some characters, such as question marks and plus signs, have special meanings in regular expressions and must be preceded by a backslas if they are meant to represent the character itself.
*/
    let eighteenPlus = /eighteen\+/;


/*
    ** TESTING FOR MATCHES **
    -------------------------
    - REGULAR EXPRESSION objects have a number of methods. The simplest one is
        TEST. If you pass it a string, it will return a Boolean telling you whether the string contains a match of the pattern in the expression.

        console.log(/abc/.test("abcde"));
        console.log(/abc/.test("abxde"));


    - A REGULAR EXPRESSION consisting of only nonspecial characters simply
        represents that sequence of characters. If "abc" occurs anywhere in the string we are testing against (not just at the start), TEST will return true.



    ** SETS OF CHARACTERS **
    ------------------------
    - Finding out whether a string contains "abc" could just as well be done
        with a call to indexOf. Regular expressions allow us to express more complicated patterns.
    - Say we want to match any number. In a regular expression, putting a set
        of characters between square brackets makes that part of the expression match any of the characters between the brackets.

    - Both of the following expressions match all strings that contain a digit:

        console.log(/[0123456789]/.test("in 1992"));
        console.log(/[0-9]/.test("in 1992"));


    - Within square brackets, a hyphen (-) between two characters can be used
        to indicate a range of characters, where the ordering is determined by the character's Unicode number. Characters 0 to 9 sit right next to each other in this ordering (codes 48 to 57), so [0-9] covers all of them and matches any digit.


    - A number of common character groups have their own built-in shortcuts.
        Digits are one of them:     \d means the same thing as [0-9].

        \d  Any digit character
        \w  An alphanumeric character ("word character")
        \s  Any whitespace character (space, tab, newline, and similar)
        \D  A character that is not a digit
        \W  A nonalphanumeric character
        \S  A nonwhitespace character
        .   Any character except for newline



    - So you could match a date and time format like 01-30-2003 15:20 with
        following expression:
*/
    let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d;
    console.log(dateTime.test("01-30-2003 15:20"));     // true
    console.log(dateTime.test("30-jan-2003 15:20"));    // false



/*
    ** REPEATING PARTS OF A PATTERN **
    ----------------------------------
    - We now know how to match a single digit. What if we want to match a whole
        number--a sequence of one or more digits?
    - When you put a plus sign (+) after something in a regular expression, it
        indicates that the element may be replaced more than once. Thus, /\d+/ matches one or more digit characters.

        console.log(/'\d+'/.test("'123'"));     // true
        console.log(/'\d+'/.test("''"));        // false
        console.log(/'\d*'/.test("'123'"));     // true
        console.log(/'\d*'/.test("''"));        // true


    - The start (*) has a similar meaning but also allows the pattern to match
        zero times. Something with a star after it never prevents a pattern from matching--it'll just match zero instances if it can't find any suitable text to match.
    - A question mark makes a part of a pattern OPTIONAL, meaning it may occur
        zero times or one time. In the following example, the "u" character is allowed to occur, but the pattern also matches when it is missing.
*/
    let neighbor = /neighbou?r/;
    console.log(neighbor.test("neighbour"));        // true
    console.log(neighbor.test("neighbor"));         // true



/*
    - To indicate that a pattern should occur a precise number of times, use
        braces. Putting {4} after an element, for example, requires it to occur exactly four times. It is also possible to specify a range this way: {2,4} means the element must occur at least twice and at most four times.

    - Here is another version of the date and time pattern that allows both
        single and double-digit days, months, and hours. It is also slightly easier to decipher.
*/
    let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
    console.log(dateTime.test("1-30-2003 8:45"));           // true



/*
    ** GROUPING SUBEXPRESSIONS **
    -----------------------------
    - To use an operator like * or + on more than one element at a time, you
        have to use parentheses. A part of a regular expression that is enclosed in parentheses counts as a single element as far as the operators following it are concerned.
*/
    let cartoonCrying = /boo+(hoo+)+/i;
    console.log(cartoonCrying.test("Boohoooohoohooo"));     // true

/*
    - The first and second + characters apply only to the second o in boo and
        hoo, respectively. The third + applies to the whole group (hoo+), matching one or more sequences like that.
    - The "i" at the end of the expression in the example makes this
        REGULAR EXPRESSION case insensitive, allowing it to match the uppercase B in the input string, even though the pattern is itself all lowercase.





    ** MATCHES AND GROUPS **
    ------------------------
    - The TEST method is the absolute simplest way to match a regular
        expression. It tells you only whether it matched and nothing else. Regular expressions also have an EXEC (EXECUTE) method that will return null if no match was found and return an object with information about the match otherwise.
*/
    let match = /\d+/.exec("one two 100");
    console.log(match);                         //["100"]
    console.log(match.indexOf);                 // 8

/*
    - An object returned from EXEC has an index property that tell us where in
        the string the successful match begins. Other than that, the object looks like (and in fact is) an array of strings, whose first element is the string that was matched. In the previous example, this is the sequence of digits that we were looking for.

    - String values have a match method that behaves similarly.
*/
    console.log("one two 100".match(/\d+/));   //["100"]


/*
    - When the regular expression contains subexpressions grouped with
        parentheses, the text that matched those groups will also show up in the array. The whole match is always the first element. The next element is the part matched by the first group (the one whose opening parenthesis comes first in the expression), then the second group, and so on.
*/
    let quotedText = /'([^']*)'/;
    console.log(quotedText.exec("she said 'hello'"));   //["'hello'", "hello"]


/*
    - When a group does not end up being matched at all (for example, when
        followed by a question mark), its position in the output array will hold undefined. Similarly, when a group is matched multiple times, only the last match ends up in the array.
*/
    console.log(/bad(ly)?/.exec("bad"));        //["bad", undefined]
    console.log(/(\d)+/.exec("123"));           //["123", 3]


/*
    - Groups can be useful for extracting parts of a string. If we don't just
        want to verify whether a string contains a date but also extract it and construct an object that represents it, we can wrap parentheses around the digit patterns and directly pick the date out of the result of EXEC.
*/












/*
    ***** REGULAR EXPRESSIONS ANOTHER LOOK *****
    --------------------------------------------

    ** THE REGEXP OBJECT **
    -----------------------
    - A REGULAR EXPRESSION (or RegExp, for short) is a pattern that can be used
        to search strings for matches to the pattern. A common use if 'find and replace' type operations. For example, say you were looking for any word ending in 'ing', you could use the regular expression
        /[a-zA-Z]+ing$/.

    - REGULAR EXPRESSIONS can look a little strange; in fact, they're
        something of a dark art that could easily fill a whole book! They are certainly useful when manipulating text strings, though.




    *** CREATING REGULAR EXPRESSIONS ***
    ------------------------------------
    - There are TWO ways to create a regular expression. The first way, is to
        use the literal notation of writing the regular expression between forward slashes.
*/
    const pattern = /[a-zA-Z]+ing$/;

/*
    - Alternatively, you can create a new instance of the RegExp object using
        the NEW operator and a CONSTRUCTOR function:
*/
    const pattern = new RegExp('[a-zA-Z]+ing');


/*
    - Using literal regular expressions takes less typing, but there are
        advantages to using the constructor function as it lets you create regular expressions using strings, which can be useful when the regular expression is provided from user input; in a form, for example. Constructors also have the advantage of letting you create a regular expression using a variable.
*/
    const language = 'JavaScript';
    const pattern = new RegExp(language);

/*
    - Once you've created a regular expression object, you can use the TEST()
        method to see if a string (passed to the method as a parameter) matches the regular expression pattern. It returns TRUE if the pattern is in the string, and FALSE if it isn't.

    - We can see an example of the TEST() metho used below, using the same
        pattern we created earlier that tests if a word ends in 'ing':
*/
    pattern.test('joke');       // false
    pattern.test('joking');     // true
    pattern.test('jokingly');   // false


/*
    - The EXEC() method workds in the same way as the TEST() method, but instead
        of returning TRUE or FALSE, it returns an array containing the first match found, or NULL if there aren't any matches:
*/
    pattern.exec('joke');           // null
    pattern.exec('joking');         //[ 'joking', index: 0, input: 'joking']



/*
    ** BASIC REGULAR EXPRESSIONS **
    -------------------------------
    - At the most basic level, a regular expression will just be a string of
        characters, so the following will match the string 'JavaScript':
*/
    const pattern = /JavaScript/;       // /JavaScript/




/*
    ** CHARACTER GROUPS **
    ----------------------
    - Groups of characters can be placed together inside square brackets. This
        character group represents any one of the characters inside the brackets. For example, the following REGULAR EXPRESSION matches any vowel:
*/
    const vowels = /[aeiou]/        //[aeiou]/


/*
    - A sequence of characters can also be represented by placing a dash [-]
        between the first and the last characters; for example, all the uppercase letters can be represented as:
*/
    /[A-Z]/

    // The digits 0-9 can be represented as:
    /[0-9]/


/*
    - If a \^ character is placed at the start of the sequence of characters
        with the brackets, it negates the sequence, so the following REGULAR EXPRESSION represents any character that is NOT a capital letter:
*/
    /[^A-Z]/




/*
    - These groups can be combined with letters to make a more complex pattern.
        For example, the following REGULAR EXPRESSION represents the letter J (lowercase or capital) followed by a vowel, followed by a lowercase v, followed by a vowel:
*/
    pattern = /[Jj][aeiou]v[aeiou]/;
    pattern.test('JavaScript');             // true
    pattern.test('jive');                   // true
    pattern.test('hello');                  // false



/*
    ** REGULAR EXPRESSION PROPERTIES **
    -----------------------------------
    - REGULAR EXPRESSIONS are objects, and have the following properties:

    ** The GLOBAL property makes the pattern return all matches. By default the
        pattern only looks for the first occurrence of a match.

    ** The IGNORECASE property makes the pattern case-insensitive. By default,
        they are case sensitive.

    ** The MULTILINE property makes the pattern multiline. By default, a pattern
        will stop at the end of a line.


    - The following flags can be placed after a regular expression literal to
        change the default properties:

        ** g sets the GLOBAL property to TRUE
        ** i sets the IGNORECASE property to TRUE
        ** m set the MULTILINE property to TRUE


    - For example, the following REGULAR EXPRESSION will match 'JavaScript' or
        'javascript' because the IGNORECASE propter is set to TRUE:
*/
    pattern = /java/i
    pattern.test('JavaScript');         // true


/*  - These properties can be checked using the dot notation, but cannot be
        updated once the REGULAR EXPRESSION has been created, as can be seen in the following example:
*/
    pattern = /java/i
    pattern.ignoreCase              // checking it is TRUE      -> true
    pattern.ignoreCase = false      // this won't work          -> false
    pattern.ignoreCase              // has it changed? Nope!    -> true

// The only way to change the IGNORECASE property to FALSE is to redefine the
// regular expression:
    pattern = /java/



/*
    ** SPECIAL CHARACTERS **
    ------------------------
    - In a regular expression, there are a number of characters that have a
        special meaning, commonly known as METACHARACTERS:

    .  mactches any character, except line breaks
    \w matches any word character, and is equivalent to [A-Za-z0-9_]
    \W matches any non-word character, and is equivalent to [\^A-Za-z0-9_]
    \d matches any digit character, and is equivalent to [0-9]
    \D matches any non-digit character, and is equivalent to [^0-9]
    \s matches any whitespace character, and is equivalent to [ \t\r\n\f]
    \S matches any non-whitespace character, and is equivalent to [^ \t\r\n\f]



    ** MODIFIERS **
    ---------------
    - Modifiers can be placed after a token to deal with multiple occurrences
        of that token:

    ?       makes the preceding token in the regular expression optional
    *       matches one or more occurrences of the preceding token
    +       matches one or more occurrences of the preceding token
    {n}     matches n occurrences of the preceding token
    {n, }   matches at least n occurrences of the pattern
    {,m}    matches at most m occurrences of the preceding token
    {n,m}   matches at least n and at most m occurrences of the preceding token
    ^       marks the position immediately before the first character in
            the string
    $       marks the position immediately after the last character in the
            string

    - Any special characters or modifiers can be escaped using a backslash. So
        if you wanted to match a question mark, ?, you would need to use the regular expression /\?/.
*/
