//users need to exit the game
function getConfirmation() {
	var message = confirm("Are you sure you want to quit?");
		if (message === true) {
			return window.location = "/index.html";
		}
		else {
			return false;
		}

	}

//develop on click actions for Easy button
$('.footer').click(function(event) {
	if (event.target === $('#easy-button')[0]) {
		levelEasy();
	}
});

//develop on click actions for Medium button
$('.footer').click(function(event) {
	if (event.target === $('#med-button')[0]) {
		levelMed();
	}
});

//develop on click actions for Medium button
$('.footer').click(function(event) {
	if (event.target === $('#hard-button')[0]) {
		levelHard();
	}
});

//group the variables into an array

var board = [
			[null, null, null, null],	
			[null, null, null, null],	
			[null, null, null, null],	
			[null, null, null, null]	
			];


//random tile picker
var randomMoves = function (num) {
	var numholder = Math.floor(Math.random() * num);
	return numholder;
}

//global variables
var randomY; 
var randomX;
var computerMove = [];

//get one random number
var computerPlay = function() {
	  randomY = randomMoves(4);
	  randomX = randomMoves(4);
	  
	  while (board[randomY][randomX] == true) {
	  	randomY = randomMoves(4);
	  	randomX = randomMoves(4);
		}
	  board[randomY][randomX] = true;
	  return(computerMove);
 }  


//Develop easy level function
var levelEasy = function() {
	for (var i =0; i<=3; i++){
	   computerPlay();  
	};
	boxColors();
}

//Develop medium level function
var levelMed = function() {
	for (var i =0; i<=7; i++){
		computerPlay();
	};
	boxColors();
}
//levelMed();


//Develop hard level function
var levelHard = function() {
	for (var i =0; i<=11; i++){
		computerPlay();
	};
	boxColors();
}


//highligh random tiles
var boxColors = function() {
	for(var i = 0; i < 4; i++){
		for (var j = 0; j < 4; j++){
			if (board[i][j] === true){
				$('#' + i + ","+ j).addClass('.comp-background');
				$('#' + i + ","+ j).fadeOut(3000, function() {
					$('#' + i + ","+ j).removeClass('.comp-background')	
				});
			}
			}
		}
	}


