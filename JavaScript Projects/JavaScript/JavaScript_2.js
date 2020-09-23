function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }
    if (y == "") {
        alert("Last name must be filled out");
        return false;

    }
}