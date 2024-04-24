const questions = [
	{
		question: "Which Nba Player is Known for winning 3 championships in a row, then retiring and repeating the feat?",
		answers: [
			{ text: "Michael Jordan", correct: true },
			{ text: "Charles Barkley", correct: false },
			{ text: "Magic Johnson", correct: false },
			{ text: "Bill Russell", correct: false },
		]
	},

	{
		question: "This Duo is known for having the highest point differential in wins in a single NBA season.",
		answers: [
			{ text: "Lebron James and Dwyane Wade", correct: false },
			{ text: "Wilt Chamberlain and Jerry West", correct: true },
			{ text: "Magic Johnson and Kareen Abdul-Jabbar", correct: false },
			{ text: "Steph Curry and Kevin Durant", correct: false },
		]
	},

	{
		question: "This Player was named Finals MVP in 2016 where the Warriors won a record 73 games.",
		answers: [
			{ text: "Andre Iguodala", correct: false },
			{ text: "Kevin Durant", correct: false },
			{ text: "Steph Curry", correct: false },
			{ text: "Lebron James", correct: true },
		]
	},

	{
		question: "How Many Championship rings does Bill Russell have?",
		answers: [
			{ text: "6", correct: false },
			{ text: "3", correct: false },
			{ text: "8", correct: false },
			{ text: "11", correct: true },
		]
	},
	{
		question: "I Have the Record for most points in a single NBA game. Who am I?",
		answers: [
			{ text: "Michael Jordan", correct: false },
			{ text: "Walt Frazier", correct: false },
			{ text: "Wilt Chamberlain", correct: true },
			{ text: "Lebron James", correct: false },
		]
	},
	{
		question: "Touted as the Orginal King of the Triple Double this man is largely associated with the Milwaukee Bucks.",
		answers: [
			{ text: "Jerry West", correct: false },
			{ text: "Oscar Robertson", correct: true },
			{ text: "John Stockton", correct: false },
			{ text: "Kareem Abdul Jabbar", correct: false },
		]
	},
	{
		question: "This Player Played 12 seasons in the NBA before Retiring due to HIV, later on coming back to play one more season.",
		answers: [
			{ text: "Magic Johnson", correct: true },
			{ text: "Michael Jordan", correct: false },
			{ text: "Larry Bird", correct: false },
			{ text: "Shaquille O'neal", correct: false },
		]
	},
	{
		question: "This man is Undoubtedly the greatest player to have played for both the LA Lakers and Boston Celtics.",
		answers: [
			{ text: "Larry Bird", correct: false },
			{ text: "Wilt Chamberlain", correct: false },
			{ text: "Tim Duncan", correct: false },
			{ text: "Shaquille O'neal", correct: true },
		]
	},
	{
		question: "Despite having one of the highest scoring totals in NBA history and making it to the finals 3 times, this man has never won an NBA ring.",
		answers: [
			{ text: "Charles Barkley", correct: false },
			{ text: "Elgin Baylor", correct: false },
			{ text: "Karl Malone", correct: true },
			{ text: "Hakeem Olajuwon", correct: false },
		]
	},
	{
		question: "Nicknamed 'The Dream', this mans career benefitted the most from Jordan`s hiatus from the league.",
		answers: [
			{ text: "Karl Malone", correct: false },
			{ text: "Hakeem Olajuwon", correct: true },
			{ text: "Charles Barkley", correct: false },
			{ text: "Scottie Pippen", correct: false },
		]
	},
	{
		question: "Widely considered the man who Michael Jordan modeled his game after, this 'Doctor' is no slouch either.",
		answers: [
			{ text: "Julius Erving", correct: true },
			{ text: "Bob Pettit", correct: false },
			{ text: "Elgin Baylor", correct: false },
			{ text: "Kobe Bryant", correct: false },
		]
	},
	{
		question: "This Player was known for his renowned mentally, work ethic and competitiveness on and off the court.",
		answers: [
			{ text: "Larry Bird", correct: false },
			{ text: "Michael Jordan", correct: false },
			{ text: "Bill Russell", correct: false },
			{ text: "Kobe Bryant", correct: true },
		]
	}
];


const BeginButton = document.getElementById("beginbttn");
const StartPage = document.getElementById("beginquiz");
const QuizMain = document.getElementById("QuizMain");

QuizMain.style.display = "none"
BeginButton.addEventListener("click", function () {
	StartPage.classList.add("hidden");
	StartPage.style.display = "none"
	QuizMain.classList.remove("hidden");
	QuizMain.style.display = "flex";
	QuizMain.classList.add("visible");
});

const quest = document.getElementById("question");
const answerbttn = document.getElementById("QuizAns");
const nextButton = document.getElementById("next-bttn");

let currentQuestionIndex = 0;
let score = 0;
let quizlength = 4;

function shuffle(questions) {
	var i = questions.length,
		j = 0,
		temp;

	while (i--) {
		j = Math.floor(Math.random() * (i + 1));

		temp = questions[i];
		questions[i] = questions[j];
		questions[j] = temp;
	}
	return questions;
}
var questionsran = shuffle(questions);

function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	showQuestion();
}

function showQuestion() {
	resetState();
	let currentQuestion = questionsran[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	quest.innerHTML = questionNo + ". " + currentQuestion.question;

	currentQuestion.answers.forEach(answer => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerbttn.appendChild(button);
		if (answer.correct) {
			button.dataset.correct = answer.correct
		} 
		button.addEventListener("click", selectAnswer)
	});
}

function resetState() {
	nextButton.style.display = "none";
	while (answerbttn.firstChild) {
		answerbttn.removeChild(answerbttn.firstChild);
	}

}

function selectAnswer(i) {
	const selectedBtn = i.target;
	const isCorrect = selectedBtn.dataset.correct === "true";
	if (isCorrect) {
		selectedBtn.classList.add("correct");
		score++;
	}
	else {
		selectedBtn.classList.add("incorrect");
	}
	Array.from(answerbttn.children).forEach(button => {
		if (button.dataset.correct === "true") {
			button.classList.add("correct");
		}
		button.disable = true;
	});
	nextButton.style.display = "grid";
}

function showScore() {
	resetState();
	quest.innerHTML = (`Your Score: ${score} out of ${quizlength}`);
	nextButton.innerHTML = "OverTime";
	nextButton.style.display = "block";
	{ shuffle(questions); }
}
	

function NextButtonChanger() {

	currentQuestionIndex++;
	if (currentQuestionIndex < quizlength) {
		showQuestion();
	} else {
		showScore();
	}

}

nextButton.addEventListener("click", function() {
	if (currentQuestionIndex < quizlength) {
		NextButtonChanger();
	}
	else {
		startQuiz();
	}
});
startQuiz();


	function dropper() {
		document.getElementById("dropmenu").classList.toggle("show");
        }

	window.onclick = function (event) {
            if (!event.target.matches('.abut')) {
                var dropdowns = document.getElementsByClassName("dropcont");
	var i;
	for (i = 0; i < dropdowns.length; i++) {s
                    var openDropdown = dropdowns[i];
	if (openDropdown.classList.contains('show')) {
		openDropdown.classList.remove('show');
                    }
                }
            }
        }