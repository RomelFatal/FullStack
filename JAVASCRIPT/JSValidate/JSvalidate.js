function validate() {
    var uname = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;
    var age = document.getElementById("age").value;


    if(uname.trim() =="" || pass.trim() =="" || age.trim() =="") {
        alert("Missing credentials");
        return false'
    } else if(uname == "John" && pass == "passwrod" && age >= 13) {
        alert("Sign-up was successful");
        return true;
    } else if(age < 13) {
        alert("You are underaged.");
        return false;
    } else {
        alert("Wrong id or password");
    }
}
