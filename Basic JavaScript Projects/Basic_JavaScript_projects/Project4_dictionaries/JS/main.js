function my_Dictionary() {
    var Bike = {
        Brand: "Niner",
        Color: "Blue",
        Model: "RLT",
        Gears: 11,
        Sound: "whooshzzzzzee!"
    };
    delete Bike.Sound;
    document.getElementById("Dictionary").innerHTML = Bike.Sound;
}