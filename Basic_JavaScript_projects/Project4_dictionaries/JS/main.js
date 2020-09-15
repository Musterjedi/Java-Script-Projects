function my_Dictionary() {
    var Bike = {
        Brand: "Niner", //dictionary items
        Color: "Blue",
        Model: "RLT",
        Gears: 11,
        Sound: "whooshzzzzzee!"
    };
    delete Bike.Sound; //deleted item
    document.getElementById("Dictionary").innerHTML = Bike.Sound;
}