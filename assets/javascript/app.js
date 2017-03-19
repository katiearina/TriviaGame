//---------------------------------------------------------------------------
// VARIABLE DECLARATIONS!
var startButton;


//---------------------------------------------------------------------------
// FUNCTION DECLARATIONS!

// This function starts game over completely
function createStartButton() {
	startButton = $("<button>");
	startButton.addClass("btn btn-info");
	startButton.text("Start the Game!");
	$("#main-content").append(startButton);
}


function gameLoad() {
	createStartButton();
	console.log("I've loaded gameLoad!");
}

// This function actually starts the game on button press!
function gameStart() {
	console.log("You clicked the button!");
	$("#main-content").empty();
}

//---------------------------------------------------------------------------
// ACTUAL GAME BITS!

// Load main start page on page load
gameLoad();

// When "Start Game" button is clicked, start the game!
$(".btn-info").click(function() {
  gameStart();
});