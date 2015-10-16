//global variables
var level;
var board;
var lives;
var score;
var flashingTiles;
var clicksRemaining;
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
	clicksRemaining = null;
	// clear out any created divs in table
	$('.cell').html('');
}

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
	flashingTiles = true;
	$('.tile').fadeIn(600);
	setTimeout(function() {
		$('.tile').fadeOut(600, function() {
			flashingTiles = false;
		});
	}, 1500);
}

// listen for click on cells
$('.table').on('click', function(evt) {
	if (flashingTiles || clicksRemaining <= 0 || clicksRemaining === null) {
		evt.preventDefault();
		return;
	}
	console.log('clicked: ', evt.target.id)
	if (evt.target.innerHTML === '') {
		// do loser
		console.log("LOSER")
	} else {
		evt.target.innerHTML = '';
		clicksRemaining--;
	}
	if ($('.tile').length === 0) {
		// winner
		console.log('WINNER')
	}

});

//develop on click actions for Quit button
$('#quit').on('click', function() {
	getConfirmation();
})

//develop on click actions for Easy button
$('#easy-button').click(function(event) {
	levelEasy();
	$('.footer p').html('&nbsp;');
});

//develop on click actions for Medium button
$('#med-button').click(function(event) {
	levelMed();
	$('.footer p').html('&nbsp;');
});

//develop on click actions for Medium button
$('#hard-button').click(function(event) {
	levelHard();
	$('.footer p').html('&nbsp;');
});


//random tile picker
var randomMoves = function (num) {
	var numholder = Math.floor(Math.random() * num);
	return numholder;
}

function playGame() {
	reset();
	setTiles();
	clicksRemaining = level;
	render();
}


//get one random number
var setTiles = function() {
	var randomY, randomX;
	var tiles = 0;
	while (tiles !== level) {
		randomY = randomMoves(4);
		randomX = randomMoves(4);
	 	while (board[randomY][randomX] !== null) {
			randomY = randomMoves(4);
			randomX = randomMoves(4);
	  	}
		board[randomY][randomX] = true;
		
		// create a div with a class of "tile"
		// then append to td cell
		// create a .tile css rule: width & height: 100%
		// update td style in css to add padding

		var $tile = $('<div class="tile"></div>');
		var id = '#' + randomY.toString() + randomX.toString();
		$(id).append($tile);
	  	tiles++;
	}
 }  


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


//Develop hard level function
var levelHard = function() {
	level = 6;
	playGame();
}
