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

}

//---------------------------------------------------------------------------
// ACTUAL GAME BITS!
gameLoad();