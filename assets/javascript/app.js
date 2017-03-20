//---------------------------------------------------------------------------
// VARIABLE DECLARATIONS!
var startButton;
var i;
var number = 6;

var walrusQuestions =[{
    question: "What is scientific name for the walrus?",
    choices: ["Astichopus multifidus", "Mirounga angustirostris", "Monodon monoceros", "Odobenus rosmarus"],
    correctAnswer: 3
}, {
 	question: "Which of these is not a common predator of the walrus?",
    choices: ["Elephant Seal", "Human", "Polar Bear", "Killer Whale"],
    correctAnswer: 0
}, {
 	question: "Only male walruses grow tusks",
    choices: ["True", "False"],
    correctAnswer: 1
}, {
 	question: "A walrus can remain underwater how long before coming up for air?",
    choices: ["30 minutes", "1 hour", "3 hours", "6 hours"],
    correctAnswer: 0
}, {
 	question: "What is untrue of walrus tusks?",
    choices: ["They are used to create breathing holes in ice floes", "Tusk size helps determine social status", "They stop growing when the walrus reaches adulthood", "They are used to pull the walrus out of the water"],
    correctAnswer: 2
}, {
 	question: "How long is the gestation period for a walrus?",
    choices: ["6 months", "9 months", "13 months", "15 months"],
    correctAnswer: 3
}, {
 	question: "Walruses are which of the following?",
    choices: ["Herbivorous", "Omnivorous", "Carnivorous", "Pescetarians"],
    correctAnswer: 2
}, {
 	question: "The Latin name for walrus (Odobenus Rosmarus) means which of the following?",
    choices: ["Whisker-bearing ocean-beast", "Tooth-walking sea-horse", "XXX", "XXX"],
    correctAnswer: 2
}];

//---------------------------------------------------------------------------
// FUNCTION DECLARATIONS!

// setTimeout(gameLoad, 1000);
function run() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	number--;
    $("#countdown").html("<h2>" + number + "</h2>");
		if (number === 0) {
		stop();
		setTimeout(nextQuestion, 1000);
		}
}

function stop() {
	clearInterval(intervalId);
}

// This function starts game over completely
function createStartButton() {
	startButton = $("<button>");
	startButton.addClass("btn btn-info");
	startButton.text("Start the Game!");
	$("#main-content").append(startButton);
}

function gameLoad() {
	$(".quiz-div").hide();
	createStartButton();
	// console.log("I've loaded gameLoad!");
	// console.log(walrusQuestions[0].question);
	// console.log(walrusQuestions[0].choices[1]);
	// console.log(walrusQuestions[0].correctAnswer);
	// var right = walrusQuestions[0].correctAnswer;
	// console.log(walrusQuestions[0].choices[right]);
}

function gameStop() {
	$("#main-heading").html("<h1>Walrus Trivia Game!</h1>");
	$(".quiz-div").hide();
	createStartButton();
	stop();
}

// This function actually starts the game on button press!
function gameStart() {
	console.log("You clicked the button!");
	run();
	$(".btn-info").hide();
	$(".quiz-div").show();
	i = 0;
	$("#question-div").html("<h3>" + walrusQuestions[i].question + "</h3");
}

function nextQuestion() {
	if (i < walrusQuestions.length) {
	number = 6;
	run();
	i = i + 1;
	// console.log(walrusQuestions[i].question);
	$("#question-div").html("<h3>" + walrusQuestions[i].question + "</h3");
	$("#answer-1").html("<h4>" + walrusQuestions[i].choices[0] + "</h4");
	console.log(walrusQuestions[i].choices[0]);
}
	else {
		gameStop();
	}
}

//---------------------------------------------------------------------------
// ACTUAL GAME BITS!

// Load main start page on page load
gameLoad();

// When "Start Game" button is clicked, start the game!
$(".btn-info").click(function() {
  gameStart();
});



