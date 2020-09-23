function displayType(manufacture) {
    var manufactureType = manufacture.getAttribute("data-manufacture-type");
    alert(manufactureType + " is Manufactured by " + manufacture.innerHTML + " Motors");
}