document.addEventListener("DOMContentLoaded", function() {
  // once the html page is loaded, run the below code...
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
      // This is the spot to handle the "Question x of y" on the page
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
  var startQuiz = document.querySelector(".startQuiz");
  var startBtn = startQuiz.children[0];
  var timeSpan = document.querySelector("#time");
  startBtn.addEventListener("click", function(event) {
    // start button was clicked
    startQuiz.classList.add("hidden"); // hide the start quiz div which contains the button
    document.querySelector(".grid").classList.remove("hidden"); // un-hide the quiz grid
    // Start the timer
    var secondsLeft = 20; // Change this to how much time you want to give the user
    timeSpan.textContent = secondsLeft;
    var intervalId = setInterval(function() {
      if (secondsLeft === 0) {
        // stop execution of the setInterval callback function once secondsLeft reaches 0
        clearInterval(intervalId);
        // here's the spot to handle what happens when the timer runs out
        return;
      }
      secondsLeft--; // decrement seconds left
      timeSpan.textContent = secondsLeft;
    }, 1000);
  });
});
