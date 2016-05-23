exports.createOutcome = function(question, response, settings){
 
  var correct = _.isEqual(question.correctResponse, response);
  var feedback = question.model.feedback || { correct: 'correct', incorrect: 'incorrect'}  
  
  return {
    correctness: correct ? 'correct' : 'incorrect',
    feedback: correct ? feedback.correct : feedback.incorrect
  }
};