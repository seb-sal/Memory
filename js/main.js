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


//turn the cells into variables
var cellA1 = document.getElementById('one');
var cellB1 = document.getElementById('two');
var cellA2 = document.getElementById('three');
var cellB2 = document.getElementById('four');

//highlight box when clicked
cellA1.addEventListener('click', function() {cellA1.style.backgroundColor = "#18AFFF";});
cellB1.addEventListener('click', function() {cellB1.style.backgroundColor = "#18AFFF" });
cellA2.addEventListener('click', function() {cellA2.style.backgroundColor = "#18AFFF"});
cellB2.addEventListener('click', function () {cellB2.style.backgroundColor = "#18AFFF"});

//group the variables into an array
var tiles = [cellA1, cellB1, cellA2, cellB2];

//declair the relevent variables
var randomMove;
var tilesMath;
var playerMove

//function: random tile
var randomMoves = function () {
	var moves = [];
	tilesMath = Math.floor(Math.random() * tiles.length);
	moves.push(tiles[tilesMath]);
	tilesMath = Math.floor(Math.random() * tiles.length);
	moves.push(tiles[tilesMath]);
	return moves;
};

var computerPlay = function() {
	//make the computerMove a randomMove
	var computerMoves = randomMoves();
	console.log(computerMoves);	
		$(computerMoves[0])
			.css('background-color', 'white')
			.fadeIn('slow')
			.fadeOut('slow')
			.css('background-color', 'transparent')
			.fadeIn();

	setTimeout(function(){
			$(computerMoves[1])
			.css('background-color', 'white')
			.fadeIn('slow')
			.fadeOut('slow')
			.css('background-color', 'transparent')
			.fadeIn();	
	}, 1000);
}


//highlight selected tiles



//declar the player move





