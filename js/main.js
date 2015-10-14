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

function startGame() {
	var bootGame = computerPlay();
}


//turn the cells into variables
var cellA1 = document.getElementById('c1');
var cellB1 = document.getElementById('c2');
var cellC1 = document.getElementById('c3');
var cellD1 = document.getElementById('c4');
var cellE1 = document.getElementById('c5');
var cellA2 = document.getElementById('c6');
var cellB2 = document.getElementById('c7');
var cellC2 = document.getElementById('c8');
var cellD2 = document.getElementById('c9');
var cellE2 = document.getElementById('c10');
var cellA3 = document.getElementById('c11');
var cellB3 = document.getElementById('c12');
var cellC3 = document.getElementById('c13');
var cellD3 = document.getElementById('c14');
var cellE3 = document.getElementById('c15');
var cellA4 = document.getElementById('c16');
var cellB4 = document.getElementById('c17');
var cellC4 = document.getElementById('c18');
var cellD4 = document.getElementById('c19');
var cellE4 = document.getElementById('c20');

//highlight box when clicked
cellA1.addEventListener('click', function() {cellA1.style.backgroundColor = "#18AFFF"});
cellB1.addEventListener('click', function() {cellB1.style.backgroundColor = "#18AFFF"});
cellC1.addEventListener('click', function() {cellC1.style.backgroundColor = "#18AFFF"});
cellD1.addEventListener('click', function() {cellD1.style.backgroundColor = "#18AFFF"});
cellE1.addEventListener('click', function() {cellE1.style.backgroundColor = "#18AFFF"});
cellA2.addEventListener('click', function() {cellA2.style.backgroundColor = "#18AFFF"});
cellB2.addEventListener('click', function() {cellB2.style.backgroundColor = "#18AFFF"});
cellC2.addEventListener('click', function() {cellC2.style.backgroundColor = "#18AFFF"});
cellD2.addEventListener('click', function() {cellD2.style.backgroundColor = "#18AFFF"});
cellE2.addEventListener('click', function() {cellE2.style.backgroundColor = "#18AFFF"});
cellA3.addEventListener('click', function() {cellA3.style.backgroundColor = "#18AFFF"});
cellB3.addEventListener('click', function() {cellB3.style.backgroundColor = "#18AFFF"});
cellC3.addEventListener('click', function() {cellC3.style.backgroundColor = "#18AFFF"});
cellD3.addEventListener('click', function() {cellD3.style.backgroundColor = "#18AFFF"});
cellE3.addEventListener('click', function() {cellE3.style.backgroundColor = "#18AFFF"});
cellA4.addEventListener('click', function() {cellA4.style.backgroundColor = "#18AFFF"});
cellB4.addEventListener('click', function() {cellB4.style.backgroundColor = "#18AFFF"});
cellC4.addEventListener('click', function() {cellC4.style.backgroundColor = "#18AFFF"});
cellD4.addEventListener('click', function() {cellD4.style.backgroundColor = "#18AFFF"});
cellE4.addEventListener('click', function() {cellE4.style.backgroundColor = "#18AFFF"});

//group the variables into an array
var tiles = [cellA1, cellB1, cellC1, cellD1, cellE1, cellA2, cellB2, cellC2, cellD2, cellE2, cellA3, cellB3, cellC3, cellD3, cellE3, cellA4, cellB4, cellC4, cellD4, cellE4];

//declair the relevent variables
var randomMove;
var tilesMath;
var moves;


//function: random tile
var randomMoves = function () {
	moves = [];
	tilesMath = Math.floor(Math.random() * tiles.length);
	moves.push(tiles[tilesMath]);
	tilesMath = Math.floor(Math.random() * tiles.length);
	moves.push(tiles[tilesMath]);
	tilesMath = Math.floor(Math.random() * tiles.length);
	moves.push(tiles[tilesMath]);
	tilesMath = Math.floor(Math.random() * tiles.length);
	moves.push(tiles[tilesMath]);
	tilesMath = Math.floor(Math.random() * tiles.length);
	moves.push(tiles[tilesMath]);
	tilesMath = Math.floor(Math.random() * tiles.length);
	moves.push(tiles[tilesMath]);
	tilesMath = Math.floor(Math.random() * tiles.length);
	moves.push(tiles[tilesMath]);
	return moves;

}
//Set up computer play
var computerPlay = function() {
	//make the computerMove a randomMove
	var computerMoves = randomMoves();
	console.log(computerMoves);	
	
	setTimeout(function(){
		$(computerMoves[0])
			//.css('background-color', 'red')
			//.fadeIn('slow')
			//.fadeOut('slow')
			.css('background-color', 'red')
			//.fadeIn('slow');
	}, 2000);

	setTimeout(function(){
			$(computerMoves[1])
			//.css('background-color', 'red')
			//.fadeIn('slow')
			//.fadeOut('slow')
			.css('background-color', 'red')
			//.fadeIn('slow');	
	}, 2000);

		setTimeout(function(){
			$(computerMoves[2])
			//.css('background-color', 'red')
			//.fadeIn('slow')
			//.fadeOut('slow')
			.css('background-color', 'red')
			//.fadeIn('slow');	
	}, 2000);

			setTimeout(function(){
			$(computerMoves[3])
			//.css('background-color', 'red')
			//.fadeIn('slow')
			.fadeOut('slow')
			.css('background-color', 'red')
			.fadeIn('fast');	
	}, 2000);

			setTimeout(function(){
			$(computerMoves[4])
			//.css('background-color', 'red')
			//.fadeIn('slow')
			.fadeOut('slow')
			.css('background-color', 'red')
			.fadeIn('fast');	

	}, 2000);
			setTimeout(function(){
			$(computerMoves[5])
			//.css('background-color', 'red')
			//.fadeIn('slow')
			.fadeOut('slow')
			.css('background-color', 'red')
			.fadeIn('fast');	
	}, 2000);

			setTimeout(function(){
			$(computerMoves[6])
			//.css('background-color', 'red')
			//.fadeIn('slow')
			.fadeOut('slow')
			.css('background-color', 'red')
			.fadeIn('fast');	

	}, 2000);
			setTimeout(function(){
			$(computerMoves[7])
			//.css('background-color', 'red')
			//.fadeIn('slow')
			.fadeOut('slow')
			.css('background-color', 'red')
			.fadeIn('fast');	

	}, 2000); // set a timer for fading out
			setTimeout(function() {
			$('.cell').css('background-color', 'transparent')
	}, 6000);

};


