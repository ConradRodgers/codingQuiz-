// constructor function for question

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

// value of user click option
Question.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
};

// quiz constructor function

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

//  current question from quiz index
Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
};

//has the quiz ended
Quiz.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;
};

// presents next question to user weather; right or wrong / scoreing +10
Quiz.prototype.guess = function(answer) {
  this.questionIndex++;

  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score + 10;
  }
};

var questions = [
  new Question(
    "What is the HTML tag under which one can write the JavaScript code?",
    ["<javascript>", "<scripted>", "<script>", "<js>"],
    "<script>"
  ),
  new Question(
    "Which of the following is not a reserved word in JavaScript?",
    ["interface", "throws", "program", "short"],
    "program"
  ),
  new Question(
    "What is the correct syntax for adding comments in JavaScript?",
    [
      "<!–This is a comment",
      "//This is a comment",
      "–This is a comment",
      "**This is a comment**"
    ],
    "//This is a comment"
  ),
  new Question(
    "The method (.trim) is used in Javascript to do what?",
    [
      "Remove blank space at the begining and end of a string",
      "add an element to an array",
      "remove an element from an array",
      "It does not do anyhting"
    ],
    "Remove blank space at the begining and end of a string"
  ),
  new Question(
    "Which of the following is an advantage of using JavaScript?",
    [
      "Increased interactivity",
      "Less server interaction",
      "Immediate feedback from the users",
      "All of the above."
    ],
    "All of the above"
  )
];
