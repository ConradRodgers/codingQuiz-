// construction function currently on 

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
//  current question from quiz index 
quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

//has the quiz ended 

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;

}

// presents next question to user weather right or wrong 
Quiz.prototype.guess = function(anwer) {
    this.questionIndex++;

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++; 
    }