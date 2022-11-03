// Create date module to be used when
// as a function when called inside the program
module.exports.getDate = function() {
    // New date object
    const today = new Date();

    // Date formatting option to write out the date format
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };


    // Passing options prints out the date format
    // displaying the entire weekday, day and month formatting
    return today.toLocaleDateString("en-US", options);
};



module.exports.getDay = function() {
    // New date object
    const today = new Date();

    // Date formatting option to write out the date format
    const options = {
        weekday: "long"
    };


    // Passing options prints out the date format
    // displaying the entire weekday, day and month formatting
    return today.toLocaleDateString("en-US", options);
};
