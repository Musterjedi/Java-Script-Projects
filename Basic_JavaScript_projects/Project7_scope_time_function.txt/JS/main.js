var bikeName = "Niner";
document.getElementById("Global").innerHTML = "I have a " + bikeName + " RLT" + " Steel Gravel bike."; //global variable

function get_Date() {
    if (new Date().getHours() > 17) {
        document.getElementById("Greetings").innerHTML = "Hello and good evening?"; // time depending on when you ask
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value; //if and else only
    if (Age >= 21) {
        ride = "You can ride with us to the Pub for a Pint!";
    } else {
        ride = "You can ride with us to the Pub, but you will need to stay outside and keep your eyes on our!!";
    }
    document.getElementById("How_old_are_you?").innerHTML = ride;
}

function Time_func() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!"; //if, else 
    } else if (Time > 12 == Time < 18) {
        reply = "It is the afternoon.";
    } else {
        reply = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = reply;
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        ride = "You can ride with us to the Pub for a Pint!";
    } else if (Age >= 18) {
        ride = "You can ride with us to the Pub, but you will need to stay outside and keep your eyes on our!!"; //if and else
    } else {
        ride = "You will need to ask your parent.";
    }
    document.getElementById("How_old_are_you?").innerHTML = ride;
}