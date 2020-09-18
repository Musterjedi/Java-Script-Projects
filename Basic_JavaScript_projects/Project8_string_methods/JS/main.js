function complete_sentence() {
    var part_1 = "Hello, what";
    var part_2 = " is your dream"; //forming a complete sentence with multiple variables
    var part_3 = " car? Mine";
    var part_4 = " is a Shelby Datona Coup";
    var whole_thing = part_1.concat(part_2, part_3, part_4); //concat
    document.getElementById("car").innerHTML = whole_thing;

}

function slice_Method() {
    var Sentence = "Click here to display a BOLD word."; //slice
    var Section = Sentence.slice(23, 28);
    document.getElementById("Slice").innerHTML = Section;
}

function myFunction() {
    var str = "Hi there";
    var res = str.toUpperCase();
    document.getElementById("test").innerHTML = res; //toUppercase
}

function string_Method() { //string
    var x = 200;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method() { ////precision
    var x = 12345678910111213;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

function fixed() {
    var num = 10.26549;
    var n = num.toFixed(4);
    document.getElementById("number").innerHTML = n;
}

function prime() {
    var str = "Good Day";
    var res = str.valueOf();
    document.getElementById("Value").innerHTML = res;
}