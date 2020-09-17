function nested() {
    document.getElementById("Nested_Function").innerHTML = nest();

    function nest() {
        var firstWord = 10;

        function nextWord() { firstWord += 5; }
        nextWord();
        return firstWord;
    }
}