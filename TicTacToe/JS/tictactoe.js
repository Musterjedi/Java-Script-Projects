//this variable keeps track of who'w turn it is.
let activePlayer = 'X';
//this array stores and= array of moves. We use this to determine win conditions.
let selectedSquares = [];

//this function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    //this condition ensures a square hasn't been selected already.
    //the .some() method is used to check each element of each selectedSquared array to
    //see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it isolation
        if (activePlayer === 'X') {
            //if active player is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("img/xx.jpg")';
            //active player may only be'X', or 'O' so, if not  'X' it must be 'O'

        } else {
            //if activePlayer is equal to 'O', the x.png is placed in the HTml
            select.style.backgroundImage = 'url("img/oo-O.jpg")';

        }
        //squareNumber and activePlayer are concaterated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions.
        checkWinConditions();
        //this condition is for changing the active player
        if (activePlayer === 'X') {
            //if active player is anything other than 'X'.
            activePlayer='O';
        } else {
            //change the activePlayer to 'X'
            activePlayer = 'X';
        }
        //this function plays placement sound.
        audio('./media/place.mp3');
        //this condition checks to see if it is computer turn 
        if (activePlayer === 'O') {
            //this function disables clicking for computerchoice.
            disableClick();
            //this function waits 1 second before placing the image 
            //and enabling click.
            setTimeout(function() { computersTurn(); }, 1000);
        
        }
        return true;
}
        //this function results in a random square being selected.
        function computersTurn() {
            //this boolean is needed for our while loop.
            let success = false;
            //this variable stores a random number 0 and 8
            let pickASquare;
            // this conditions allows our while loop to keep trying if a square is selected already
            while(!success){
                pickASquare= String(Math.floor(Math.random() * 9));
            
            //if the random number evaluates returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                //this line calls the function.
                placeXOrO(pickASquare);
                //this changes our boolean and ends thelop.
                success = true;

            };
        }
    }
}

//this function parses the seletedSquares array to search for win conditions.
//drawWinLine functionis called to dray line if condition is met.

function checkWinConditions() {
    //X o,1,2 condition.
    if      (arrayIncludes('OX', '1X', '2X')) { drawWinLine(50, 100, 558, 100); } 
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); } 
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); } 
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); } 
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); } 
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); } 
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); } 
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); } 
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); } 
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); } 
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); } 
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); } 
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); } 
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); } 
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); } 
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }
    //THID CONDITON CHECKS FOR TIE.
    else if (selectedSquares.length >= 9) {
        audio('./media/45654__simon-lacelle__dun-dun-dun.wav');
        setTimeout(function() { resetGame(); }, 1000);
    }

    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) { return true; }
    }
}
//this function makes our body element temorarily unclickable
function disableClick() {
    body.style.pointerEvents='none';
    //this makes our body clickable again after 1 second
    setTimeout (function(){body.style.pointerEvents='auto';},1000);
}

//this function takes astring parameter of the path you set earlier for placement sound 
function audio(audioURL) {
    //we create a new audio object 
    let audio=new Audio(audioURL);
    audio.play();
}
//this function utilizes htme canvas to draw a win line
function drawWinLine(coordX1, coordY1,coordX2,coordY2) {
    //this line give us access to methods and properties to use on canvas
    const canvas= document.getElementById('win-lines');
    const c=canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
function animateLineDrawing() {
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    c.clearRect(0,0,608,608);
    c.beginPath();
    c.moveTo(x1,y1);
    c.lineTo(x,y);
    c.lineWidth=10;
    c.strokedStyle= 'rgba(70,255,33,.8)';
    c.stroke();
    if (x1<=x2 && y1<=y2) {
        if (x<x2){x+= 10;}
        if (y<y2){y+= 10;}
        if (x>=x2 && y >=y2) {cancelAnimationFrame(animationLoop);}

    }
    //this condition is similar to the on above
    if (x1 <=x2 && y1>=y2) {
        if (x<x2){x += 10;}
        if (y>y2){y -= 10;}
        if (x>=x2 && y <=y2) { cancelAnimationFrame(animationLoop);}
    }

}
//this function clears our canvas afterour win line is draw
function clear() {
    const animationLoop=requestAnimationFrame(clear);
    c.clearRect(0,0,608,608);
    cancelAnimationFrame(animationLoop);

}

disableClick();
audio('./media/505.mp3');
animateLineDrawing();
setTimeout(function () { clear(); resetGame();}, 1000);
}

//this function resets the game in a tie or a win 
function resetGame(){
    for (let i=0; i< 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    //this resets our array so it is empty and we an start over 
    selectedSquares = [];
}