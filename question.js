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
