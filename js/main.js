//global variables
var randomNumbers = [];
var level;
var board;
var lives;
var score;
var $lives = $('#lives');
var $score = $('#score');
var $cell = $('.cell');

//users need to exit the game
function getConfirmation() {
	var message = confirm("Are you sure you want to quit?");
	if (message === true) {
		return window.location = "/index.html";
	} else {
		return false;
	}

}

// reset function
function reset() {
	board = [
		[null, null, null, null],	
		[null, null, null, null],	
		[null, null, null, null],	
		[null, null, null, null]	
	];
	lives = 3;
	score = 0;
}

reset();

function render() {
	// display lives
	$lives.html('LIVES: ' + lives.toString())
	// display score
	$score.html('SCORE: ' + score.toString())
	// flash tiles
	flashTiles();

}

//flashTiles function
function flashTiles() {
}

//develop on click actions for Easy button
$('.footer').click(function(event) {
	if (event.target === $('#easy-button')[0]) {
		levelEasy();
		$('form p').html('&nbsp;');
	}
});

//develop on click actions for Medium button
$('.footer').click(function(event) {
	if (event.target === $('#med-button')[0]) {
		levelMed();
		$('form p').html('&nbsp;');
	}
});

//develop on click actions for Medium button
$('.footer').click(function(event) {
	if (event.target === $('#hard-button')[0]) {
		levelHard();
		$('form p').html('&nbsp;');
	}
});


//random tile picker
var randomMoves = function (num) {
	var numholder = Math.floor(Math.random() * num);
	return numholder;
}

function playGame() {
	setTiles();
	render();
}


//get one random number
var setTiles = function() {
	var randomY, randomX;
	var tiles = 0;
	while (tiles !== level) {
		randomY = randomMoves(4);
		randomX = randomMoves(4);
	 	while (board[randomY][randomX]) {
			randomY = randomMoves(4);
			randomX = randomMoves(4);
	  	}
		board[randomY][randomX] = true;
		
		// create a div with a class of "tile"
		// then append to td cell
		// create a .tile css rule: width & height: 100%
		// update td style in css to add padding
		var $tile = $('<div>', {'class': 'tile'});
			$('.cell').append($tile);
			$tile.css({'width': '100%', 'height': '100%', 'background-color': '#FF7F35'})
		

	  	tiles++;
	}
 }  

$tile.on('click', 'button', function(){
	
})

//Develop easy level function
var levelEasy = function() {
	level = 2;
	playGame();
}


//Develop medium level function
var levelMed = function() {
	level = 4;
	playGame();
}
//levelMed();


//Develop hard level function
var levelHard = function() {
	level = 6;
	playGame();
}
//levelHard();


/*
//highligh random tiles
var boxColors = function() {
	for(var i = 0; i < 4; i++){
		for (var j = 0; j < 4; j++){
			if (board[i][j] === true){
				$('#' + i + "," + j).addClass('comp-background');
				$('#' + i + "," + j).fadeOut(3000, function() {
				$('#' + i + "," + j).removeClass('comp-background')	
				});
			}
		}
	}
}


