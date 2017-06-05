var wins = 0;
var loses = 0;
var sofar = [];
var guessCounter = 10;
var letters = ["a", "b", "c", "d", "e","f","g", "h", "i", "j", "k","l","m", "n", "o", "p", "q","r","s", "t", "u", "v", "w","x","y","z"];


alert("guess what leeter am i thinking of ...")

	var randomLetter = letters[Math.floor(Math.random() * letters.length)];

      document.onkeyup = function(event) {

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        	console.log(userGuess);
     
        guessCounter --;

		console.log(guessCounter);

sofar.push(userGuess);


if(userGuess===randomLetter){
	
	wins ++;
}
else if(guessCounter ===0){
loses++;

reset();

	}

	document.querySelector("#wins").innerHTML = wins;
		document.querySelector("#loses").innerHTML = loses;
		document.querySelector("#guessesLeft").innerHTML = guessCounter;
		document.querySelector("#soFar").innerHTML = sofar;

}



function reset(){
	randomLetter = letters[Math.floor(Math.random() * letters.length)];
	var wins = 0;
	var loses = 0;
	var sofar = [];
	var guessCounter = 10;
}
