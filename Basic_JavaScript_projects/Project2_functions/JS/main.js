function My_First_Function() { //defining a function and nameing isolation
    var str = "Green means GO!"; //defining a variable and gving it a string value
    var result = str.fontcolor("green"); //using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result; //putting the value of the result into HTML element with "Green_Text"id

}

function displayDate() {
    document.getElementById("time/date").innerHTML = Date(); //works to show date and time outside of button when clicked

}

function myFunction() {
    var sentence = "We should"; //with html creates the clickable word "Click Here"
    sentence += " party like its 2019!";
    document.getElementById("Concatenate").innerHTML = sentence;
}