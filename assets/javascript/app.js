//---------------------------------------------------------------------------
// VARIABLE DECLARATIONS!
var startButton;
var i;
var wins = 0;
var losses = 0;
var right;
var number;

var walrusQuestions =[{
    question: "What is scientific name for the walrus?",
    choices: ["Astichopus multifidus", "Mirounga angustirostris", "Monodon monoceros", "Odobenus rosmarus"],
    correctAnswer: "Odobenus rosmarus"
}, {
 	question: "Which of these is not a common predator of the walrus?",
    choices: ["Elephant Seal", "Human", "Polar Bear", "Killer Whale"],
    correctAnswer: "Elephant Seal"
}, {
 	question: "Only male walruses grow tusks",
    choices: ["True", "False"],
    correctAnswer: "False"
}, {
 	question: "A walrus can remain underwater how long before coming up for air?",
    choices: ["30 minutes", "1 hour", "3 hours", "6 hours"],
    correctAnswer: "30 minutes"
}, {
 	question: "What is untrue of walrus tusks?",
    choices: ["They are used to create breathing holes in ice floes", "Tusk size helps determine social status", "They stop growing when the walrus reaches adulthood", "They are used to pull the walrus out of the water"],
    correctAnswer: "They stop growing when the walrus reaches adulthood"
}, {
 	question: "How long is the gestation period for a walrus?",
    choices: ["6 months", "9 months", "13 months", "15 months"],
    correctAnswer: "15 months"
}, {
 	question: "Walruses are which of the following?",
    choices: ["Herbivores", "Omnivores", "Carnivores", "Pescetarians"],
    correctAnswer: "Carnivores"
}, {
 	question: "The Latin name for walrus (Odobenus Rosmarus) means which of the following?",
    choices: ["Whisker-bearing ocean-beast", "Tooth-walking sea-horse", "XXX", "XXX"],
    correctAnswer: "Tooth-walking sea-horse"
}];

//---------------------------------------------------------------------------
// FUNCTION DECLARATIONS!

function run() {
	countdownTimer = setInterval(decrement, 1000);
}

function stop() {
	clearInterval(countdownTimer);
}

// This function creates start button
function createStartButton() {
	$("#quiz-content").html("<button class='start-button'>Start the Game!</button>");
}

// This function runs on page load
function gameLoad() {
	createStartButton();
}


function gameStop() {
	stop();
	$("#quiz-content").html("<h2>You answered " + wins + " questions correctly!</h2>"
		+ "<h2>You answered " + losses + " questions incorrectly!</h2>")
}

// This writes the countdown timer to the page
function decrement() {
    $("#countdown-timer").html("<h4>You have " + number + " seconds remaining</h4>");
    number--;
		if (number < 0) {
		$("#countdown-timer").html("<h4>Time's up!</h4>");
		stop();
		setTimeout(nextQuestion, 1000);
		losses++;
		}
}

// This function actually starts the game on button press!
function gameStart() {
	console.log("You clicked the button!");
	i = 0;
	$("#countdown-timer").html("<h4>You have " + 30 + " seconds remaining</h4>");
	number = 29;
	run();
	$("#quiz-content").empty();
	$("#quiz-content").append("<h3>" + walrusQuestions[i].question + "</h3");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[0] + "</h4");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[1] + "</h4");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[2] + "</h4");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[3] + "</h4");
}

function nextQuestion() {
	i = i + 1;
	$("#countdown-timer").html("<h4>You have " + 30 + " seconds remaining</h4>");
	number = 29;
	run();
	if (i === 2) {
	$("#quiz-content").empty();
	$("#quiz-content").append("<h3>" + walrusQuestions[i].question + "</h3");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[0] + "</h4");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[1] + "</h4");
	// $("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[2] + "</h4");
	// $("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[3] + "</h4");
}
	else if (i < walrusQuestions.length && i != 2) {
	$("#quiz-content").empty();
	$("#quiz-content").append("<h3>" + walrusQuestions[i].question + "</h3");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[0] + "</h4");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[1] + "</h4");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[2] + "</h4");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[3] + "</h4");
}
	else {
		$("#countdown-timer").empty();
		gameStop();
	}
}

function alertConsole() {
	alert("You clicked this!");
}

//---------------------------------------------------------------------------
// ACTUAL GAME BITS!

// Load main start page on page load
gameLoad();

// When "Start Game" button is clicked, start the game!
$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	gameStart();
});

// 
$("body").on("click", ".answers", function(event){
	console.log($(this).text());
	if ($(this).text() === walrusQuestions[i].correctAnswer) {
		// alert("You did it!");
		wins++;
		console.log("Wins: " + wins);
		stop();
		setTimeout(nextQuestion, 0);
		// nextQuestion();
	}
	else {
		// alert("Womp womp");
		losses++;
		console.log("Losses: " + losses);
		stop();
		setTimeout(nextQuestion, 0);
		// nextQuestion();
	}
});
