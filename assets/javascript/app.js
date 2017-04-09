//---------------------------------------------------------------------------
// VARIABLE DECLARATIONS!
var i;
var wins = 0;
var losses = 0;
var unanswered = 0;
var number;

var walrusQuestions =[{
    question: "What is scientific name for the walrus?",
    choices: ["Astichopus multifidus", "Mirounga angustirostris", "Monodon monoceros", "Odobenus rosmarus"],
    correctAnswer: "Odobenus rosmarus",
    explanation: " "
}, {
 	question: "Which of these is not a common predator of the walrus?",
    choices: ["Elephant Seal", "Human", "Polar Bear", "Killer Whale"],
    correctAnswer: "Elephant Seal",
    explanation: " "
}, {
 	question: "Only male walruses grow tusks",
    choices: ["True", "False"],
    correctAnswer: "False",
    explanation: " "
}, {
 	question: "A walrus can remain under water for how long before coming up for air?",
    choices: ["30 minutes", "1 hour", "3 hours", "6 hours"],
    correctAnswer: "30 minutes",
    explanation: " "
}, {
 	question: "Which is untrue of walrus tusks?",
    choices: ["They are used to create breathing holes in ice floes", "Tusk size helps determine social status", "They stop growing when the walrus reaches adulthood", "They are used to pull the walrus out of the water"],
    correctAnswer: "They stop growing when the walrus reaches adulthood",
    explanation: " "
}, {
 	question: "Recent studies have found that walruses can sleep for how many uninterrupted hours?",
    choices: ["10", "19", "24", "84"],
    correctAnswer: "19",
    explanation: " "
}, {
 	question: "On the flip side, walruses are known to stay awake for how many hours at a time while at sea?",
    choices: ["10", "19", "24", "84"],
    correctAnswer: "84",
    explanation: " "
}, {
 	question: "How long is the gestation period for a walrus?",
    choices: ["6 months", "9 months", "13 months", "15 months"],
    correctAnswer: "15 months",
    explanation: " "
}, {
 	question: "Walruses are which of the following?",
    choices: ["Herbivores", "Omnivores", "Carnivores", "Pescetarians"],
    correctAnswer: "Carnivores",
    explanation: "Walruses typically eat clams and crustaceans, but have been known to eat seals and other mammals."
}, {
 	question: "The Latin name for walrus (Odobenus rosmarus) means which of the following?",
    choices: ["Whisker-bearing ocean-dweller", "Tooth-walking sea-horse", "Blunt-muzzled whisker-cow", "Odorous toothed-cow"],
    correctAnswer: "Tooth-walking sea-horse",
    explanation: " "
}];

//---------------------------------------------------------------------------
// FUNCTION DECLARATIONS!

// Sets interval timer
function run() {
	countdownTimer = setInterval(decrement, 1000);
}

// Stops interval timer
function stop() {
	clearInterval(countdownTimer);
}

// This function creates start button
function createStartButton() {
	$("#quiz-content").html("<button class='start-button'>Start the Game!</button>");
}

// This function runs on page load (resets question scores, creates Start Button)
function gameLoad() {
	createStartButton();
	wins = 0;
	losses = 0;
	unanswered = 0;
}

// This function runs after all questions are answered to stop the countdown, populate question scores, and populates respective 
// image if more than half of the questions are answered correctly.
function gameStop() {
	stop();
	$("#quiz-content").html
		("<h3>You answered " + wins + " questions correctly!</h3>"
		+ "<h3>You answered " + losses + " questions incorrectly</h3>"
		+ "<h4>You left " + unanswered + " questions unanswered</h4>");
	if (wins >= 5) {
		$("#quiz-content").append("<p><img src='https://katiearina.github.io/TriviaGame/assets/images/walrus-clap.gif'></p>");
		$("#quiz-content").append("<button class='reset-button' onclick='gameLoad()'>Play Again!</button>");
	}
	else {
		$("#quiz-content").append("<p><img src='https://katiearina.github.io/TriviaGame/assets/images/walrus-crying.gif'></p>");
		$("#quiz-content").append("<button class='reset-button' onclick='gameLoad()'>Play Again!</button>");
	}
}

