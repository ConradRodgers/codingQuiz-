// listing out questions
function populate() {
  //show score if quiz is ended
  if (quiz.isEnded()) {
    //show scores
  } else {
    // show questions
    var element = document.getElementById("questions");
    element.innerHTML = quiz.getQuestionIndex().text;

    //show answer choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i< choices.length; i++){
      var elementn = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
    
  }
}

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

// creating the object for questions

var quiz = new Quiz(questions);

//????

populate();
