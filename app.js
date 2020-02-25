var quiz = new Quiz(questions);

var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var questionTitle = document.getElementById("question");
var currentQuestion;

var buttons = [btn0, btn1, btn2, btn3];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    if (quiz.isEnded()) {
      alert("Finished");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].remove();
      }
      questionTitle.innerText = "Congratulations! You finished the quiz.";
      return;
    }

    if (this.innerText === currentQuestion.answer) {
      quiz.score += 1;
      alert("Correct");
    } else {
      alert("Incorrect");
    }

    quiz.questionIndex++;
    populate();
  });
}

function populate() {
  currentQuestion = quiz.getQuestionIndex();
  questionTitle.innerText = currentQuestion.text;
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    buttons[i].innerText = currentQuestion.choices[i];
  }
}

populate();
