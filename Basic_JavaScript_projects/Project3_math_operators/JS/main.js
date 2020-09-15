function math() {
    var addition = 5 + 5;
    document.getElementById("math").innerHTML = "5+5=" + addition; //addition
}

function math1() {
    var subtraction = 10 - 5;
    document.getElementById("math1").innerHTML = "10-5=" + subtraction; //subtraction
}

function math2() {
    var multipication = 10 * 12;
    document.getElementById("math2").innerHTML = "10x12=" + multipication; //multipication
}

function math3() {
    var divide = 1200 / 6;
    document.getElementById("math3").innerHTML = "1200 divided by 6=" + divide; //division
}

function math4() {
    var complex = (1 + 2) * 10 / 2 - 5;
    document.getElementById("math4").innerHTML = "1+2 multiply by 10 then ddivide by 2-5=" + complex; //combination of math 
}

function math5() {
    var mod_op = 25 % 6; //displays the remainder of a number 
    document.getElementById("math5").innerHTML = "Divide 25 by 6 you have a remainder of : " + mod_op;
}

function mathx() {
    var neg_Op = 10;
    document.getElementById("mathx").innerHTML = -neg_Op; //opposite turns a 10 into a -10
}

var y = 5;
y++;
document.write("One more than 5 is " + y); //increments upward

var x = 5.25;
x--;
document.write(" and one less than 5.25 is " + x); //increments downward

window.alert(Math.random() * 100); //generates a pop up random number from 1-100


document.getElementById("round").innerHTML = Math.round(25.654); //rounds off the number of 25.654

function my_Dictionary() {
    var Bike = {
        Brand: "Niner",
        Color: "Blue",
        Model: "RLT",
        Gears: 11,
        Sound: "whooshzzzzzee!"
    };
    document.getElementById("Dictionary").innerHTML = Bike.Sound;
}