// This writes the countdown timer to the page
function decrement() {
    $("#countdown-timer").html("<h4>You have " + number + " seconds remaining</h4>");
    number--;
    	// This makes it show the number 0 instead of stopping at 1
		if (number < 0) {
		$("#countdown-timer").html("<h4>Time's up!</h4>");
		stop();
		// Waits one second before displaying next question
		setTimeout(nextQuestion, 1000);
		// If question goes unanswered, increase unanswered count.
		unanswered++;
		}
}

// This function actually starts the game on Start button press!
function gameStart() {
	// console.log("You clicked the button!");
	i = 0;
	$("#countdown-timer").html("<h4>You have " + 30 + " seconds remaining</h4>");
	number = 29;
	run();
	$("#quiz-content").empty();
	$("#quiz-content").append("<h3>" + walrusQuestions[i].question + "</h3>");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[0] + "</h4>");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[1] + "</h4>");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[2] + "</h4>");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[3] + "</h4>");
}

// There may be a way to code this inside the gameStart function, but I found it less problematic
// to separate them out this way. I also tried using a for loop for both the question creation and
// the answer keys (to make it relative to the number of questions in the object), but it just wouldn't
// work the way I wanted so I went this route instead. Not pretty and not dry, but functions the way
// I want it to.
// This function populates the next question in the object
function nextQuestion() {
	i = i + 1;
	// To populate initial count on page. If I didn't do it this way, it took a full second for the
	// count text to show up at all and then would start at 29. There may be better ways to do this,
	// but this was the way that worked best/most consistently.
	$("#countdown-timer").html("<h4>You have " + 30 + " seconds remaining</h4>");
	number = 29;
	run();
	// I tried working through this problem in a for loop, but kept running into issues, 
	// so decided just to separate this question out for now since it only had two answers instead of 4.
	if (i === 2) {
	$("#quiz-content").empty();
	$("#quiz-content").append("<h3>" + walrusQuestions[i].question + "</h3>");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[0] + "</h4>");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[1] + "</h4>");
}
	else if (i < walrusQuestions.length && i != 2) {
	$("#quiz-content").empty();
	$("#quiz-content").append("<h3>" + walrusQuestions[i].question + "</h3>");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[0] + "</h4>");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[1] + "</h4>");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[2] + "</h4>");
	$("#quiz-content").append("<h4 class='answers'>" + walrusQuestions[i].choices[3] + "</h4>");
}
	// When questions run out, stop game.
	else {
		$("#countdown-timer").empty();
		gameStop();
	}
}

//---------------------------------------------------------------------------
// ACTUAL GAME BITS!

// Load main start page on page load
$(document).ready(gameLoad);

// When "Start Game" button is clicked, start the game!
$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	gameStart();
});

// On click of answers, if the button text equals the correct answer text,
// show win page and increase win count, stop timer, and wait 3 seconds before
// going to next question
$("body").on("click", ".answers", function(event){
	// console.log($(this).text());
	if ($(this).text() === walrusQuestions[i].correctAnswer) {
		$("#quiz-content").html("<h2>Correct!</h2>" + "<p>" + walrusQuestions[i].explanation + "</p>");
		wins++;
		// console.log("Wins: " + wins);
		stop();
		setTimeout(nextQuestion, 3000);
	}
	// On click of answers, if the button does not equal the correct answer text,
	// show loss page and increase loss count, stop timer, and wait 3 seconds before
	// going to next question
	else {
		$("#quiz-content").html("<h2>Incorrect</h2> <h4>The answer was: " + walrusQuestions[i].correctAnswer + "</h4>" + "<p>" + walrusQuestions[i].explanation + "</p>");
		losses++;
		// console.log("Losses: " + losses);
		stop();
		setTimeout(nextQuestion, 3000);
	}
});
