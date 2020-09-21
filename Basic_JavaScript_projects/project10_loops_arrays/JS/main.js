function Call_Loop() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;

    }
    document.getElementById("Loop").innerHTML = Digit;
}

function functionTest() {
    var str = "How many Characters are here?";
    var n = str.length;;
    document.getElementById("test").innerHTML = n;

}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "flute"];
var Content = "";
var Y;

function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var my_picture = [];
    my_picture[0] = "sleeping";
    my_picture[1] = "San Fran bike ride";
    my_picture[2] = "a beer";
    document.getElementById("Array").innerHTML = "In this picture, there is a cat, a bike or " + my_picture[2] + ".";


}

function constant_function() {
    const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black" };
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost for the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var x = "Joe";
document.write(x); {
    let x = "Joseph";
    document.write("<br>" + x);
}
document.write("<br>" + x);

var x = " Joe";
document.write(x); {
    var x = "Joseph";
    document.write("<br>" + x);
}
document.write("<br>" + x);

function return_function() {
    return 2 + 2;
}
document.getElementById("return_test").innerHTML = return_function();

let Vacation = {
    where: "Virgin Islands",
    when: "Spring of 2019",
    with: " my family",
    discription: function() {
        return "My Vacation was in the" + this.where + " in the" + this.when + " with" + this.with + ".";
    }
};
document.getElementById("Trip").innerHTML = Vacation.discription();

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 8) { break; }
    text += "new number is " + i + "<br>";
}
document.getElementById("breakTest").innerHTML = text;

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    text += "number is " + i + "<br>";
}
document.getElementById("conTest").innerHTML = text