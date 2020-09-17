function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "Come back next year when your taller" : "Congrates you are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";


}

function Vote_Function() {
    var Height, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "Come back after you turn 18 years of age" : "Congrates you CAN VOTE!!";
    document.getElementById("Vote").innerHTML = Can_vote + "  thank you.";


}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", "2020", "red");
var Emily = new Vehicle("Jeep", "Trail Hawk", "2019", "White and Black");
var Erik = new Vehicle("Ford", "Pinto", "1971", "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model; //key words using this and new
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", "2020", "red");
var Emily = new Vehicle("Jeep", "Trail Hawk", "2019", "White and Black");
var Erik = new Vehicle("Ford", "Pinto", "1971", "Mustard");

function myFunction1() {
    document.getElementById("New_and_This").innerHTML =
        "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model +
        " manufactured in " + Jack.Vehicle_Year;
}

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myFather = new Person("john", "doe", 50, "blue");
document.getElementById("demo").innerHTML =
    "My father has " + myFather.eyeColor + " eyes.";



function count_Function() {
    document.getElementById("Counting").innerHTML = Count();

    function Count() {
        var Starting_point = 9;

        function Plus_one() { Starting_point += 1; }
        Plus_one();
        return Starting_point;
    }


}





function nested() {
    document.getElementById("Nested_Function").innerHTML = nest(); //nested function

    function nest() {
        var firstWord = "Hello";

        function nextWord() { firstWord += " World"; }
        nextWord();
        return firstWord;
    }
}